import { weightedRandom, weightedRandomTowards } from './math-utils.js';
import { SLOPE_UP, SLOPE_DOWN, SLOPE_NONE, MAX_TERRAIN } from './terrain.js';
import { statModFor, MAX_EQUIPMENT_WEIGHT } from './game.js';
import { FOOT_TROOP, CAVALRY_TROOP, ARTILLERY_TROOP } from './units.js';

export const MORALE_SUCCESS = 'MORALE_SUCCESS';
export const MORALE_FAILURE = 'STATUS_FALL_BACK';

/** @class Situation
 *  This represents a single unit taking an order. */
export default class SoloUnit {
    constructor({ unit,
                  environment,
                  armyLeadership = 0,
                  status = MORALE_SUCCESS,
                  slope = SLOPE_NONE }) {
    this.unit = unit;
    this.environment = environment;
    this.armyLeadership = armyLeadership;
    this.status = status;
    this.slope = slope;
    this.status = this.moraleRoll() > 0 ? MORALE_SUCCESS : this.status = MORALE_FAILURE;
  }

  get terrainSpeedMod() {
    return ((MAX_TERRAIN - this.environment.terrain) / MAX_TERRAIN);
  }

  get equipmentMod() {
    return (MAX_EQUIPMENT_WEIGHT - this.unit.carriedWeight) / MAX_EQUIPMENT_WEIGHT;
  }

  get speed() {
    return this.unit.baseSpeed * this.terrainSpeedMod * statModFor(this.unit.energy) * this.equipmentMod;
  }

  get backwardsSpeed() {
    return this.unit.baseBackwardSpeed * this.terrainSpeedMod * statModFor(this.unit.energy) * this.equipmentMod;
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
    return ((MAX_TERRAIN - this.environment.terrain) / MAX_TERRAIN) * statModFor(this.unit.openness) * this.unitTypeTerrainMod;
  }

  get slopeMod() {
    return {
      [SLOPE_UP]: 0.75,
      [SLOPE_DOWN]: 1.25,
      [SLOPE_NONE]: 1,
    }[this.slope];
  }

  moraleRoll() {
    return weightedRandom(3) * 100;
  }

  // Warning: Performing multiple morale checks will do a new roll and might switch the status.
  // This should only be done when the game rules require it, not simply to "get the status" of the combatant.
  performMoraleCheck() {
    const roll = weightedRandom(3) * 100;
    const modifiedMorale = this.unit.morale - roll;


  }
}