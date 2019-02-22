import {
  POWER_VS_FOOT,
  POWER_VS_MOUNTED,
  NO_WEAPON,
} from '../../game.js';

export const BLADE = 'BLADE';
export const SPEAR = 'SPEAR';
export const PIKE = 'PIKE';
export const BOW = 'LONGBOW';
export const LONGBOW = 'LONGBOW';

export const WEAPONS = {
  [NO_WEAPON]: {
    name: 'None',
    [POWER_VS_FOOT]: 10,
    [POWER_VS_MOUNTED]: 10,
    volume: 1,
    weight: 0,
    range: 0,
    dropoff: 2,
  },
  [BLADE]: {
    name: 'Sword',
    [POWER_VS_FOOT]: 50,
    [POWER_VS_MOUNTED]: 20,
    volume: 2,
    weight: 5,
    range: 0,
    dropoff: 2,
  },
  [SPEAR]: {
    name: 'Spear',
    [POWER_VS_FOOT]: 35,
    [POWER_VS_MOUNTED]: 35,
    volume: 2,
    weight: 5,
    range: 0,
    dropoff: 2,
  },
  [PIKE]: {
    name: 'Pike',
    [POWER_VS_FOOT]: 40,
    [POWER_VS_MOUNTED]: 65,
    volume: 2,
    weight: 7,
    range: 0,
    dropoff: 2,
  },
  [BOW]: {
    name: 'Bow',
    [POWER_VS_FOOT]: 40,
    [POWER_VS_MOUNTED]: 40,
    volume: 2.5,
    weight: 3,
    range: 160,
    dropoff: 5,
  },
  [LONGBOW]: {
    name: 'Longbow',
    [POWER_VS_FOOT]: 50,
    [POWER_VS_MOUNTED]: 50,
    volume: 2,
    weight: 3,
    range: 200,
    dropoff: 10,
  },
};
