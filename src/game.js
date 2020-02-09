import { SECONDS_IN_AN_HOUR, weightedRandomTowards } from './utils/math-utils.js';

// TODO Some of these need to be configurable per battle.
export const SECONDS_PER_TURN = SECONDS_IN_AN_HOUR * 0.45;
export const YARDS_TO_FIGHT = 100;
export const DEADLYNESS = 0.1;
export const SECONDS_PER_ROUND = SECONDS_PER_TURN / 30;

// TODO These should be calculated in the battle model.
export const MINUTES_PER_TURN = SECONDS_PER_TURN / 60;

// These are true constants and can remain here.
export const YARDS_PER_INCH = 50;
export const MAX_STAT = 100;
export const MAX_EQUIPMENT_WEIGHT = 100;
export const MELEE = 'melee';
export const RANGED = 'ranged';
export const SHARED_BATTLE = 'SHARED_BATTLE';
export const LOCAL_BATTLE = 'LOCAL_BATTLE';
export const NO_BATTLE = 'NO_BATTLE';
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
export const FOOT_TROOP = 0;
export const CAVALRY_TROOP = 1;
export const ARTILLERY_TROOP = 2;
export const MELEE_WEAPON = 'meleeWeapon';
export const RANGED_WEAPON = 'rangedWeapon';
export const REST = 'REST';
export const MOVE = 'MOVE';
export const CHARGE = 'CHARGE';
export const FIRE = 'FIRE';
export const ACTIONS = [ REST, MOVE, CHARGE, FIRE ];
export const NO_ACTION = 'NO_ACTION';
export const ARMY_0 = 0;
export const ARMY_1 = 1;
export const ARMY_BOTH = 'ARMY_BOTH';
export const FALLBACK_AMPLIFIER = 2;
export const DEFENDER_POSITION_NORMAL = 'DEFENDER_POSITION_NORMAL';
export const DEFENDER_POSITION_FLANKED = 'DEFENDER_POSITION_FLANKED';
export const DEFENDER_POSITION_REAR = 'DEFENDER_POSITION_REAR';

export const STAT_TYPES = [{
  name: 'Percentage status report',
  id: STAT_PERCENTAGE
}, {
  name: 'Descriptive status report',
  id: STAT_DESCRIPTION
}];

export function statModFor(stat) {
  return weightedRandomTowards(20, 100, stat, 2) / 100;
}
