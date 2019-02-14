import { weightedRandomTowards, } from './math-utils.js';
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
    this.energyModRoll = weightedRandomTowards(0, 100, 10, 4);
    this.moraleModRoll = weightedRandomTowards(0, 100, 10, 4);
  }

  get energyLoss() {
    return 0 * this.energyModRoll; // TODO
  }

  get moraleLoss() {
    return 0 * this.moraleModRoll; // TODO
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
        value: this.unit.energy - this.energyLoss
      }, {
        prop: "morale",
        value: this.unit.morale - this.moraleLoss
      }, {
        prop: 'nextAction',
        value: this.unit.nextAction + delay
      }
    ];
  }
}
