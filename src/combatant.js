import { randomBellMod, modVolume, weightedAverage, SECONDS_IN_AN_HOUR } from './math-utils.js';
import { SLOPE_NONE } from './terrain.js';
import { statModFor, MAX_STAT, SECONDS_PER_TURN, YARDS_PER_INCH, MAX_EQUIPMENT_WEIGHT } from './game.js';
import { FOOT_TROOP, MELEE_WEAPON, RANGED_WEAPON } from './units.js';
import { POWER_VS_FOOT, POWER_VS_MOUNTED } from './weapons.js';
import { MELEE, RANGED } from './game.js';
import ActingUnit from './acting-unit.js';

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
      return `${this.unit.name} was destroyed.`;
    } else if (this.unit.morale - this.moraleLoss <= 0) {
      return `${this.unit.name} fled the battlefield.`;
    } else {
      return `${this.casualtyMessage} ${this.leadershipMessage}`
    }
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

  get leadershipMessage() {
    if (this.leadershipLoss > this.unit.leadership) {
      return `${this.unit.name} lost all of their leaders during the fight. They have no one to command them.`;
    } else if (this.leadershipLoss > this.unit.leadership * 0.5) {
      return `${this.unit.name} lost their captain during the fight.`;
    } else if (this.leadershipLoss > this.unit.leadership * 0.25) {
      return `${this.unit.name} lost a lieutenant during the fight.`;
    } else if (this.leadershipLoss > 0) {
      return `${this.unit.name} lost some of their sergeant's during the fight.`;
    } else {
      return ``;
    }
  }
}
