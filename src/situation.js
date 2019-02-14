import Combatant from './combatant.js';
import { WEAPONS } from './weapons.js';
import { ARMOR } from './armor.js';
import { store } from './store.js';
import { attack } from './battle-utils.js';
import {
  randomMinutesBetween,
  SECONDS_IN_AN_MINUTE } from './math-utils.js';
import {
  FOOT_TROOP,
  CAVALRY_TROOP,
  ARTILLERY_TROOP } from './units.js';
import {
  SLOPE_UP,
  SLOPE_DOWN,
  SLOPE_NONE } from './terrain.js';
import {
  MORALE_SUCCESS,
  MORALE_FAILURE } from './combatant.js'
import {
  SECONDS_PER_TURN,
  YARDS_PER_INCH } from './game.js';

/** @class Situation
 *  This represents the sitation of a single unit on the battle field. */
export default class Situation {
  constructor({ unit,
                armyLeadership = 0,
                terrain = 0,
                slope = SLOPE_NONE }) {
    this.terrain = terrain;
    this.slope = slope;

    this.actingUnit = new ActingUnit({
      unit: unit,
      situation: this,
      slope: this.slope });
  }

  rest() {
    return {
      messages: [
        `TODO`,
      ],
      updates: [
        this.actingUnit.updates(SECONDS_PER_TURN)
      ]
    };
  }
}
