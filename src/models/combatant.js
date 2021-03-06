import { randomBellMod, dropOff, weightedRandomTowards, dropOffWithBoost, weightedAverage, roundToNearest, SECONDS_IN_AN_HOUR } from '../utils/math-utils.js';
import { SLOPE_NONE, Terrain } from './terrain.js';
import ActingUnit from './acting-unit.js';
import {
  FOOT_TROOP,
  MELEE_WEAPON,
  RANGED_WEAPON,
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
  STRENGTH_MESSAGE_DESCRIPTIVE,
  DEFENDER_POSITION_NORMAL
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
                  position = DEFENDER_POSITION_NORMAL,
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
    this.position = position;
    this.slope = slope;
    this.casualties = 0;
    this.ammunitionUsed = 0;
    this.yardsFallenback = 0;
    this.yardsPersued = 0;
    this.leaderSurviveRoll = Math.random();
    this.energyModRoll = randomBellMod();
    this.moraleModRoll = weightedRandomTowards(0.5, 1.5, 1, 1);
  }

  skillRoll() {
    return Math.random() * this.skill * statModFor(this.unit.energy) * this.positionMod;
  }

  armorRoll() {
    return Math.random() * this.armor * this.positionMod;
  }

  powerRoll() {
    return Math.random() * this.modifiedPower * this.positionMod;
  }

  get energyLoss() {
    return weightedAverage(
      {
        value: this.encounter.melee ? 0.2 : 0.1,
        weight: 2
      },
      this.energyModRoll,
      this.unit.carriedWeight / MAX_EQUIPMENT_WEIGHT
    ) * 50 * this.timeSpentFightingMod;
  }

  get moraleLoss() {
    return this.percentageLoss * this.moraleModRoll * this.hardinessMod * (this.encounter.melee ? 3 : 2);
  }

  get percentageLoss() {
    return (this.casualties / this.unit.strength) * 100
  }

  get timeSpentFightingMod() {
    return this.encounter.secondsSpentFighting / SECONDS_PER_TURN;
  }

  get positionMod() {
    return {
      DEFENDER_POSITION_NORMAL: 1,
      DEFENDER_POSITION_FLANKED: this.unit.battle.flankedMod || 0.8,
      DEFENDER_POSITION_REAR: this.unit.battle.rearMod || 0.6
    }[this.position] || 1;
  }

  get attacksRequireAmmunition() {
    return ! this.encounter.melee;
  }

  get outOfAmmo() {
    return this.attacksRequireAmmunition && this.unit.ammunition - this.ammunitionUsed <= 0;
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

  get protectingTerrainModel() {
    return this.protectingTerrain.map(terrain => new Terrain(terrain, this.encounterType));
  }

  get leadershipLoss() {
    return this.casualties / this.unit.strength > this.leaderSurviveRoll ? Math.min(30, this.unit.leadership) : 0;
  }

  get hardinessMod() {
    return 0.3 + (1.4 * ((MAX_STAT - this.unit.experience) / MAX_STAT));
  }

  get inchesPersued() {
    return Math.ceil(this.yardsPersued / YARDS_PER_INCH);
  }

  get inchesFallenback() {
    return Math.ceil(this.yardsFallenback / YARDS_PER_INCH);
  }

  get meleeVolume() {
    return this.unit.meleeWeapon.volume;
  }

  get meleeMultiplier() {
    return this.unit.meleeWeapon.multiplier || 1;
  }

  get rangedVolume() {
    return this.unit.rangedWeapon.effectiveAtCloseRange
      ? this.unit.rangedWeapon.volume * dropOffWithBoost(this.encounter.yardsOfSeparation / this.unit.rangedWeapon.range, this.unit.rangedWeapon.dropOff)
      : this.unit.rangedWeapon.volume * dropOff(this.encounter.yardsOfSeparation / this.unit.rangedWeapon.range, this.unit.rangedWeapon.dropOff);
  }

  get rangedMultiplier() {
    return this.unit.rangedWeapon.multiplier || 1;
  }

  get volume() {
    return this.encounter.melee
      ? this.meleeVolume * this.meleeMultiplier
      : this.rangedVolume * this.rangedMultiplier;
  }

  get modifiedVolume() {
    return this.volume * this.volumeModifier;
  }

  get volumeModifier() {
    return statModFor(this.unit.energy) * this.engagedMod * this.combatTerrainMod;
  }

  get terrainModSum() {
    return this.areaTerrain.reduce((mod, terrain) => mod + (this.encounter.melee ? terrain.melee.volumeMod : terrain.ranged.volumeMod), 0)
  }

  get combatTerrainMod() {
    return Math.max(Math.min(1 - (this.terrainModSum - (this.unit.openness / 100)), 1), 0);
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
    return this.unit.strength * this.modifiedVolume * (duration / SECONDS_IN_AN_HOUR);
  }

  get lowOnAmmo() {
    return this.unit.ammunition - this.ammunitionUsed < this.unit.strength * this.volume * 2;
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
        prop: "ammunition",
        value: this.unit.ammunition - this.ammunitionUsed
      }, {
        prop: 'nextAction',
        value: this.unit.nextAction + delay
      }
    ];
  }

  battleReport() {
    if (this.unit.strength - this.casualties <= 0) {
      return `${this.unit.name} ${this.casualtyMessage}.`;
    } else if (this.unit.morale - this.moraleLoss <= 0) {
      return `${this.unit.name} fled the battlefield.`;
    } else {
      return `${this.casualtyMessage || this.leadershipMessage ? `
                ${this.unit.name}
                ${this.casualtyMessage}${this.leadershipMessage ? ' and' : '.'}
                ${this.leadershipMessage}${this.leadershipMessage ? '.' : ''}
              ` : ''}
              ${this.moraleMessage || this.energyMessage ? `
                ${this.moraleMessage || this.energyMessage ? `They lost` : ''}
                ${this.moraleMessage}${this.moraleMessage && ! this.energyMessage ? '.' : ''}
                ${this.moraleMessage && this.energyMessage ? 'and' : ''}
                ${this.energyMessage}${this.energyMessage ? '.' : ''}
              ` : ''}
              ${this.ammoMessage}${this.ammoMessage ? '.' : ''}`
    }
  }

  shootReport() {
    return `${this.energyMessage ? `${this.unit.name} lost ${this.energyMessage}.` : ''}
            ${this.ammoMessage}${this.ammoMessage ? '.' : ''}`
  }

  get ammoMessage() {
    if (this.unit.battle.useAmmo && this.attacksRequireAmmunition) {
      if (this.outOfAmmo) {
        return `They are out of ammunition`;
      } else if (this.lowOnAmmo) {
        return `They are low on ammunition`;
      } else {
        return '';
      }
    } else {
      return '';
    }
  }

  get casualtyMessage() {
    return this.unit.battle.casualtyReporting === CASUALTY_MESSAGE_DESCRIPTIVE
      ? this.casualtyDesc
      : `lost ${roundToNearest(this.casualties, this.unit.battle.casualtyReporting)} of their ${roundToNearest(this.unit.strength, this.unit.battle.strengthReporting)} men`;
  }

  get casualtyDesc() {
    if (this.casualties > this.unit.strength) {
      return `lost the entire unit`;
    } else if (this.casualties > this.unit.strength * 0.75) {
      return `lost almost the entire unit`;
    } else if (this.casualties > this.unit.strength * 0.50) {
      return `lost over half the unit`;
    } else if (this.casualties > this.unit.strength * 0.30) {
      return `sustained grave casualties`;
    } else if (this.casualties > this.unit.strength * 0.20) {
      return `sustained terrible casualties`;
    } else if (this.casualties > this.unit.strength * 0.15) {
      return `sustained massive casualties`;
    } else if (this.casualties > this.unit.strength * 0.10) {
      return `sustained major casualties`;
    } else if (this.casualties > this.unit.strength * 0.5) {
      return `sustained significant casualties`;
    } else if (this.casualties > this.unit.strength * 0.03) {
      return `sustained noticable casualties`;
    } else if (this.casualties > this.unit.strength * 0.02) {
      return `sustained minor casualties`;
    } else if (this.casualties > 0) {
      return `sustained almost no casualties`;
    } else {
      return `sustained no casualties`;
    }
  }

  get moraleMessage() {
    return this.unit.battle.statReporting === STAT_PERCENTAGE
      ? `${Math.ceil(this.moraleLoss)}% morale`
      : ``;
  }

  get energyMessage() {
    return this.unit.battle.statReporting === STAT_PERCENTAGE
      ? `${Math.ceil(this.energyLoss)}% energy`
      : ``;
  }

  get leadershipMessage() {
    return this.unit.battle.statReporting === STAT_PERCENTAGE && this.leadershipLoss > 0
      ? `have suffered a ${this.leadershipLoss}% leadership penalty`
      : this.leadershipDescription;
  }

  get leadershipDescription() {
    // TODO leader titles should come from the battle / army.
    if (this.leadershipLoss > this.unit.leadership) {
      return `lost a captain`;
    } else if (this.leadershipLoss > this.unit.leadership * 0.5) {
      return `lost a second lieutenant`;
    } else if (this.leadershipLoss > this.unit.leadership * 0.25) {
      return `lost a first lieutenant`;
    } else if (this.leadershipLoss > 0) {
      return `lost a sergeant`;
    } else {
      return ``;
    }
  }
}
