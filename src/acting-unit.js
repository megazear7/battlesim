import { weightedRandom, weightedRandomTowards } from './math-utils.js';
import { SLOPE_UP, SLOPE_DOWN, SLOPE_NONE, MAX_TERRAIN } from './terrain.js';
import { statModFor, MAX_EQUIPMENT_WEIGHT } from './game.js';
import { FOOT_TROOP, CAVALRY_TROOP, ARTILLERY_TROOP } from './units.js';

export const MORALE_SUCCESS = 'MORALE_SUCCESS';
export const MORALE_FAILURE = 'MORALE_FAILURE';

/** @class Situation
 *  This represents a single unit taking an order. */
export class ActingUnit {
    constructor({ unit,
                  pace = 1,
                  environment,
                  armyLeadership = 0,
                  slope = SLOPE_NONE,
                  status = MORALE_SUCCESS, }) {
    this.unit = unit;
    this.pace = pace;
    this.environment = environment;
    this.armyLeadership = armyLeadership;
    this.slope = slope;
    this.status = this.moraleRoll() > this.unit.morale ? MORALE_FAILURE : this.status = MORALE_SUCCESS;
  }

  yardsMovedPer(seconds) {
    return this.speed * seconds;
  }

  moraleRoll() {
    return weightedRandom(2) * 100;
  }

  get terrainMovePenalty() {
    // This should be based upon this.unit.openness and this.unit.isMounted
    return Math.min(this.environment.movementTerrain.reduce((sum, terrain) => sum += terrain.movePenalty, 0), 100);
  }

  get terrainSpeedMod() {
    return ((MAX_TERRAIN - this.terrainMovePenalty) / MAX_TERRAIN);
  }

  get equipmentMod() {
    return (MAX_EQUIPMENT_WEIGHT - this.unit.carriedWeight) / MAX_EQUIPMENT_WEIGHT;
  }

  get speed() {
    if (this.unit.canMounted) {
      if (this.unit.isMounted) {
        return this.unit.mountedSpeed.baseSpeed * this.terrainSpeedMod * statModFor(this.unit.energy) * this.equipmentMod * this.pace;
      } else {
        return this.unit.unmountedSpeed.baseSpeed * this.terrainSpeedMod * statModFor(this.unit.energy) * this.equipmentMod * this.pace;
      }
    } else {
        return this.unit.baseSpeed * this.terrainSpeedMod * statModFor(this.unit.energy) * this.equipmentMod * this.pace;
    }
  }

  get backwardsSpeed() {
    return this.unit.baseBackwardSpeed * this.terrainSpeedMod * statModFor(this.unit.energy) * this.equipmentMod * this.pace;
  }

  get armor() {
    return this.unit.armor.defense;
  }

  get unitTypeTerrainMod() {
    return {
      [FOOT_TROOP]: 1,
      [CAVALRY_TROOP]: 0.5,
      [ARTILLERY_TROOP]: 0.25
    }[this.unit.unitType];
  }

  get terrainMod() {
    return ((MAX_TERRAIN - this.terrainMovePenalty) / MAX_TERRAIN) * statModFor(this.unit.openness) * this.unitTypeTerrainMod;
  }

  get slopeMod() {
    return {
      [SLOPE_UP]: 0.75,
      [SLOPE_DOWN]: 1.25,
      [SLOPE_NONE]: 1,
    }[this.slope];
  }
}
