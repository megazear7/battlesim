import { weightedRandomTowards, } from './math-utils.js';
import { MAX_STAT } from './game.js';
import ActingUnit, { MORALE_SUCCESS, MORALE_FAILURE } from './acting-unit.js';

/** @class Situation
 *  This represents a single unit taking an order. */
export default class SoloUnit extends ActingUnit {
    constructor({ unit,
                  situation,
                  armyLeadership = 0,
                  status = MORALE_SUCCESS,
                  slope = SLOPE_NONE }) {
    super({ unit, environment: situation, armyLeadership });
    this.unit = unit;
    this.situation = situation;
    this.armyLeadership = armyLeadership;
    this.status = status;
    this.slope = slope;
    this.energyModRoll = weightedRandomTowards(0, 100, 50, 2);
    this.moraleModRoll = weightedRandomTowards(0, 100, 50, 2);
  }

  get energyGain() {
    return Math.min(MAX_STAT - this.unit.energy, this.maxEnergyRecovered);
  }

  get moraleGain() {
    return Math.min(MAX_STAT - this.unit.morale, this.maxMoraleRecovered);
  }

  get maxMoraleRecovered() {
    return 20 * this.moraleModRoll *
      (this.situation.percentageOfATurnSpentResting / 100);
  }

  get maxEnergyRecovered() {
    return 20 * this.energyModRoll *
      (this.situation.percentageOfATurnSpentResting / 100) *
      ((100 - this.situation.percentageOfATurnSpentMoving) / 100);
  }

  updates(delay) {
    return {
      id: this.unit.id,
      changes: this.changes(delay)
    };
  }

  changes(delay) {
    return [
      {
        prop: "energy",
        value: this.unit.energy + this.energyGain
      }, {
        prop: "morale",
        value: this.unit.morale + this.moraleGain
      }, {
        prop: 'nextAction',
        value: this.unit.nextAction + delay
      }
    ];
  }

  get desc() {
    return `Energy recovered: ${this.energyGain}. Morale recovered: ${this.moraleGain}`;
  }
}
