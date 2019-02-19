import { weightedRandomTowards, numberWithCommas, weightedAverage, nearest100, SECONDS_IN_AN_MINUTE } from './math-utils.js';
import { MAX_STAT, YARDS_PER_INCH } from './game.js';
import ActingUnit, { MORALE_SUCCESS, MORALE_FAILURE } from './acting-unit.js';

/** @class Situation
 *  This represents a single unit taking an order. */
export default class SoloUnit extends ActingUnit {
    constructor({ unit,
                  situation,
                  armyLeadership = 0,
                  status = MORALE_SUCCESS,
                  mount = false,
                  unmount = false,
                  slope = SLOPE_NONE }) {
    super({ unit, environment: situation, armyLeadership });
    this.unit = unit;
    this.situation = situation;
    this.armyLeadership = armyLeadership;
    this.status = status;
    this.mount = mount;
    this.unmount = unmount;
    this.slope = slope;
    this.energyModRoll = weightedRandomTowards(0, 100, 30, 2);
    this.moraleModRoll = weightedRandomTowards(0, 100, 1, 2);
  }

  get energyGain() {
    if (this.situation.minutesSpentResting > 0) {
      return Math.min(MAX_STAT - this.unit.energy, this.maxEnergyRecovered);
    } else {
      return 0;
    }
  }

  get moraleGain() {
    if (this.situation.minutesSpentResting > 0) {
      return Math.min(MAX_STAT - this.unit.morale, this.maxMoraleRecovered);
    } else {
      return 0;
    }
  }

  get maxMoraleRecovered() {
    return weightedAverage(
      { value: this.moraleModRoll, weight: 2 },
      this.situation.percentageOfATurnSpentResting / 4,
    );
  }

  get maxEnergyRecovered() {
    return weightedAverage(
      this.energyModRoll,
      this.situation.percentageOfATurnSpentResting,
      100 - this.situation.percentageOfATurnSpentMoving,
    );
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
    return `${this.situation.yardsTravelled > 0 ? this.moveDesc : ''} ${this.situation.yardsTravelled > 0 ? this.battlefieldMoveDesc : ''} ${this.energyGain > 0 && this.situation.minutesSpentResting > 0 ? this.energyRecoveredDesc : ''} ${this.moraleGain > 0 && this.situation.minutesSpentResting > 0 ? this.moraleRecoveredDesc : ''}`;
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
