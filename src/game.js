import { SECONDS_IN_AN_HOUR, weightedRandomTowards } from './math-utils.js';

// TODO These need to be configurable per scenario.
export const SECONDS_PER_TURN = SECONDS_IN_AN_HOUR * 0.45;
export const MINUTES_PER_TURN = SECONDS_PER_TURN / 60;
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
export const STAT_PERCENTAGE = 'STAT_PERCENTAGE';
export const STAT_DESCRIPTION = 'STAT_DESCRIPTION';
export const STRENGTH_MESSAGE_DESCRIPTIVE = 'STRENGTH_MESSAGE_DESCRIPTIVE';
export const CASUALTY_MESSAGE_DESCRIPTIVE = 'CASUALTY_MESSAGE_DESCRIPTIVE';
export const ACTION_TYPE_UNIT = 'ACTION_TYPE_UNIT';
export const ACTION_TYPE_ARMY = 'ACTION_TYPE_ARMY';
export const ACTION_TYPE_EVENT = 'ACTION_TYPE_EVENT';
export const NO_PLAYER_TURNS = 'NO_PLAYER_TURNS';
export const NO_ARMOR =  'NO_ARMOR';
export const POWER_VS_FOOT = 'powerVsFoot';
export const POWER_VS_MOUNTED = 'powerVsMounted';
export const NO_WEAPON = 'NO_WEAPON';

export function statModFor(stat) {
  return weightedRandomTowards(20, 80, stat, 2) / 100;
}
