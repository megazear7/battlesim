import {
  SECONDS_IN_AN_HOUR,
  weightedRandomTowards } from './math-utils.js';

export const SECONDS_PER_TURN = SECONDS_IN_AN_HOUR * 0.9;
export const YARDS_PER_INCH = 100;
export const MAX_STAT = 100;
export const DEADLYNESS = 0.1;

export function statModFor(stat) {
  return weightedRandomTowards(20, 80, stat, 2) / 100;
}
