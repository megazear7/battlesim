export const NO_WEAPON = 'NO_WEAPON';
export const SWORD = 'SWORD';
export const SPEAR = 'SPEAR';
export const PIKE = 'PIKE';
export const LONGBOW = 'LONGBOW';
export const BAYONETE = 'BAYONETE';
export const BROWN_BESS_SMOOTH_BORE = 'BROWN_BESS_SMOOTH_BORE';
export const CONFEDERATE_SMOOTH_BORE = 'CONFEDERATE_SMOOTH_BORE';
export const SPRINGFIELD_RIFLED_MUSKET = 'SPRINGFIELD_RIFLED_MUSKET';
export const CANNON_24_POUNDER_CIVIL_WAR = 'CANNON_24_POUNDER_CIVIL_WAR';
export const LEE_ENFIELD_303 = 'LEE_ENFIELD_303';

export const WEAPONS = {
  [NO_WEAPON]: {
    name: 'None',
    powerVsFoot: 10,
    powerVsMounted: 10,
    volume: 1,
    weight: 0,
    range: 0,
  },
  [SWORD]: {
    name: 'Sword',
    powerVsFoot: 50,
    powerVsMounted: 20,
    volume: 2,
    weight: 5,
    range: 0,
  },
  [SPEAR]: {
    name: 'Spear',
    powerVsFoot: 35,
    powerVsMounted: 35,
    volume: 2,
    weight: 5,
    range: 0,
  },
  [PIKE]: {
    name: 'Pike',
    powerVsFoot: 40,
    powerVsMounted: 65,
    volume: 2,
    weight: 7,
    range: 0,
  },
  [LONGBOW]: {
    name: 'Longbow',
    powerVsFoot: 50,
    powerVsMounted: 50,
    volume: 2,
    weight: 3,
    range: 0,
  },
  [BAYONETE]: {
    name: 'Bayonete',
    powerVsFoot: 20,
    powerVsMounted: 20,
    volume: 1,
    weight: 1,
    range: 0,
  },
  [BROWN_BESS_SMOOTH_BORE]: { // Standard revolutionary war rifle
    name: 'Brown Bess Smooth Bore',
    powerVsFoot: 120,
    powerVsMounted: 120,
    volume: 2,
    weight: 3,
    range: 500,
  },
  [CONFEDERATE_SMOOTH_BORE]: { // Standard union civil war rifle
    name: 'Smoothbore Musket',
    powerVsFoot: 160,
    powerVsMounted: 160,
    volume: 3,
    weight: 3,
    range: 800,
  },
  [SPRINGFIELD_RIFLED_MUSKET]: { // Standard union civil war rifle
    name: 'Springfield Rifled Musket',
    powerVsFoot: 180,
    powerVsMounted: 180,
    volume: 3,
    weight: 3,
    range: 1200,
  },
  [CANNON_24_POUNDER_CIVIL_WAR]: { // Standard civil war cannon
    name: '24 Pounder',
    powerVsFoot: 400,
    powerVsMounted: 400,
    volume: 20,
    weight: 10,
    range: 2200,
  },
  [LEE_ENFIELD_303]: { // Standard ww1 rifle
    name: 'Lee Enfield 303',
    powerVsFoot: 200,
    powerVsMounted: 200,
    volume: 6,
    weight: 3,
    range: 1800,
  }
};
