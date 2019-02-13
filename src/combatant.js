export const MORALE_SUCCESS = 'MORALE_SUCCESS';
export const MORALE_FAILURE = 'STATUS_FALL_BACK';

import { weightedRandom } from './math-utils.js';

export default class Combatant {
    constructor({ unit,
                  armyLeadership = 0,
                  terrainDefense = 0,
                  engagedStands = -1,
                  status = MORALE_SUCCESS }) {
    this.unit = unit;
    this.armyLeadership = armyLeadership;
    this.terrainDefense = terrainDefense;
    this.engagedStands = engagedStands <= -1 || engagedStands > unit.stands ? unit.stands : engagedStands;
    // TODO Could we calculate the status ourself instead of it being controlled from the outside?
    this.status = status;
    this.casualties = 0;
    this.energyLoss = 0;
    this.moraleLoss = 0;
    this.leadershipLoss = 0;
  }

  get strength() {
    return Math.max(this.unit.strength - this.strengthLoss, 0)
  }

  get energy() {
    return Math.max(this.unit.energy - this.energyLoss, 0)
  }

  get morale() {
    return Math.max(this.unit.morale - this.moraleLoss, 0)
  }

  get leadership() {
    return Math.max(this.unit.leadership - this.leadershipLoss, 0)
  }

  // Warning: Performing multiple morale checks will do a new roll and might switch the status.
  // This should only be done when the game rules require it, not simply to "get the status" of the combatant.
  performMoraleCheck() {
    const roll = weightedRandom(3) * 100;
    const modifiedMorale = this.morale - roll;

    if (modifiedMorale > 0) {
      this.status = MORALE_SUCCESS;
    } else {
      this.status = MORALE_FAILURE;
    }
  }

  battleReport() {
    return `${this.casualtyMessage}`;
  }

  exactBattleReport() {
    return `${this.unit.name} -- ${this.status} -- Casualties: ${this.casualties} -- Energy Loss: ${this.energyLoss} -- Morale Loss: ${this.moraleLoss} -- Leadership Loss: ${this.leadershipLoss}`;
  }

  updates(nextAction) {
    return {
      id: this.unit.id,
      changes: this.changes(nextAction)
    };
  }

  changes(nextAction) {
    return [
      { prop: "strength",
        value: this.strength
      }, {
        prop: "energy",
        value: this.energy
      }, {
        prop: "morale",
        value: this.morale,
      }, {
        prop: "leadership",
        value: this.leadership
      }, {
        prop: 'nextAction',
        value: nextAction
      }
    ];
  }

  get casualtyMessage() {
    if (this.casualties > this.unit.strength) {
      return `${this.unit.name} was totally destroyed.`;
    } else if (this.casualties > this.unit.strength * 0.75) {
      return `${this.unit.name} sustained terrible casualties. Almost the whole unit was destroyed.`;
    } else if (this.casualties > this.unit.strength * 0.50) {
      return `${this.unit.name} sustained terrible casualties. Over half the unit is destroyed.`;
    } else if (this.casualties > this.unit.strength * 0.30) {
      return `${this.unit.name} sustained terrible casualties.`;
    } else if (this.casualties > this.unit.strength * 0.20) {
      return `${this.unit.name} sustained grave casualties.`;
    } else if (this.casualties > this.unit.strength * 0.15) {
      return `${this.unit.name} sustained massive casualties.`;
    } else if (this.casualties > this.unit.strength * 0.10) {
      return `${this.unit.name} sustained major casualties.`;
    } else if (this.casualties > this.unit.strength * 0.5) {
      return `${this.unit.name} sustained significant casualties.`;
    } else if (this.casualties > this.unit.strength * 0.03) {
      return `${this.unit.name} sustained noticable casualties.`;
    } else if (this.casualties > this.unit.strength * 0.01) {
      return `${this.unit.name} sustained minor casualties.`;
    } else {
      return `${this.unit.name} sustained almost no casualties.`;
    }
  }
}
