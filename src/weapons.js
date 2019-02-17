export const NO_WEAPON = 'NO_WEAPON';
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
export const POWER_VS_FOOT = 'powerVsFoot';
export const POWER_VS_MOUNTED = 'powerVsMounted';

export const WEAPONS = {
  [NO_WEAPON]: {
    name: 'None',
    [POWER_VS_FOOT]: 10,
    [POWER_VS_MOUNTED]: 10,
    volume: 1,
    weight: 0,
    range: 0,
  },
  [SWORD]: {
    name: 'Sword',
    [POWER_VS_FOOT]: 50,
    [POWER_VS_MOUNTED]: 20,
    volume: 2,
    weight: 5,
    range: 0,
  },
  [SPEAR]: {
    name: 'Spear',
    [POWER_VS_FOOT]: 35,
    [POWER_VS_MOUNTED]: 35,
    volume: 2,
    weight: 5,
    range: 0,
  },
  [PIKE]: {
    name: 'Pike',
    [POWER_VS_FOOT]: 40,
    [POWER_VS_MOUNTED]: 65,
    volume: 2,
    weight: 7,
    range: 0,
  },
  [LONGBOW]: {
    name: 'Longbow',
    [POWER_VS_FOOT]: 50,
    [POWER_VS_MOUNTED]: 50,
    volume: 2,
    weight: 3,
    range: 400,
  },
  [BAYONETE]: {
    name: 'Bayonete',
    [POWER_VS_FOOT]: 20,
    [POWER_VS_MOUNTED]: 20,
    volume: 10,
    weight: 1,
    range: 0,
  },
  [BROWN_BESS_SMOOTH_BORE]: { // Standard revolutionary war rifle
    name: 'Brown Bess Smooth Bore',
    [POWER_VS_FOOT]: 120,
    [POWER_VS_MOUNTED]: 120,
    volume: 5,
    weight: 3,
    range: 500,
  },
  [CONFEDERATE_SMOOTH_BORE]: { // Standard union civil war rifle
    name: 'Smoothbore Musket',
    [POWER_VS_FOOT]: 160,
    [POWER_VS_MOUNTED]: 160,
    volume: 6,
    weight: 3,
    range: 1000,
  },
  [SPRINGFIELD_RIFLED_MUSKET]: { // Standard union civil war rifle
    name: 'Springfield Rifled Musket',
    [POWER_VS_FOOT]: 180,
    [POWER_VS_MOUNTED]: 180,
    volume: 7,
    weight: 3,
    range: 1200,
  },
  [CANNON_6_POUNDER_CIVIL_WAR]: { // Standard civil war cannon
    name: '6 Pounder',
    [POWER_VS_FOOT]: 400,
    [POWER_VS_MOUNTED]: 400,
    volume: 40,
    weight: 10,
    range: 1600,
  },
  [CANNON_12_POUNDER_CIVIL_WAR]: { // Standard civil war cannon
    name: '12 Pounder',
    [POWER_VS_FOOT]: 600,
    [POWER_VS_MOUNTED]: 600,
    volume: 60,
    weight: 15,
    range: 2000,
  },
  [CANNON_24_POUNDER_CIVIL_WAR]: { // Standard civil war cannon
    name: '24 Pounder',
    [POWER_VS_FOOT]: 800,
    [POWER_VS_MOUNTED]: 800,
    volume: 85,
    weight: 20,
    range: 2400,
  },
  [LEE_ENFIELD_303]: { // Standard ww1 rifle
    name: 'Lee Enfield 303',
    [POWER_VS_FOOT]: 200,
    [POWER_VS_MOUNTED]: 200,
    volume: 12,
    weight: 3,
    range: 1800,
  }
};
