import { weightedRandomTowards, numberWithCommas, weightedAverage, nearest100, SECONDS_IN_AN_MINUTE } from '../utils/math-utils.js';
import { MAX_STAT, YARDS_PER_INCH, MORALE_SUCCESS, STAT_PERCENTAGE, STAT_DESCRIPTION } from '../game.js';
import ActingUnit from './acting-unit.js';

/** @class Situation
 *  This represents a single unit taking an order. */
export default class SoloUnit extends ActingUnit {
    constructor({ unit,
                  situation,
                  armyLeadership = 0,
                  status = MORALE_SUCCESS,
                  mount = false,
                  unmount = false,
                  pace = 1,
                  slope = SLOPE_NONE }) {
    super({ unit, pace, environment: situation, armyLeadership });
    this.unit = unit;
    this.situation = situation;
    this.armyLeadership = armyLeadership;
    this.status = status;
    this.mount = mount;
    this.unmount = unmount;
    this.slope = slope;
    this.pace = pace;
    this.energyMoveModRoll = weightedRandomTowards(0, 1, 0.1, 3);
    this.energyRestModRoll = weightedRandomTowards(0, 1, 0.3, 3);
    this.moraleModRoll = weightedRandomTowards(0, 100, 1, 2);
  }

  get energyChange() {
    return Math.max(Math.min(MAX_STAT - this.unit.energy, this.maxEnergyChange), -this.unit.energy);
  }

  get moraleChange() {
    return Math.max(Math.min(MAX_STAT - this.unit.morale, this.maxMoraleChange), -this.unit.morale);
  }

  get pacePercentage() {
    return this.pace * 100;
  }

  get maxMoraleChange() {
    return weightedAverage(100 - this.pacePercentage, this.moraleModRoll, 0) * (this.situation.percentageOfATurnSpent / 100);
  }

  get maxEnergyChange() {
    return   (this.situation.percentageOfATurnSpentResting * this.energyRestModRoll)
           + (this.situation.percentageOfATurnSpentMoving * this.energyMoveModRoll * (0.5 - this.pace));
  }

  get updates() {
    return {
      id: this.unit.id,
      changes: this.changes
    };
  }

  get changes() {
    let changes = [
      {
        prop: "energy",
        value: this.unit.energy + this.energyChange
      }, {
        prop: "morale",
        value: this.unit.morale + this.moraleChange
      }, {
        prop: 'nextAction',
        value: this.unit.nextAction + this.situation.totalSecondsSpent
      }
    ];

    if (this.mount) {
      changes.push({
        prop: "isCurrentlyMounted",
        value: true,
      });
    } else if (this.unmount) {
      changes.push({
        prop: "isCurrentlyMounted",
        value: false,
      });
    }

    return changes;
  }

  get desc() {
    return ` ${this.situation.yardsTravelled > 0 ? this.moveDesc : ''}
             ${this.moraleChange > 0 && this.situation.minutesSpentResting > 0 ? this.moraleRecoveredMessage : ''}
             ${this.energyChange > 0 && this.situation.minutesSpentResting > 0 ? this.energyRecoveredMessage : ''}
             ${this.situation.totalSecondsSpent > 0 ? this.timeDesc: ''}`;
  }

  get timeDesc() {
    return `in ${Math.ceil(this.situation.totalSecondsSpent / SECONDS_IN_AN_MINUTE)} minutes.`;
  }

  get moveDesc() {
    if (this.situation.distance === -1) {
      return `${this.unit.name} moves ${Math.floor(this.situation.yardsTravelled / YARDS_PER_INCH)} inches `;
    } else if (this.situation.yardsTravelled < this.situation.distanceInYards) {
      return `${this.unit.name} could only move ${Math.floor(this.situation.yardsTravelled / YARDS_PER_INCH)} inches `;
    } else {
      return `${this.unit.name} moves the full ${Math.floor(this.situation.yardsTravelled / YARDS_PER_INCH)} inches `;
    }
  }

  get energyAndMoraleMessage() {
    return ``;
  }

  get energyRecoveredMessage() {
    return this.unit.battle.statReporting === STAT_PERCENTAGE
      ? `They recovered ${Math.floor(this.energyChange)}% of their energy`
      : this.energyRecoveredDesc;
  }

  get energyRecoveredDesc() {
    if (this.energyChange > 80) {
      return `They got back all of there energy`;
    } else if (this.energyChange > 60) {
      return `They recovered almost all of their strength`;
    } else if (this.energyChange > 40) {
      return `They made a great recovery. The rest was very helpful`;
    } else if (this.energyChange > 20) {
      return `They recovered a lot of their strength`;
    } else if (this.energyChange > 15) {
      return `They recovered much of their strength`;
    } else if (this.energyChange > 9) {
      return `They recovered some of their strength`;
    } else if (this.energyChange > 6) {
      return `They recovered a bit of their strength`;
    } else if (this.energyChange > 3) {
      return `They recovered a little bit of their strength.`;
    } else {
      return `They recovered almost no strength`;
    }
  }

  get moraleRecoveredMessage() {
    return this.unit.battle.statReporting === STAT_PERCENTAGE
      ? `In ${this.situation.minutesSpentResting} minutes ${this.unit.name} recovered ${Math.floor(this.moraleChange)}% of their morale `
      : this.moraleRecoveredDesc;
  }

  get moraleRecoveredDesc() {
    if (this.moraleChange > 20) {
      return `${this.unit.name} have been greatly encouraged`;
    } else if (this.moraleChange > 10) {
      return `${this.unit.name} have been encouraged`;
    } else {
      return `${this.unit.name} seem to be more willing to fight than before`;
    }
  }
}
