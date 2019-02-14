import { weightedRandom, SECONDS_IN_AN_HOUR } from './math-utils.js';
import {
  SLOPE_UP,
  SLOPE_DOWN,
  SLOPE_NONE,
  MAX_TERRAIN } from './terrain.js';
import {
  statModFor,
  MAX_EQUIPMENT_WEIGHT } from './game.js';
import {
  FOOT_TROOP,
  CAVALRY_TROOP,
  ARTILLERY_TROOP } from './units.js';

export const MORALE_SUCCESS = 'MORALE_SUCCESS';
export const MORALE_FAILURE = 'STATUS_FALL_BACK';

export default class Combatant {
    constructor({ unit,
                  encounter,
                  armyLeadership = 0,
                  terrainDefense = 0,
                  engagedStands = -1,
                  status = MORALE_SUCCESS,
                  slope = SLOPE_NONE }) {
    this.unit = unit;
    this.encounter = encounter;
    this.armyLeadership = armyLeadership;
    this.terrainDefense = terrainDefense;
    this.engagedStands = engagedStands <= -1 || engagedStands > unit.stands ? unit.stands : engagedStands;
    this.status = status;
    this.slope = slope;
    this.casualties = 0;
    this.energyLoss = 0;
    this.moraleLoss = 0;
    this.leadershipLoss = 0;
  }

  get terrainSpeedMod() {
    return ((MAX_TERRAIN - this.encounter.terrain) / MAX_TERRAIN);
  }

  get equipmentSpeedMod() {
    return (MAX_EQUIPMENT_WEIGHT - this.unit.carriedWeight) / MAX_EQUIPMENT_WEIGHT;
  }

  get speed() {
    return this.unit.baseSpeed * this.terrainSpeedMod * statModFor(this.energy) * this.equipmentSpeedMod;
  }

  get backwardsSpeed() {
    return this.unit.baseBackwardSpeed * this.terrainSpeedMod * statModFor(this.energy) * this.equipmentSpeedMod;
  }

  get strength() {
    return Math.max(this.unit.strength - this.strengthLoss, 0)
  }

  get energy() {
    return Math.max(this.unit.energy - this.energyLoss, 0)
  }

  get morale() {
    return Math.max(this.unit.morale - this.moraleLoss, 0)
  }

  get leadership() {
    return Math.max(this.unit.leadership - this.leadershipLoss, 0)
  }

  get volume() {
    return this.encounter.melee ? this.unit.meleeWeapon.power : this.unit.rangedWeapon.power;
  }

  get modifiedVolume() {
    return this.volume * this.volumeModifier;
  }

  get power() {
    return this.encounter.melee ? this.unit.meleeWeapon.power : this.unit.rangedWeapon.power;
  }

  get modifiedPower() {
    return this.power * this.powerModifier;
  }

  get skill() {
    return this.encounter.melee ? this.unit.meleeSkill : this.unit.rangedSkill;
  }

  get armor() {
    return this.unit.armor.defense;
  }

  get engagedMod() {
    return this.engagedStands / this.unit.stands;
  }

  get unitTypeTerrainMod() {
    return {
      [FOOT_TROOP]: 1,
      [CAVALRY_TROOP]: 0.5,
      [ARTILLERY_TROOP]: 0.25
    }[this.unit.unitType];
  }

  get terrainMod() {
    return this.encounter.terrain * statModFor(this.unit.openness) * this.unitTypeTerrainMod;
  }

  get volumeModifier() {
    return statModFor(this.energy) * this.engagedMod * this.terrainMod;
  }

  get slopeMod() {
    return {
      [SLOPE_UP]: 0.75,
      [SLOPE_DOWN]: 1.25,
      [SLOPE_NONE]: 1,
    }[this.slope];
  }

  get powerModifier() {
    return this.slopeMod;
  }

  get skillRoll() {
    return Math.random() * this.skill * statModFor(this.energy);
  }

  get powerRoll() {
    return Math.random() * this.modifiedPower;
  }

  get armorRoll() {
    return Math.random() * this.armor;
  }

  attacksForTime(duration) {
    return this.strength * this.modifiedVolume * (duration / SECONDS_IN_AN_HOUR);
  }

  // Warning: Performing multiple morale checks will do a new roll and might switch the status.
  // This should only be done when the game rules require it, not simply to "get the status" of the combatant.
  performMoraleCheck() {
    const roll = weightedRandom(3) * 100;
    const modifiedMorale = this.morale - roll;

    if (modifiedMorale > 0) {
      this.status = MORALE_SUCCESS;
    } else {
      this.status = MORALE_FAILURE;
    }
  }

  battleReport() {
    return `${this.casualtyMessage}`;
  }

  exactBattleReport() {
    return `${this.unit.name} -- ${this.status} -- Casualties: ${this.casualties} -- Energy Loss: ${this.energyLoss} -- Morale Loss: ${this.moraleLoss} -- Leadership Loss: ${this.leadershipLoss}`;
  }

  updates(delay) {
    return {
      id: this.unit.id,
      changes: this.changes(delay)
    };
  }

  changes(delay) {
    return [
      { prop: "strength",
        value: this.strength
      }, {
        prop: "energy",
        value: this.energy
      }, {
        prop: "morale",
        value: this.morale,
      }, {
        prop: "leadership",
        value: this.leadership
      }, {
        prop: 'nextAction',
        value: this.unit.nextAction + delay
      }
    ];
  }

  get casualtyMessage() {
    if (this.casualties > this.unit.strength) {
      return `${this.unit.name} was totally destroyed.`;
    } else if (this.casualties > this.unit.strength * 0.75) {
      return `${this.unit.name} sustained terrible casualties. Almost the whole unit was destroyed.`;
    } else if (this.casualties > this.unit.strength * 0.50) {
      return `${this.unit.name} sustained terrible casualties. Over half the unit is destroyed.`;
    } else if (this.casualties > this.unit.strength * 0.30) {
      return `${this.unit.name} sustained terrible casualties.`;
    } else if (this.casualties > this.unit.strength * 0.20) {
      return `${this.unit.name} sustained grave casualties.`;
    } else if (this.casualties > this.unit.strength * 0.15) {
      return `${this.unit.name} sustained massive casualties.`;
    } else if (this.casualties > this.unit.strength * 0.10) {
      return `${this.unit.name} sustained major casualties.`;
    } else if (this.casualties > this.unit.strength * 0.5) {
      return `${this.unit.name} sustained significant casualties.`;
    } else if (this.casualties > this.unit.strength * 0.03) {
      return `${this.unit.name} sustained noticable casualties.`;
    } else if (this.casualties > this.unit.strength * 0.01) {
      return `${this.unit.name} sustained minor casualties.`;
    } else {
      return `${this.unit.name} sustained almost no casualties.`;
    }
  }
}
