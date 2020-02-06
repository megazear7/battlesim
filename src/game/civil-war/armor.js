import { NO_ARMOR } from '../../game.js';

export const MOUNTED_ARMOR_BONUS = 'MOUNTED_ARMOR_BONUS';

export const ARMOR = {
  [NO_ARMOR]: {
    defense: 0,
    weight: 0,
  },
  [MOUNTED_ARMOR_BONUS]: {
    defense: 6,
    weight: 0,
  }
};
