import {
  weightedRandom,
  weightedRandomTowards,
  modVolume,
  SECONDS_IN_AN_HOUR } from './math-utils.js';
import {
  SLOPE_UP,
  SLOPE_DOWN,
  SLOPE_NONE,
  MAX_TERRAIN } from './terrain.js';
import {
  statModFor,
  MAX_EQUIPMENT_WEIGHT,
  SECONDS_PER_TURN,
  MAX_STAT} from './game.js';
import {
  FOOT_TROOP,
  CAVALRY_TROOP,
  ARTILLERY_TROOP,
  MELEE_WEAPON,
  RANGED_WEAPON } from './units.js';
import {
  POWER_VS_FOOT,
  POWER_VS_MOUNTED } from './weapons.js';

export const MORALE_SUCCESS = 'MORALE_SUCCESS';
export const MORALE_FAILURE = 'STATUS_FALL_BACK';

export default class Combatant {
    constructor({ unit,
                  encounter,
                  target,
                  armyLeadership = 0,
                  terrainDefense = 0,
                  engagedStands = -1,
                  status = MORALE_SUCCESS,
                  slope = SLOPE_NONE }) {
    this.unit = unit;
    this.encounter = encounter;
    this.target = target;
    this.armyLeadership = armyLeadership;
    this.terrainDefense = terrainDefense;
    this.engagedStands = engagedStands <= -1 || engagedStands > unit.stands ? unit.stands : engagedStands;
    this.status = status;
    this.slope = slope;
    this.casualties = 0;
    this.leaderSurviveRoll = Math.random();
  }

  get energyLoss() {
    return Math.floor(weightedRandomTowards(
      0,
      100,
      (this.encounter.melee ? 100 : 30) * (this.encounter.secondsSpentFighting / SECONDS_PER_TURN) * (this.unit.carriedWeight / MAX_EQUIPMENT_WEIGHT),
      5));
  }

  get hardinessMod() {
    return (MAX_STAT - this.unit.experience) / MAX_STAT;
  }

  get moraleLoss() {
    return Math.floor(weightedRandomTowards(
      0,
      100,
      100 * this.hardinessMod * (this.casualties / this.unit.strength),
      5));
  }

  get leadershipLoss() {
    // TODO Provide message to user
    return this.casualties / this.unit.strength > this.leaderSurviveRoll ? Math.min(30, this.unit.leadership) : 0;
  }

  get terrainSpeedMod() {
    return ((MAX_TERRAIN - this.encounter.terrain) / MAX_TERRAIN);
  }

  get equipmentMod() {
    return (MAX_EQUIPMENT_WEIGHT - this.unit.carriedWeight) / MAX_EQUIPMENT_WEIGHT;
  }

  get speed() {
    return this.unit.baseSpeed * this.terrainSpeedMod * statModFor(this.unit.energy) * this.equipmentMod;
  }

  get backwardsSpeed() {
    return this.unit.baseBackwardSpeed * this.terrainSpeedMod * statModFor(this.unit.energy) * this.equipmentMod;
  }

  get modifiedMeleeVolume() {
    return this.unit.meleeWeapon.volume;
  }

  get modifiedRangedVolume() {
    return modVolume(this.unit.rangedWeapon.volume, this.unit.rangedWeapon.range, this.encounter.yardsOfSeparation);
  }

  get volume() {
    return this.encounter.melee
      ? this.modifiedMeleeVolume
      : this.modifiedRangedVolume;
  }

  get modifiedVolume() {
    return this.volume * this.volumeModifier;
  }

  get volumeModifier() {
    return statModFor(this.unit.energy) * this.engagedMod * this.terrainMod;
  }

  get targetTroopType() {
    return this.target.unitType === FOOT_TROOP ? POWER_VS_FOOT : POWER_VS_MOUNTED;
  }

  get weaponTypeForEncounter() {
    return this.encounter.melee ? MELEE_WEAPON : RANGED_WEAPON;
  }

  get power() {
    return this.unit[this.weaponTypeForEncounter][this.targetTroopType];
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
    return ((MAX_TERRAIN - this.encounter.terrain) / MAX_TERRAIN) * statModFor(this.unit.openness) * this.unitTypeTerrainMod;
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
    return Math.random() * this.skill * statModFor(this.unit.energy);
  }

  get powerRoll() {
    return Math.random() * this.modifiedPower;
  }

  get armorRoll() {
    return Math.random() * this.armor;
  }

  attacksForTime(duration) {
    return this.unit.strength * this.modifiedVolume * (duration / SECONDS_IN_AN_HOUR);
  }

  // Warning: Performing multiple morale checks will do a new roll and might switch the status.
  // This should only be done when the game rules require it, not simply to "get the status" of the combatant.
  performMoraleCheck() {
    const roll = weightedRandom(3) * 100;
    const modifiedMorale = this.unit.morale - roll;

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
        value: this.unit.strength - this.casualties
      }, {
        prop: "energy",
        value: this.unit.energy - this.energyLoss
      }, {
        prop: "morale",
        value: this.unit.morale - this.moraleLoss
      }, {
        prop: "leadership",
        value: this.unit.leadership - this.leadershipLoss
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
    } else if (this.casualties > this.unit.strength * 0.02) {
      return `${this.unit.name} sustained minor casualties.`;
    } else if (this.casualties > 0) {
      return `${this.unit.name} sustained almost no casualties.`;
    } else {
      return `${this.unit.name} sustained no casualties.`;
    }
  }
}
