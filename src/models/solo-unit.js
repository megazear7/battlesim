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
    this.energyModRoll = weightedRandomTowards(0, 100, 1, 2);
    this.moraleModRoll = weightedRandomTowards(0, 100, 1, 2);
  }

  get energyGain() {
    return Math.min(MAX_STAT - this.unit.energy, this.maxEnergyRecovered);
  }

  get moraleGain() {
    return Math.min(MAX_STAT - this.unit.morale, this.maxMoraleRecovered);
  }

  get pacePercentage() {
    return this.pace * 100;
  }

  get maxMoraleRecovered() {
    return weightedAverage(100 - this.pacePercentage, this.moraleModRoll, 0) * (100 / this.situation.percentageOfATurnSpent);
  }

  get maxEnergyRecovered() {
    return weightedAverage(50 - this.pacePercentage, this.energyModRoll) * (100 / this.situation.percentageOfATurnSpent);
  }

  updates(delay) {
    return {
      id: this.unit.id,
      changes: this.changes(delay)
    };
  }

  changes(delay) {
    let changes = [
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
             ${this.situation.yardsTravelled > 0 ? this.battlefieldMoveDesc : ''}
             ${this.moraleGain > 0 && this.situation.minutesSpentResting > 0 ? this.moraleRecoveredMessage : ''}
             ${this.energyGain > 0 && this.situation.minutesSpentResting > 0 ? this.energyRecoveredMessage : ''}`;
  }

  get battlefieldMoveDesc() {
    return `in ${Math.floor(this.situation.secondsSpentMoving / SECONDS_IN_AN_MINUTE)} minutes.`;
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

  get energyRecoveredMessage() {
    return this.unit.battle.statReporting === STAT_PERCENTAGE
      ? `and ${Math.floor(this.energyGain)}% of their energy.`
      : this.energyRecoveredDesc;
  }

  get energyRecoveredDesc() {
    if (this.energyGain > 80) {
      return `and they got back all of there energy.`;
    } else if (this.energyGain > 60) {
      return `and they recovered almost all of their strength.`;
    } else if (this.energyGain > 40) {
      return `and they made a great recovery. The rest was very helpful.`;
    } else if (this.energyGain > 20) {
      return `and they recovered a lot of their strength`;
    } else if (this.energyGain > 15) {
      return `and they recovered much of their strength`;
    } else if (this.energyGain > 9) {
      return `and they recovered some of their strength`;
    } else if (this.energyGain > 6) {
      return `and they recovered a bit of their strength.`;
    } else if (this.energyGain > 3) {
      return `and they recovered a bit of their strength.`;
    } else {
      return `but the rest was hardly worth it.`;
    }
  }

  get moraleRecoveredMessage() {
    return this.unit.battle.statReporting === STAT_PERCENTAGE
      ? `In ${this.situation.minutesSpentResting} minutes ${this.unit.name} recovered ${Math.floor(this.moraleGain)}% of their morale `
      : this.moraleRecoveredDesc;
  }

  get moraleRecoveredDesc() {
    if (this.moraleGain > 20) {
      return `${this.unit.name} have been greatly encouraged`;
    } else if (this.moraleGain > 10) {
      return `${this.unit.name} have been encouraged`;
    } else {
      return `${this.unit.name} seem to be more willing to fight than before`;
    }
  }
}
