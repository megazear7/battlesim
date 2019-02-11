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
    powerVsFoot: 5,
    powerVsMounted: 5,
    volume: 1,
    weight: 0,
  },
  [SWORD]: {
    name: 'Sword',
    powerVsFoot: 30,
    powerVsMounted: 20,
    volume: 4,
    weight: 5,
  },
  [SPEAR]: {
    name: 'Spear',
    powerVsFoot: 30,
    powerVsMounted: 30,
    volume: 3,
    weight: 5,
  },
  [PIKE]: {
    name: 'Pike',
    powerVsFoot: 20,
    powerVsMounted: 40,
    volume: 2,
    weight: 7,
  },
  [LONGBOW]: {
    name: 'Longbow',
    powerVsFoot: 30,
    powerVsMounted: 30,
    volume: 1,
    weight: 3,
  },
  [BAYONETE]: {
    name: 'Bayonete',
    powerVsFoot: 15,
    powerVsMounted: 15,
    volume: 1,
    weight: 1,
  },
  [BROWN_BESS_SMOOTH_BORE]: { // Standard revolutionary war rifle
    name: 'Brown Bess Smooth Bore',
    powerVsFoot: 60,
    powerVsMounted: 60,
    volume: 3,
    weight: 3,
  },
  [CONFEDERATE_SMOOTH_BORE]: { // Standard union civil war rifle
    name: 'Smoothbore Musket',
    powerVsFoot: 60,
    powerVsMounted: 60,
    volume: 4,
    weight: 3,
  },
  [SPRINGFIELD_RIFLED_MUSKET]: { // Standard union civil war rifle
    name: 'Springfield Rifled Musket',
    powerVsFoot: 70,
    powerVsMounted: 70,
    volume: 4,
    weight: 3,
  },
  [CANNON_24_POUNDER_CIVIL_WAR]: { // Standard civil war cannon
    name: '24 Pounder',
    powerVsFoot: 500,
    powerVsMounted: 500,
    volume: 1,
    weight: 10,
  },
  [LEE_ENFIELD_303]: { // Standard ww1 rifle
    name: 'Lee Enfield 303',
    powerVsFoot: 75,
    powerVsMounted: 75,
    volume: 5,
    weight: 3,
  }
};
