import { weightedRandom, weightedRandomTowards, weightedAverage } from '../utils/math-utils.js';
import { SLOPE_UP, SLOPE_DOWN, SLOPE_NONE, MAX_TERRAIN } from './terrain.js';
import { statModFor, MAX_EQUIPMENT_WEIGHT, MORALE_SUCCESS, MORALE_FAILURE } from '../game.js';
import { FOOT_TROOP, CAVALRY_TROOP, ARTILLERY_TROOP } from '../game.js';

/** @class Situation
 *  This represents a single unit taking an order. */
export default class ActingUnit {
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
    return weightedRandomTowards(0, 100, 1, 2);
  }

  get terrainMovePenalty() {
    // TODO This should be based upon this.unit.openness and this.unit.isMounted
    return Math.min(this.environment.movementTerrain.reduce((sum, terrain) => sum += terrain.movePenalty, 0), 100);
  }

  get terrainSpeedMod() {
    return ((MAX_TERRAIN - this.terrainMovePenalty) / MAX_TERRAIN);
  }

  get equipmentMod() {
    return (MAX_EQUIPMENT_WEIGHT - this.unit.carriedWeight) / MAX_EQUIPMENT_WEIGHT;
  }

  get speedMod() {
    return this.terrainSpeedMod * this.energySpeedMod * this.equipmentMod * this.pace * this.slopeMod;
  }

  get speed() {
    if (this.unit.canMounted) {
      if (this.unit.isMounted) {
        return this.unit.mountedSpeed.baseSpeed * this.speedMod;
      } else {
        return this.unit.unmountedSpeed.baseSpeed * this.speedMod;
      }
    } else {
        return this.unit.baseSpeed * this.speedMod;
    }
  }

  get backwardsSpeed() {
    return this.unit.baseBackwardSpeed * this.speedMod;
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

  get energySpeedMod() {
    return weightedAverage(this.energyMod, 1);
  }

  get energyMod() {
    return this.unit.energy / 100;
  }

  get slopeMod() {
    return {
      [SLOPE_UP]: 0.75,
      [SLOPE_DOWN]: 1.1,
      [SLOPE_NONE]: 1,
    }[this.slope];
  }
}
