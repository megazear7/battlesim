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

  rest(timeSpent = SECONDS_PER_TURN) {
    this.timeSpentMoving = 0;
    this.timeSpentResting = timeSpent;

    return this.actionResult;
  }


  move(distance) {
    // TODO calculate time spent moving based upon the distance
    this.timeSpentMoving = 0;
    this.timeSpentResting = 0;

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

  get percentageOfATurnSpentMoving() {
    return (this.timeSpentResting / SECONDS_PER_TURN) * 100;
  }

  get percentageOfATurnSpentResting() {
    return (this.timeSpentResting / SECONDS_PER_TURN) * 100;
  }
}
