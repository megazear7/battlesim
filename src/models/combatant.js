import { randomBellMod, dropOff, dropOffWithBoost, weightedAverage, roundToNearest, SECONDS_IN_AN_HOUR } from '../math-utils.js';
import { SLOPE_NONE } from '../terrain.js';
import { FOOT_TROOP, MELEE_WEAPON, RANGED_WEAPON } from '../units.js';
import ActingUnit from './acting-unit.js';
import {
  statModFor,
  MAX_STAT,
  SECONDS_PER_TURN,
  YARDS_PER_INCH,
  MAX_EQUIPMENT_WEIGHT,
  POWER_VS_FOOT,
  POWER_VS_MOUNTED,
  MELEE,
  RANGED,
  STAT_PERCENTAGE,
  STAT_DESCRIPTION,
  CASUALTY_MESSAGE_DESCRIPTIVE,
  STRENGTH_MESSAGE_DESCRIPTIVE
} from '../game.js';

/** @class Situation
 *  This represents a unit in combat with another unit. */
export default class Combatant extends ActingUnit {
    constructor({ unit,
                  encounter,
                  target,
                  armyLeadership = 0,
                  movementTerrain = [],
                  protectingTerrain =  [],
                  areaTerrain = [],
                  engagedStands = -1,
                  slope = SLOPE_NONE }) {
    super({ unit, environment: encounter, armyLeadership });
    this.unit = unit;
    this.encounter = encounter;
    this.target = target;
    this.armyLeadership = armyLeadership;
    this.movementTerrain = movementTerrain;
    this.protectingTerrain = protectingTerrain;
    this.areaTerrain = areaTerrain;
    this.engagedStands = engagedStands <= -1 || engagedStands > unit.stands ? unit.stands : engagedStands;
    this.slope = slope;
    this.casualties = 0;
    this.ammunitionUsed = 0;
    this.yardsFallenback = 0;
    this.yardsPersued = 0;
    this.leaderSurviveRoll = Math.random();
    this.energyModRoll = randomBellMod();
    this.moraleModRoll = randomBellMod();
  }

  skillRoll() {
    return Math.random() * this.skill * statModFor(this.unit.energy);
  }

  armorRoll() {
    return Math.random() * this.armor;
  }

  powerRoll() {
    return Math.random() * this.modifiedPower;
  }

  get energyLoss() {
    return weightedAverage(
      {
        value: this.encounter.melee ? 0.2 : 0.1,
        weight: 2
      },
      this.encounter.secondsSpentFighting / SECONDS_PER_TURN,
      this.energyModRoll,
      this.unit.carriedWeight / MAX_EQUIPMENT_WEIGHT
    ) * 50;
  }

  get moraleLoss() {
    return weightedAverage(
      this.moraleModRoll,
      this.hardinessMod,
      this.casualties / this.unit.strength,
      this.unit.strength / this.unit.fullStrength
    ) * 50;
  }

  get attacksRequireAmmunition() {
    return ! this.encounter.melee;
  }

  get fallingback() {
    return this.casualties > this.fallbackCasualtyCount;
  }

  get persueing() {
    return ! this.fallingback && this.yardsPersued > 0;
  }

  get fallbackCasualtyCount() {
    return this.unit.strength * (this.unit.fallback / 100);
  }

  get leadershipLoss() {
    return this.casualties / this.unit.strength > this.leaderSurviveRoll ? Math.min(30, this.unit.leadership) : 0;
  }

  get hardinessMod() {
    return (MAX_STAT - this.unit.experience) / MAX_STAT;
  }

  get inchesPersued() {
    return Math.ceil(this.yardsPersued / YARDS_PER_INCH);
  }

  get inchesFallenback() {
    return Math.ceil(this.yardsFallenback / YARDS_PER_INCH);
  }

  get modifiedMeleeVolume() {
    return this.unit.meleeWeapon.volume;
  }

  get modifiedRangedVolume() {
    if (this.unit.rangedWeapon.effectiveAtCloseRange) {
      return this.unit.rangedWeapon.volume * dropOffWithBoost(this.encounter.yardsOfSeparation / this.unit.rangedWeapon.range, this.unit.rangedWeapon.dropOff);
    } else {
      return this.unit.rangedWeapon.volume * dropOff(this.encounter.yardsOfSeparation / this.unit.rangedWeapon.range, this.unit.rangedWeapon.dropOff);
    }
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

  get terrainMod() {
    return 1 - Math.min(this.areaTerrain.reduce((sum, next) => sum + next[this.encounterType].volumeMod, 0), 1);
  }

  get targetTroopType() {
    return this.target.unitType === FOOT_TROOP ? POWER_VS_FOOT : POWER_VS_MOUNTED;
  }

  get encounterType() {
    return this.encounter.melee ? MELEE : RANGED;
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

  get engagedMod() {
    return Math.min(this.engagedStands, this.unit.stands) / this.unit.stands;
  }

  get powerModifier() {
    return this.slopeMod;
  }

  get secondsPerAttack() {
    return (this.unit.strength * this.modifiedVolume) / SECONDS_IN_AN_HOUR;
  }

  attacksForTime(duration) {
    return this.unit.strength *
           this.engagedMod *
           this.modifiedVolume *
           (duration / SECONDS_IN_AN_HOUR);
  }

  battleReport() {
    if (this.unit.strength - this.casualties <= 0) {
      return `They were destroyed. ${this.moraleMessage} ${this.energyMessage}`;
    } else if (this.unit.morale - this.moraleLoss <= 0) {
      return `They fled the battlefield. ${this.moraleMessage} ${this.energyMessage}`;
    } else {
      return `${this.casualtyMessage} ${this.leadershipMessage} ${this.moraleMessage} ${this.energyMessage}`
    }
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
    return this.unit.battle.casualtyReporting === CASUALTY_MESSAGE_DESCRIPTIVE
      ? this.casualtyDesc
      : `${this.unit.name} lost ${roundToNearest(this.casualties, this.unit.battle.casualtyReporting)} of their ${roundToNearest(this.unit.strength, this.unit.battle.strengthReporting)} men during the fight.`;
  }

  get casualtyDesc() {
    if (this.casualties > this.unit.strength) {
      return `${this.unit.name} lost all of their men.`;
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

  get moraleMessage() {
    return this.unit.battle.statReporting === STAT_PERCENTAGE
      ? `They lost ${Math.ceil(this.moraleLoss)}% morale`
      : ``;
  }

  get energyMessage() {
    return this.unit.battle.statReporting === STAT_PERCENTAGE
      ? ` and ${Math.ceil(this.energyLoss)}% energy.`
      : ``;
  }

  get leadershipMessage() {
    return this.unit.battle.statReporting === STAT_PERCENTAGE && this.leadershipLoss > 0
      ? `They lost a leader during the fight and have suffered a ${this.leadershipLoss}% leadership penalty.`
      : this.leadershipDescription;
  }

  get leadershipDescription() {
    if (this.leadershipLoss > this.unit.leadership) {
      return `They lost all of their leaders during the fight. They have no one to command them.`;
    } else if (this.leadershipLoss > this.unit.leadership * 0.5) {
      return `They lost their captain during the fight.`;
    } else if (this.leadershipLoss > this.unit.leadership * 0.25) {
      return `They lost a lieutenant during the fight.`;
    } else if (this.leadershipLoss > 0) {
      return `They lost some of their sergeant's during the fight.`;
    } else {
      return ``;
    }
  }
}