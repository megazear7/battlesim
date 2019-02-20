import { SECONDS_IN_AN_HOUR, weightedRandomTowards } from './math-utils.js';

// TODO These need to be configurable per scenario.
export const SECONDS_PER_TURN = SECONDS_IN_AN_HOUR * 0.45;
export const MINUTES_PER_TURN = SECONDS_PER_TURN / 60;
export const SECONDS_PER_PLAYER_TURN = 1;
export const SECONDS_PER_ROUND = SECONDS_PER_TURN / 30;
export const YARDS_PER_INCH = 50;
export const MAX_STAT = 100;
export const DEADLYNESS = 1;
export const MAX_EQUIPMENT_WEIGHT = 100;
export const YARDS_TO_FIGHT = 100;
export const MELEE = 'melee';
export const RANGED = 'ranged';
export const MORALE_SUCCESS = 'MORALE_SUCCESS';
export const MORALE_FAILURE = 'MORALE_FAILURE';

export function statModFor(stat) {
  return weightedRandomTowards(20, 80, stat, 2) / 100;
}
