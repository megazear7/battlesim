import { NO_ARMOR } from './armor.js';
import {
  BAYONETE,
  SPRINGFIELD_RIFLED_MUSKET,
  NO_WEAPON,
  CANNON_24_POUNDER_CIVIL_WAR,
  CONFEDERATE_SMOOTH_BORE } from './weapons.js';
import {
  FOOT_TROOP,
  CAVALRY_TROOP,
  ARTILLERY_TROOP } from './units.js';

const UNION = 0;
const CONFEDERATE = 1;
const UNION_BRIGADE_SIZE = 3000;
const UNION_CAVALRY_REGIMENT_SIZE = 1000;
const CONFEDERATE_BRIGADE_SIZE = 3000;
const CONFEDERATE_CAVALRY_REGIMENT_SIZE = 1000;

export const FRESH_UNION_BRIGADE = {
  army: UNION,
  name: 'Fresh Union Brigade',
  strength: UNION_BRIGADE_SIZE,
  morale: 100,
  energy: 100,
  stands: 8,
  armor: NO_ARMOR,
  meleeWeapon: BAYONETE,
  rangedWeapon: SPRINGFIELD_RIFLED_MUSKET,
  meleeSkill: 40,
  rangedSkill: 50,
  experience: 50,
  leadership: 50,
  troopType: FOOT_TROOP,
  fullStrength: UNION_BRIGADE_SIZE,
  movementTime: 120,
  maneuverTime: 110,
};

export const FRESH_UNION_CAVALRY_REGIMENT = {
  army: UNION,
  name: 'Fresh Union Cavalry Regiment',
  strength: UNION_CAVALRY_REGIMENT_SIZE,
  morale: 100,
  energy: 100,
  stands: 6,
  armor: NO_ARMOR,
  meleeWeapon: BAYONETE,
  rangedWeapon: SPRINGFIELD_RIFLED_MUSKET,
  meleeSkill: 60,
  rangedSkill: 50,
  experience: 60,
  leadership: 60,
  troopType: CAVALRY_TROOP,
  fullStrength: UNION_CAVALRY_REGIMENT_SIZE,
  movementTime: 60,
  maneuverTime: 90,
};

export const FRESH_UNION_ARTILLERY = {
  army: UNION,
  name: 'Fresh Union Artillery (50 Cannons)',
  strength: 50,
  morale: 100,
  energy: 100,
  stands: 2,
  armor: NO_ARMOR,
  meleeWeapon: NO_WEAPON,
  rangedWeapon: CANNON_24_POUNDER_CIVIL_WAR,
  meleeSkill: 30,
  rangedSkill: 60,
  experience: 50,
  leadership: 50,
  troopType: ARTILLERY_TROOP,
  fullStrength: 50,
  movementTime: 340,
  maneuverTime: 220,
};

export const FRESH_CONFEDERATE_BRIGADE = {
  army: CONFEDERATE,
  name: 'Fresh Confederate Brigade',
  strength: CONFEDERATE_BRIGADE_SIZE,
  morale: 100,
  energy: 100,
  stands: 8,
  armor: NO_ARMOR,
  meleeWeapon: BAYONETE,
  rangedWeapon: CONFEDERATE_SMOOTH_BORE,
  meleeSkill: 50,
  rangedSkill: 50,
  experience: 60,
  leadership: 70,
  troopType: FOOT_TROOP,
  fullStrength: CONFEDERATE_BRIGADE_SIZE,
  movementTime: 120,
  maneuverTime: 80,
};

export const FRESH_CONFEDERATE_CAVALRY_REGIMENT = {
  army: CONFEDERATE,
  name: 'Fresh Confederate Cavalry Regiment',
  strength: CONFEDERATE_CAVALRY_REGIMENT_SIZE,
  morale: 100,
  energy: 100,
  stands: 6,
  armor: NO_ARMOR,
  meleeWeapon: BAYONETE,
  rangedWeapon: CONFEDERATE_SMOOTH_BORE,
  meleeSkill: 60,
  rangedSkill: 50,
  experience: 70,
  leadership: 75,
  troopType: CAVALRY_TROOP,
  fullStrength: CONFEDERATE_CAVALRY_REGIMENT_SIZE,
  movementTime: 60,
  maneuverTime: 70,
};

export const FRESH_CONFEDERATE_ARTILLERY = {
  army: CONFEDERATE,
  name: 'Fresh Confederate Artillery (50 Cannons)',
  strength: 50,
  morale: 100,
  energy: 100,
  stands: 2,
  armor: NO_ARMOR,
  meleeWeapon: NO_WEAPON,
  rangedWeapon: CANNON_24_POUNDER_CIVIL_WAR,
  meleeSkill: 30,
  rangedSkill: 55,
  experience: 60,
  leadership: 60,
  troopType: ARTILLERY_TROOP,
  fullStrength: 50,
  movementTime: 360,
  maneuverTime: 200,
};

export const CIVIL_WAR_UNITS = [
  FRESH_UNION_BRIGADE,
  { ... FRESH_UNION_BRIGADE,
    name: 'Tired Union Brigade',
    energy: 50,
  },
  { ... FRESH_UNION_BRIGADE,
    name: 'Battered Union Brigade',
    strength: UNION_BRIGADE_SIZE * 0.7,
    energy: 80
  },
  FRESH_CONFEDERATE_BRIGADE,
  { ... FRESH_CONFEDERATE_BRIGADE,
    name: 'Tired Confederate Brigade',
    energy: 50,
  },
  { ... FRESH_CONFEDERATE_BRIGADE,
    name: 'Battered Confederate Brigade',
    strength: CONFEDERATE_BRIGADE_SIZE * 0.7,
    energy: 80
  },
];
