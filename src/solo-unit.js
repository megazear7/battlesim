import { weightedRandomTowards, numberWithCommas, weightedAverage, nearest100, SECONDS_IN_AN_MINUTE } from './math-utils.js';
import { MAX_STAT, YARDS_PER_INCH, MORALE_SUCCESS, STAT_PERCENTAGE, STAT_DESCRIPTION } from './game.js';
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
    this.energyModRoll = weightedRandomTowards(0, 100, 30, 2);
    this.moraleModRoll = weightedRandomTowards(0, 100, 1, 2);
  }

  get energyGain() {
    return Math.min(MAX_STAT - this.unit.energy, this.maxEnergyRecovered);
  }

  get moraleGain() {
    return Math.min(MAX_STAT - this.unit.morale, this.maxMoraleRecovered);
  }

  get paceAdjustment() {
    return (1 - this.pace) * 100;
  }

  get maxMoraleRecovered() {
    return weightedAverage(this.paceAdjustment, this.moraleModRoll, 0);
  }

  get maxEnergyRecovered() {
    return weightedAverage(this.paceAdjustment, this.energyModRoll, this.situation.percentageOfATurnSpentResting);
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
      return `You move ${Math.floor(this.situation.yardsTravelled / YARDS_PER_INCH)} inches `;
    } else if (this.situation.yardsTravelled < this.situation.distanceInYards) {
      return `You could only move ${Math.floor(this.situation.yardsTravelled / YARDS_PER_INCH)} inches `;
    } else {
      return `You move the full ${Math.floor(this.situation.yardsTravelled / YARDS_PER_INCH)} inches `;
    }
  }

  get energyRecoveredMessage() {
    return this.unit.battle.statReporting === STAT_PERCENTAGE
      ? `and ${this.energyGain}% of their energy.`
      : this.energyRecoveredDesc;
  }

  get energyRecoveredDesc() {
    if (this.energyGain > 80) {
      return `In ${this.situation.minutesSpentResting} minutes they got back all of there energy.`;
    } else if (this.energyGain > 60) {
      return `In ${this.situation.minutesSpentResting} minutes they recovered almost all of their strength.`;
    } else if (this.energyGain > 40) {
      return `In ${this.situation.minutesSpentResting} minutes they made a great recovery. The rest was very helpful.`;
    } else if (this.energyGain > 20) {
      return `In ${this.situation.minutesSpentResting} minutes they recovered a lot of their strength`;
    } else if (this.energyGain > 15) {
      return `In ${this.situation.minutesSpentResting} minutes they recovered much of their strength`;
    } else if (this.energyGain > 9) {
      return `In ${this.situation.minutesSpentResting} minutes they recovered some of their strength`;
    } else if (this.energyGain > 6) {
      return `In ${this.situation.minutesSpentResting} minutes they recovered a bit of their strength.`;
    } else if (this.energyGain > 3) {
      return `In ${this.situation.minutesSpentResting} minutes they recovered a bit of their strength.`;
    } else {
      return `The rest was hardly worth it.`;
    }
  }

  get moraleRecoveredMessage() {
    return this.unit.battle.statReporting === STAT_PERCENTAGE
      ? `In ${this.situation.minutesSpentResting} minutes they recovered ${this.moraleGain}% of their morale `
      : this.moraleRecoveredDesc;
  }

  get moraleRecoveredDesc() {
    if (this.moraleGain > 20) {
      return `They have been greatly encouraged.`;
    } else if (this.moraleGain > 10) {
      return `They have been encouraged.`;
    } else {
      return `They seem to be more willing to fight than before.`;
    }
  }
}
