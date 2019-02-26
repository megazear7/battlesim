import { NO_ARMOR, NO_WEAPON } from '../../game.js';
import {
  BAYONETE,
  SPRINGFIELD_RIFLED_MUSKET,
  CANNON_24_POUNDER_CIVIL_WAR,
  CONFEDERATE_SMOOTH_BORE } from './weapons.js';
import {
  FOOT_TROOP,
  CAVALRY_TROOP,
  ARTILLERY_TROOP,
  MELEE_WEAPON,
  RANGED_WEAPON } from '../../units.js';
const UNION = 0;
const CONFEDERATE = 1;
const UNION_REGIMENT_SIZE = 1000;
const UNION_CAVALRY_REGIMENT_SIZE = 500;
const CONFEDERATE_REGIMENT_SIZE = 1000;
const CONFEDERATE_CAVALRY_REGIMENT_SIZE = 500;

export const FRESH_UNION_REGIMENT = {
  army: UNION,
  name: 'Fresh Union Regiment',
  points: 100,
  strength: UNION_REGIMENT_SIZE,
  morale: 100,
  energy: 100,
  stands: 8,
  openness: 20,
  minFallback: 10,
  maxFallback: 20,
  ammunition: UNION_REGIMENT_SIZE * 20,
  armor: NO_ARMOR,
  [MELEE_WEAPON]: BAYONETE,
  [RANGED_WEAPON]: SPRINGFIELD_RIFLED_MUSKET,
  meleeSkill: 40,
  rangedSkill: 50,
  experience: 50,
  leadership: 50,
  troopType: FOOT_TROOP,
  fullStrength: UNION_REGIMENT_SIZE,
  baseSpeed: 0.5, // meters per second
  baseBackwardsSpeed: 0.25,
  chargeSpeed: 0.7, // TODO Use these values
  maneuverTime: 110,
};

export const FRESH_UNION_CAVALRY_REGIMENT = {
  army: UNION,
  name: 'Fresh Union Cavalry Regiment',
  points: 100,
  strength: UNION_CAVALRY_REGIMENT_SIZE,
  morale: 100,
  energy: 100,
  stands: 6,
  openness: 20,
  minFallback: 10,
  maxFallback: 20,
  ammunition: UNION_CAVALRY_REGIMENT_SIZE * 20,
  armor: NO_ARMOR,
  [MELEE_WEAPON]: BAYONETE,
  [RANGED_WEAPON]: SPRINGFIELD_RIFLED_MUSKET,
  meleeSkill: 60,
  rangedSkill: 50,
  experience: 60,
  leadership: 60,
  troopType: CAVALRY_TROOP,
  fullStrength: UNION_CAVALRY_REGIMENT_SIZE,
  isMounted: true,
  isCurrentlyMounted: true,
  canUnmount: true,
  mountedSpeed: {
    baseSpeed: 1,
    baseBackwardsSpeed: 0.5,
    chargeSpeed: 1,
  },
  unmountedSpeed: {
    baseSpeed: 0.5,
    chargeSpeed: 0.7,
    backwardsSpeed: 0.25,
  },
  maneuverTime: 90,
};

export const FRESH_UNION_ARTILLERY = {
  army: UNION,
  name: 'Fresh Union Artillery (50 Cannons)',
  points: 100,
  strength: 20,
  morale: 100,
  energy: 100,
  stands: 2,
  openness: 0,
  minFallback: 10,
  maxFallback: 20,
  ammunition: 50 * 100,
  armor: NO_ARMOR,
  [MELEE_WEAPON]: NO_WEAPON,
  [RANGED_WEAPON]: CANNON_24_POUNDER_CIVIL_WAR,
  meleeSkill: 30,
  rangedSkill: 60,
  experience: 50,
  leadership: 50,
  troopType: ARTILLERY_TROOP,
  fullStrength: 50,
  baseSpeed: 0.3,
  baseBackwardsSpeed: 0.1,
  chargeSpeed: 0.1,
  maneuverTime: 220,
};

export const FRESH_CONFEDERATE_REGIMENT = {
  army: CONFEDERATE,
  name: 'Fresh Confederate Regiment',
  points: 100,
  strength: CONFEDERATE_REGIMENT_SIZE,
  morale: 100,
  energy: 100,
  stands: 8,
  openness: 20,
  minFallback: 10,
  maxFallback: 20,
  ammunition: CONFEDERATE_REGIMENT_SIZE * 20,
  armor: NO_ARMOR,
  [MELEE_WEAPON]: BAYONETE,
  [RANGED_WEAPON]: CONFEDERATE_SMOOTH_BORE,
  meleeSkill: 50,
  rangedSkill: 50,
  experience: 75,
  leadership: 70,
  troopType: FOOT_TROOP,
  fullStrength: CONFEDERATE_REGIMENT_SIZE,
  baseSpeed: 0.5, // meters per second
  baseBackwardsSpeed: 0.25,
  chargeSpeed: 0.7,
  maneuverTime: 80,
};

export const FRESH_CONFEDERATE_CAVALRY_REGIMENT = {
  army: CONFEDERATE,
  name: 'Fresh Confederate Cavalry Regiment',
  points: 100,
  strength: CONFEDERATE_CAVALRY_REGIMENT_SIZE,
  morale: 100,
  energy: 100,
  stands: 6,
  openness: 20,
  minFallback: 10,
  maxFallback: 20,
  ammunition: CONFEDERATE_CAVALRY_REGIMENT_SIZE * 20,
  armor: NO_ARMOR,
  [MELEE_WEAPON]: BAYONETE,
  [RANGED_WEAPON]: CONFEDERATE_SMOOTH_BORE,
  meleeSkill: 60,
  rangedSkill: 50,
  experience: 80,
  leadership: 75,
  troopType: CAVALRY_TROOP,
  fullStrength: CONFEDERATE_CAVALRY_REGIMENT_SIZE,
  isMounted: true,
  isCurrentlyMounted: true,
  canUnmount: true,
  mountedSpeed: {
    baseSpeed: 1,
    baseBackwardsSpeed: 0.5,
    chargeSpeed: 1,
  },
  unmountedSpeed: {
    baseSpeed: 0.5,
    chargeSpeed: 0.7,
    backwardsSpeed: 0.25,
  },
  maneuverTime: 70,
};

export const FRESH_CONFEDERATE_ARTILLERY = {
  army: CONFEDERATE,
  name: 'Fresh Confederate Artillery (50 Cannons)',
  points: 100,
  strength: 20,
  morale: 100,
  energy: 100,
  stands: 2,
  openness: 0,
  minFallback: 10,
  maxFallback: 20,
  ammunition: 50 * 100,
  armor: NO_ARMOR,
  [MELEE_WEAPON]: NO_WEAPON,
  [RANGED_WEAPON]: CANNON_24_POUNDER_CIVIL_WAR,
  meleeSkill: 30,
  rangedSkill: 55,
  experience: 70,
  leadership: 60,
  troopType: ARTILLERY_TROOP,
  fullStrength: 50,
  baseSpeed: 0.3,
  baseBackwardsSpeed: 0.1,
  chargeSpeed: 0.1,
  maneuverTime: 200,
};

export const CIVIL_WAR_UNITS = [
  FRESH_UNION_REGIMENT,
  { ... FRESH_UNION_REGIMENT,
    name: 'Tired Union Regiment',
    points: 80,
    energy: 50,
  },
  { ... FRESH_UNION_REGIMENT,
    name: 'Battered Union Regiment',
    points: 60,
    strength: UNION_REGIMENT_SIZE * 0.7,
    energy: 80
  },
  FRESH_CONFEDERATE_REGIMENT,
  { ... FRESH_CONFEDERATE_REGIMENT,
    name: 'Tired Confederate Regiment',
    points: 80,
    energy: 50,
  },
  { ... FRESH_CONFEDERATE_REGIMENT,
    name: 'Battered Confederate Regiment',
    points: 60,
    strength: CONFEDERATE_REGIMENT_SIZE * 0.7,
    energy: 80
  },
];
