import {
  NO_ARMOR,
  NO_WEAPON,
  STANDARD_GAMBESON,
  IRON_PARTIAL_CHAINMAIL } from '../../game.js';
import {
  SPEAR,
  PIKE,
  BLADE,
  BOW,
  LONGBOW } from './weapons.js';
import {
  FOOT_TROOP,
  CAVALRY_TROOP,
  ARTILLERY_TROOP,
  MELEE_WEAPON,
  RANGED_WEAPON } from '../../units.js';
const ARMY_1 = 0;
const ARMY_2 = 1;
const STANDARD_UNIT_SIZE = 1000;

export const UNIT_SPEAR = {
  army: ARMY_1,
  name: 'Spear',
  points: 100,
  strength: STANDARD_UNIT_SIZE,
  morale: 100,
  energy: 100,
  stands: 4,
  openness: 15,
  minFallback: 10,
  maxFallback: 20,
  ammunition: 0,
  armor: STANDARD_GAMBESON,
  [MELEE_WEAPON]: SPEAR,
  [RANGED_WEAPON]: NO_WEAPON,
  meleeSkill: 40,
  rangedSkill: 10,
  experience: 50,
  leadership: 50,
  troopType: FOOT_TROOP,
  fullStrength: STANDARD_UNIT_SIZE,
  baseSpeed: 0.5,
  baseBackwardsSpeed: 0.2,
  chargeSpeed: 0.5,
  maneuverTime: 100,
};

export const ANCIENTS_UNITS = [
  UNIT_SPEAR, { ...UNIT_SPEAR, army: ARMY_2 },
];
