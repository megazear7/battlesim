import { SLOPE_NONE } from './terrain.js';
import { SECONDS_PER_TURN, MINUTES_PER_TURN, YARDS_PER_INCH, MORALE_SUCCESS, MORALE_FAILURE } from '../game.js';
import { SECONDS_IN_AN_MINUTE } from '../utils/math-utils.js';
import SoloUnit from './solo-unit.js';

/** @class Situation
 *  This represents the sitation of a single unit on the battle field. */
export default class Situation {
  constructor({ unit,
                armyLeadership = 0,
                movementTerrain = 0,
                mount = false,
                unmount = false,
                pace = 1,
                slope = SLOPE_NONE }) {
    this.movementTerrain = movementTerrain;
    this.slope = slope;

    this.soloUnit = new SoloUnit({
      unit: unit,
      situation: this,
      mount,
      unmount,
      pace,
      slope: this.slope });
  }

  rest(minutesSpent = MINUTES_PER_TURN) {
    this.distance = 0;
    this.secondsSpentMoving = 0;
    this.secondsSpentResting = minutesSpent * SECONDS_IN_AN_MINUTE;

    return this.actionResult;
  }

  move(distance) {
    this.distance = distance;
    this.secondsSpentMoving = this.yardsTravelled / this.soloUnit.speed;
    this.secondsSpentResting = 0;

    return this.actionResult;
  }

  get actionResult() {
    return {
      messages: [
        this.soloUnit.desc,
      ],
      updates: [
        this.soloUnit.updates(SECONDS_PER_TURN)
      ]
    };
  }

  get maxYardsTravelled() {
    return this.secondsAvailableToMove * this.soloUnit.speed;
  }

  get secondsAvailableToMove() {
    return SECONDS_PER_TURN - this.soloUnit.unit.secondsToIssueOrder;
  }

  get yardsTravelled() {
    if (this.distance === -1) {
      return this.maxYardsTravelled;
    } else {
      return Math.min(this.distanceInYards, this.maxYardsTravelled);
    }
  }

  get distanceInYards() {
    return this.distance * YARDS_PER_INCH;
  }

  get totalSecondsSpent() {
    return this.secondsSpentMoving + this.secondsToIssueOrder;
  }

  get percentageOfATurnSpentMoving() {
    return (this.secondsSpentMoving / SECONDS_PER_TURN) * 100;
  }

  get percentageOfATurnSpentResting() {
    return (this.secondsSpentResting / SECONDS_PER_TURN) * 100;
  }

  get minutesSpentResting() {
    return this.secondsSpentResting / SECONDS_IN_AN_MINUTE;
  }
}
