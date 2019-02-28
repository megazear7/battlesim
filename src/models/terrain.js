import { MELEE } from '../game.js';

export const SLOPE_UP = "SLOPE_UP";
export const SLOPE_DOWN = "SLOPE_DOWN";
export const SLOPE_NONE = "SLOPE_NONE";
export const MAX_TERRAIN = 100;

export class Terrain {
  constructor(config, combatType) {
    this.config = config;
    this.combatType = combatType;
  }

  armorRoll() {
    return Math.random() * (this.combatType === MELEE ? this.config.melee.armor : this.config.ranged.armor);
  }
}
