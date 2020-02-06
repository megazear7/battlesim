import {
  POWER_VS_FOOT,
  POWER_VS_MOUNTED,
  NO_WEAPON,
} from '../../game.js';

export const SWORD = 'SWORD';
export const SPEAR = 'SPEAR';
export const PIKE = 'PIKE';
export const LONGBOW = 'LONGBOW';
export const BAYONETE = 'BAYONETE';
export const BROWN_BESS_SMOOTH_BORE = 'BROWN_BESS_SMOOTH_BORE';
export const CONFEDERATE_SMOOTH_BORE = 'CONFEDERATE_SMOOTH_BORE';
export const SPRINGFIELD_RIFLED_MUSKET = 'SPRINGFIELD_RIFLED_MUSKET';
export const CANNON_6_POUNDER_CIVIL_WAR = 'CANNON_24_POUNDER_CIVIL_WAR';
export const CANNON_12_POUNDER_CIVIL_WAR = 'CANNON_24_POUNDER_CIVIL_WAR';
export const CANNON_24_POUNDER_CIVIL_WAR = 'CANNON_24_POUNDER_CIVIL_WAR';
export const LEE_ENFIELD_303 = 'LEE_ENFIELD_303';

export const WEAPONS = {
  [SWORD]: {
    name: 'Sword',
    [POWER_VS_FOOT]: 50,
    [POWER_VS_MOUNTED]: 40,
    volume: 35,
    weight: 1,
    range: 0,
    dropoff: 2,
  },
  [BAYONETE]: {
    name: 'Bayonete',
    [POWER_VS_FOOT]: 20,
    [POWER_VS_MOUNTED]: 20,
    volume: 10,
    weight: 1,
    range: 0,
    dropoff: 2,
  },
  [BROWN_BESS_SMOOTH_BORE]: { // Standard revolutionary war rifle
    name: 'Brown Bess Smooth Bore',
    [POWER_VS_FOOT]: 120,
    [POWER_VS_MOUNTED]: 120,
    volume: 5,
    weight: 3,
    range: 250,
    dropoff: 2,
    effectiveAtCloseRange: true,
  },
  [CONFEDERATE_SMOOTH_BORE]: { // Standard union civil war rifle
    name: 'Smoothbore Musket',
    [POWER_VS_FOOT]: 160,
    [POWER_VS_MOUNTED]: 160,
    volume: 6,
    weight: 3,
    range: 500,
    dropoff: 2,
    effectiveAtCloseRange: true,
  },
  [SPRINGFIELD_RIFLED_MUSKET]: { // Standard union civil war rifle
    name: 'Springfield Rifled Musket',
    [POWER_VS_FOOT]: 180,
    [POWER_VS_MOUNTED]: 180,
    volume: 7,
    weight: 3,
    range: 600,
    dropoff: 2,
  },
  [CANNON_6_POUNDER_CIVIL_WAR]: { // Standard civil war cannon
    name: '6 Pounder',
    [POWER_VS_FOOT]: 400,
    [POWER_VS_MOUNTED]: 400,
    volume: 1,
    multiplier: 40,
    weight: 10,
    range: 800,
    dropoff: 3,
    effectiveAtCloseRange: true,
  },
  [CANNON_12_POUNDER_CIVIL_WAR]: { // Standard civil war cannon
    name: '12 Pounder',
    [POWER_VS_FOOT]: 600,
    [POWER_VS_MOUNTED]: 600,
    volume: 1,
    multiplier: 60,
    weight: 15,
    range: 1000,
    dropoff: 3,
    effectiveAtCloseRange: true,
  },
  [CANNON_24_POUNDER_CIVIL_WAR]: { // Standard civil war cannon
    name: '24 Pounder',
    [POWER_VS_FOOT]: 800,
    [POWER_VS_MOUNTED]: 800,
    volume: 1,
    multiplier: 85,
    weight: 20,
    range: 1200,
    dropoff: 3,
  },
  [LEE_ENFIELD_303]: { // Standard ww1 rifle
    name: 'Lee Enfield 303',
    [POWER_VS_FOOT]: 200,
    [POWER_VS_MOUNTED]: 200,
    volume: 12,
    weight: 3,
    range: 900,
    dropoff: 3,
  }
};
