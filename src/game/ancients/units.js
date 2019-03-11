import {
  NO_ARMOR,
  NO_WEAPON,
  } from '../../game.js';
import {
  SPEAR,
  PIKE,
  BLADE,
  BOW,
  LONGBOW,
  KNIGHT, } from './weapons.js';
import {
  STANDARD_GAMBESON,
  IRON_PARTIAL_CHAINMAIL,
  STEEL_COMPLETE_PLATEMAIL } from './armor.js';
import {
  FOOT_TROOP,
  CAVALRY_TROOP,
  ARTILLERY_TROOP,
  MELEE_WEAPON,
  RANGED_WEAPON } from '../../game.js';
const ARMY_1 = 0;
const ARMY_2 = 1;
const STANDARD_UNIT_SIZE = 1000;

const BASIC_UNIT = {
  army: ARMY_1,
  name: 'Basic Unit',
  points: 100,
  strength: STANDARD_UNIT_SIZE,
  morale: 100,
  energy: 100,
  stands: 4,
  minFallback: 10,
  maxFallback: 20,
  ammunition: 0,
  armor: NO_ARMOR,
  [MELEE_WEAPON]: NO_WEAPON,
  [RANGED_WEAPON]: NO_WEAPON,
  meleeSkill: 50,
  rangedSkill: 50,
  experience: 50,
  leadership: 50,
  fullStrength: STANDARD_UNIT_SIZE,
  maneuverTime: 100,
};

const BASIC_FOOT_UNIT = {
  ...BASIC_UNIT,
  name: 'Basic Foot Unit',
  troopType: FOOT_TROOP,
  baseSpeed: 0.5,
  baseBackwardsSpeed: 0.25,
  chargeSpeed: 0.5,
}

const BASIC_MOUNTED_UNIT = {
  ...BASIC_UNIT,
  name: 'Basic Mounted Unit',
  troopType: CAVALRY_TROOP,
  baseSpeed: 1,
  baseBackwardsSpeed: 0.5,
  chargeSpeed: 1,
}

export const UNIT_SPEAR = {
  ...BASIC_FOOT_UNIT,
  name: 'Spear',
  [MELEE_WEAPON]: SPEAR,
  armor: STANDARD_GAMBESON,
  rangedSkill: 10,
  baseBackwardsSpeed: 0.2,
  openness: 15,
}

export const UNIT_HEAVY_FOOT = {
  ...BASIC_FOOT_UNIT,
  name: 'Heavy Foot',
  [MELEE_WEAPON]: BLADE,
  armor: IRON_PARTIAL_CHAINMAIL,
  rangedSkill: 10,
  baseBackwardsSpeed: 0.15,
  openness: 10,
}

export const UNIT_LIGHT_CAVALRY = {
  ...BASIC_MOUNTED_UNIT,
  name: 'Light Cavalry',
  [MELEE_WEAPON]: BLADE,
  armor: STANDARD_GAMBESON,
  rangedSkill: 60,
  baseBackwardsSpeed: 0.8,
  openness: 40,
}

export const UNIT_KNIGHTS = {
  ...BASIC_MOUNTED_UNIT,
  name: 'Knights',
  [MELEE_WEAPON]: KNIGHT,
  armor: STEEL_COMPLETE_PLATEMAIL,
  rangedSkill: 20,
  baseBackwardsSpeed: 0.3,
  openness: 10,
}

export const ANCIENTS_UNITS = [
  UNIT_SPEAR, { ...UNIT_SPEAR, army: ARMY_2 },
  UNIT_HEAVY_FOOT, { ...UNIT_HEAVY_FOOT, army: ARMY_2 },
  UNIT_LIGHT_CAVALRY, { ...UNIT_LIGHT_CAVALRY, army: ARMY_2 },
  UNIT_KNIGHTS, { ...UNIT_KNIGHTS, army: ARMY_2 },
];
