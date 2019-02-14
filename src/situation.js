import SoloUnit from './solo-unit.js';
import { SLOPE_NONE } from './terrain.js';
import { MORALE_SUCCESS, MORALE_FAILURE } from './acting-unit.js'
import { SECONDS_PER_TURN, YARDS_PER_INCH } from './game.js';

/** @class Situation
 *  This represents the sitation of a single unit on the battle field. */
export default class Situation {
  constructor({ unit,
                armyLeadership = 0,
                terrain = 0,
                slope = SLOPE_NONE }) {
    this.terrain = terrain;
    this.slope = slope;

    this.soloUnit = new SoloUnit({
      unit: unit,
      situation: this,
      slope: this.slope });
  }

  rest(secondsSpent = SECONDS_PER_TURN) {
    this.distance = 0;
    this.secondsSpentMoving = 0;
    this.secondsSpentResting = secondsSpent;

    return this.actionResult;
  }

  move(distance) {
    this.distance = distance === -1 ? Number.MAX_SAFE_INTEGER : distance;
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
    return Math.min(this.distanceInYards, this.maxYardsTravelled);
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
}
