import { weightedRandomTowards, weightedAverage, randomBellMod, dropOff, dropOffWithBoost, roundToNearest, SECONDS_IN_AN_HOUR, SECONDS_IN_AN_MINUTE, randomMinutesBetween, SLOPE_UP, SLOPE_DOWN, SLOPE_NONE as SLOPE_NONE$1, MAX_TERRAIN, Terrain, statModFor, MAX_EQUIPMENT_WEIGHT, MORALE_SUCCESS, MORALE_FAILURE, FOOT_TROOP, CAVALRY_TROOP, ARTILLERY_TROOP, MELEE_WEAPON, RANGED_WEAPON, MAX_STAT, SECONDS_PER_TURN, YARDS_PER_INCH, POWER_VS_FOOT, POWER_VS_MOUNTED, MELEE, RANGED, STAT_PERCENTAGE, CASUALTY_MESSAGE_DESCRIPTIVE, DEADLYNESS, SECONDS_PER_ROUND, YARDS_TO_FIGHT, MINUTES_PER_TURN, REST, MOVE, CHARGE, FIRE, NO_ACTION, html, css, repeat, classMap, $battleViewWrapperDefault as BattleViewWrapper, store, takeAction, takeArmyAction, finishEvent, updateMessage, SharedStyles, ButtonSharedStyles, TERRAIN_TYPE_MOVEMENT, TERRAIN_TYPE_MELEE_COMBAT } from '../components/battle-sim.js';

class ActingUnit {
  constructor({
    unit,
    pace = 1,
    environment,
    armyLeadership = 0,
    slope = SLOPE_NONE$1,
    status = MORALE_SUCCESS
  }) {
    this.unit = unit;
    this.pace = pace;
    this.environment = environment;
    this.armyLeadership = armyLeadership;
    this.slope = slope;
    this.status = this.moraleRoll() > this.unit.morale ? MORALE_FAILURE : this.status = MORALE_SUCCESS;
  }

  yardsMovedPer(seconds) {
    return this.speed * seconds;
  }

  moraleRoll() {
    return weightedRandomTowards(0, 100, 1, 2);
  }

  get equipmentMod() {
    return (MAX_EQUIPMENT_WEIGHT - this.unit.carriedWeight) / MAX_EQUIPMENT_WEIGHT;
  }

  get speedMod() {
    return this.terrainMod * this.energySpeedMod * this.equipmentMod * this.pace * this.slopeMod;
  }

  get speed() {
    if (this.unit.canMounted) {
      if (this.unit.isMounted) {
        return this.unit.mountedSpeed.baseSpeed * this.speedMod;
      } else {
        return this.unit.unmountedSpeed.baseSpeed * this.speedMod;
      }
    } else {
      return this.unit.baseSpeed * this.speedMod;
    }
  }

  get backwardsSpeed() {
    return this.unit.baseBackwardSpeed * this.speedMod;
  }

  get armor() {
    return this.unit.armor.defense;
  }

  get unitTypeTerrainMod() {
    return {
      [FOOT_TROOP]: 1,
      [CAVALRY_TROOP]: 0.5,
      [ARTILLERY_TROOP]: 0.25
    }[this.unit.unitType];
  }

  get terrainPenalty() {
    return Math.max(Math.min(this.environment.movementTerrain.reduce((sum, terrain) => sum + terrain.movePenalty, 0), 100) - this.unit.openness * this.unitTypeTerrainMod, 0);
  }

  get terrainMod() {
    return (MAX_TERRAIN - this.terrainPenalty) / MAX_TERRAIN;
  }

  get energySpeedMod() {
    return weightedAverage(this.energyMod, 1);
  }

  get energyMod() {
    return this.unit.energy / 100;
  }

  get slopeMod() {
    return {
      [SLOPE_UP]: 0.75,
      [SLOPE_DOWN]: 1.1,
      [SLOPE_NONE$1]: 1
    }[this.slope];
  }

}

var actingUnit = {
  default: ActingUnit
};

class Combatant extends ActingUnit {
  constructor({
    unit,
    encounter,
    target,
    armyLeadership = 0,
    movementTerrain = [],
    protectingTerrain = [],
    areaTerrain = [],
    engagedStands = -1,
    slope = SLOPE_NONE$1
  }) {
    super({
      unit,
      environment: encounter,
      armyLeadership
    });
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
    this.moraleModRoll = weightedRandomTowards(0.5, 1.5, 1, 2);
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
    return weightedAverage({
      value: this.encounter.melee ? 0.2 : 0.1,
      weight: 2
    }, this.energyModRoll, this.unit.carriedWeight / MAX_EQUIPMENT_WEIGHT) * 50 * this.timeSpentFightingMod;
  }

  get moraleLoss() {
    return this.percentageLoss * this.moraleModRoll * this.hardinessMod;
  }

  get percentageLoss() {
    return this.casualties / this.unit.strength * 100;
  }

  get timeSpentFightingMod() {
    return this.encounter.secondsSpentFighting / SECONDS_PER_TURN;
  }

  get attacksRequireAmmunition() {
    return !this.encounter.melee;
  }

  get outOfAmmo() {
    return this.attacksRequireAmmunition && this.unit.ammunition - this.ammunitionUsed <= 0;
  }

  get fallingback() {
    return this.casualties > this.fallbackCasualtyCount;
  }

  get persueing() {
    return !this.fallingback && this.yardsPersued > 0;
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
    return 1 + (MAX_STAT - this.unit.experience) / MAX_STAT;
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
    return this.unit.rangedWeapon.effectiveAtCloseRange ? this.unit.rangedWeapon.volume * dropOffWithBoost(this.encounter.yardsOfSeparation / this.unit.rangedWeapon.range, this.unit.rangedWeapon.dropOff) : this.unit.rangedWeapon.volume * dropOff(this.encounter.yardsOfSeparation / this.unit.rangedWeapon.range, this.unit.rangedWeapon.dropOff);
  }

  get rangedMultiplier() {
    return this.unit.rangedWeapon.multiplier || 1;
  }

  get volume() {
    return this.encounter.melee ? this.meleeVolume * this.meleeMultiplier : this.rangedVolume * this.rangedMultiplier;
  }

  get modifiedVolume() {
    return this.volume * this.volumeModifier;
  }

  get volumeModifier() {
    return statModFor(this.unit.energy) * this.engagedMod * this.combatTerrainMod;
  }

  get terrainModSum() {
    return this.areaTerrain.reduce((mod, terrain) => mod + (this.encounter.melee ? terrain.melee.volumeMod : terrain.ranged.volumeMod), 0);
  }

  get combatTerrainMod() {
    return Math.max(Math.min(1 - (this.terrainModSum - this.unit.openness / 100), 1), 0);
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
    return this.unit.strength * this.modifiedVolume / SECONDS_IN_AN_HOUR;
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
    return [{
      prop: "strength",
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
    }];
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
                ${this.moraleMessage}${this.moraleMessage && !this.energyMessage ? '.' : ''}
                ${this.moraleMessage && this.energyMessage ? 'and' : ''}
                ${this.energyMessage}${this.energyMessage ? '.' : ''}
              ` : ''}
              ${this.ammoMessage}${this.ammoMessage ? '.' : ''}`;
    }
  }

  shootReport() {
    return `${this.energyMessage ? `${this.unit.name} lost ${this.energyMessage}.` : ''}
            ${this.ammoMessage}${this.ammoMessage ? '.' : ''}`;
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
    return this.unit.battle.casualtyReporting === CASUALTY_MESSAGE_DESCRIPTIVE ? this.casualtyDesc : `lost ${roundToNearest(this.casualties, this.unit.battle.casualtyReporting)} of their ${roundToNearest(this.unit.strength, this.unit.battle.strengthReporting)} men`;
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
    return this.unit.battle.statReporting === STAT_PERCENTAGE ? `${Math.ceil(this.moraleLoss)}% morale` : ``;
  }

  get energyMessage() {
    return this.unit.battle.statReporting === STAT_PERCENTAGE ? `${Math.ceil(this.energyLoss)}% energy` : ``;
  }

  get leadershipMessage() {
    return this.unit.battle.statReporting === STAT_PERCENTAGE && this.leadershipLoss > 0 ? `have suffered a ${this.leadershipLoss}% leadership penalty` : this.leadershipDescription;
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

var combatant = {
  default: Combatant
};

function combat(unit1, unit2, duration = SECONDS_PER_TURN) {
  let secondsOfCombat = 0;
  let secondsOfAction = 0;

  while (secondsOfAction < duration) {
    if (unit1.encounter.closeEnoughToFight) {
      if (unit1.fallingback || unit1.status === MORALE_FAILURE) {
        unit1.yardsFallenback += unit1.yardsMovedPer(SECONDS_PER_ROUND);

        if (!unit2.fallingback && unit2.encounter.melee) {
          unit2.yardsPersued += unit2.yardsMovedPer(SECONDS_PER_ROUND);
        }
      } else {
        makeAttacks(unit1, unit2, SECONDS_PER_ROUND);
      }

      if (unit2.fallingback || unit2.status === MORALE_FAILURE) {
        unit2.yardsFallenback += unit2.yardsMovedPer(SECONDS_PER_ROUND);

        if (!unit1.fallingback && unit1.encounter.melee) {
          unit1.yardsPersued += unit1.yardsMovedPer(SECONDS_PER_ROUND);
        }
      } else {
        makeAttacks(unit2, unit1, SECONDS_PER_ROUND);
      }

      secondsOfCombat += SECONDS_PER_ROUND;
    }

    secondsOfAction += SECONDS_PER_ROUND;
  }

  return secondsOfCombat;
}

function makeAttacks(attacker, defender, duration) {
  for (let i = 0; i < attacker.attacksForTime(duration); i++) {
    if (attacker.attacksRequireAmmunition) {
      attacker.ammunitionUsed += 1;
    }

    if (!attacker.outOfAmmo || !attacker.unit.battle.useAmmo) {
      let attackHits = true;

      if (attacker.skillRoll() * DEADLYNESS < defender.skillRoll()) {
        attackHits = false;
      }

      let powerRoll = attacker.powerRoll();

      if (powerRoll * DEADLYNESS < defender.armorRoll()) {
        attackHits = false;
      }

      defender.protectingTerrainModel.forEach(terrain => {
        if (powerRoll * DEADLYNESS < terrain.armorRoll()) {
          attackHits = false;
        }
      });

      if (attackHits) {
        defender.casualties += 1;
      }
    }
  }
}

var battleUtils = {
  combat: combat
};

class Encounter {
  constructor({
    attacker,
    attackerArmyLeadership = 0,
    attackerEngagedStands = -1,
    defender,
    defenderArmyLeadership = 0,
    defenderEngagedStands = -1,
    melee = true,
    separation = 0,
    slope = SLOPE_NONE$1,
    attackerChargeTerrain = [],
    defenderTerrain = [],
    meleeCombatTerrain = []
  }) {
    this.melee = melee;
    this.separation = separation;
    this.slope = slope;
    this.movementTerrain = attackerChargeTerrain;
    this.attacker = new Combatant({
      unit: attacker,
      encounter: this,
      target: defender,
      engagedStands: attackerEngagedStands,
      movementTerrain: attackerChargeTerrain,
      protectingTerrain: [],
      areaTerrain: this.melee ? meleeCombatTerrain : [],
      armyLeadership: attackerArmyLeadership,
      slope: this.attackerSlope
    });
    this.defender = new Combatant({
      unit: defender,
      encounter: this,
      target: attacker,
      engagedStands: defenderEngagedStands,
      movementTerrain: [],
      protectingTerrain: defenderTerrain,
      areaTerrain: this.melee ? meleeCombatTerrain : [],
      armyLeadership: defenderArmyLeadership,
      slope: this.defenderSlope
    });
  }

  inchesWord(number) {
    return number === 1 ? 'inch' : 'inches';
  }

  attackerEngages() {
    let secondsOfCombat = combat(this.attacker, this.defender, this.secondsSpentFighting);
    let actionMessage = ``;

    if (this.attacker.fallingback && this.attacker.inchesFallenback >= 1) {
      actionMessage += `${this.attacker.unit.name} fell back ${this.attacker.inchesFallenback} ${this.inchesWord(this.attacker.inchesFallenback)}. `;

      if (this.defender.persueing && this.defender.inchesPersued >= 2) {
        actionMessage += `${this.defender.unit.name} persued ${this.defender.inchesPersued} ${this.inchesWord(this.defender.inchesPersued)}. `;
      }
    }

    if (this.defender.fallingback && this.defender.inchesFallenback >= 1) {
      actionMessage += `${this.defender.unit.name} fell back ${this.defender.inchesFallenback} ${this.inchesWord(this.defender.inchesFallenback)}.`;

      if (this.attacker.persueing && this.attacker.inchesPersued >= 2) {
        actionMessage += `${this.attacker.unit.name} persued ${this.attacker.inchesPersued} ${this.inchesWord(this.attacker.inchesPersued)}.`;
      }
    }

    if (this.inchesDefenderFled > 1) {
      return `${actionMessage} ${this.defender.unit.name} fled ${this.inchesDefenderFled} ${this.inchesWord(this.inchesDefenderFled)} but was then caught by ${this.attacker.unit.name}. ${this.timeEngagedMessage(secondsOfCombat)}`;
    } else if (this.defenderFled) {
      return `${actionMessage} ${this.defender.unit.name} attempted to fall back but was quickly caught by ${this.attacker.unit.name}. ${this.timeEngagedMessage(secondsOfCombat)}`;
    } else {
      return `${actionMessage} ${this.timeEngagedMessage(secondsOfCombat)}`;
    }
  }

  get couldNotReachTargetMessage() {
    if (this.defenderFled) {
      return `${this.defender.unit.name} fled ${this.inchesDefenderFled} ${this.inchesWord(this.inchesDefenderFled)} and ${this.attacker.unit.name} could not reach it's target but may persue up to ${this.inchesOfSeparationAfter} ${this.inchesWord(this.inchesOfSeparationAfter)}.`;
    } else if (this.attacker.status === MORALE_FAILURE) {
      return `${this.attacker.unit.name} refused to make the attack.`;
    } else {
      return `${this.attacker.unit.name} could not reach ${this.defender.unit.name} but moved ${this.inchesAttackerTravelled} ${this.inchesWord(this.inchesAttackerTravelled)} towards it's target.`;
    }
  }

  get chargeMovementMessage() {
    return `${this.attacker.unit.name} may move his stands ${this.attackerMovementInches} ${this.inchesWord(this.attackerMovementInches)} in order to make it into combat. Then ${this.defender.unit.name} may follow this by moving his unengaged stands ${this.defenderMovementInches} ${this.inchesWord(this.defenderMovementInches)}.`;
  }

  get attackerMovementInches() {
    return Math.ceil((this.attacker.yardsMovedPer(this.graceWindow) + this.yardsAttackerTravelled) / YARDS_PER_INCH);
  }

  get defenderMovementInches() {
    return Math.ceil(this.defender.yardsMovedPer(this.graceWindow) / YARDS_PER_INCH);
  }

  get chargeMessage() {
    return this.attackerReachedDefender ? this.chargeMovementMessage : this.couldNotReachTargetMessage;
  }

  get graceWindow() {
    return this.secondsSpentFighting * 0.3;
  }

  fight() {
    const actionMessage = this.attackerReachedDefender ? this.attackerEngages() : ``;
    return {
      messages: [actionMessage, this.defender.battleReport(), this.melee ? this.attacker.battleReport() : this.attacker.shootReport()],
      updates: [this.defender.updates(0), this.attacker.updates(SECONDS_PER_TURN + randomMinutesBetween(5, 10))]
    };
  }

  timeEngagedMessage(seconds) {
    return `They were engaged for ${Math.ceil(seconds / SECONDS_IN_AN_MINUTE)} minutes.`;
  }

  get attackerSlope() {
    return this.slope;
  }

  get defenderSlope() {
    if (this.slope === SLOPE_UP) {
      return SLOPE_DOWN;
    } else if (this.slope === SLOPE_DOWN) {
      return SLOPE_UP;
    } else {
      return SLOPE_NONE$1;
    }
  }

  get closeEnoughToFight() {
    if (this.attacker.fallingback && this.defender.fallingback) {
      return false;
    } else if (this.attacker.fallingback) {
      return this.attacker.fallBackDistance - this.defender.persuitDistance > YARDS_TO_FIGHT;
    } else if (this.defender.fallingback) {
      return this.defender.fallBackDistance - this.attacker.persuitDistance > YARDS_TO_FIGHT;
    } else {
      return true;
    }
  }

  get yardsOfSeparation() {
    return this.separation * YARDS_PER_INCH;
  }

  get yardsOfSeparationAfter() {
    if (this.secondsToReachDefender > 0) {
      return 0;
    } else {
      return this.separation + this.defender.backwardsSpeed * this.secondsAvailableAfterOrder - this.attacker.speed * this.secondsAvailableAfterOrder;
    }
  }

  get inchesOfSeparationAfter() {
    return Math.ceil(this.yardsOfSeparationAfter / YARDS_PER_INCH);
  }

  get yardsDefenderFled() {
    if (this.defender.status === MORALE_FAILURE) {
      const timeAvailableToFlee = this.secondsAvailableAfterOrder - 0.5 * this.separation / this.attacker.speed;
      return timeAvailableToFlee * this.backwardsSpeed;
    } else {
      return 0;
    }
  }

  get inchesDefenderFled() {
    return Math.ceil(this.yardsDefenderFled / YARDS_PER_INCH);
  }

  get yardsAttackerTravelled() {
    if (this.melee) {
      return this.attacker.speed * this.secondsToReachDefenderOrMax;
    } else {
      return 0;
    }
  }

  get inchesAttackerTravelled() {
    return Math.floor(this.yardsAttackerTravelled / YARDS_PER_INCH);
  }

  get secondsAvailableAfterOrder() {
    return SECONDS_PER_TURN - this.attacker.unit.secondsToIssueOrder;
  }

  get secondsToReachDefender() {
    if (this.defender.status === MORALE_FAILURE) {
      return this.yardsOfSeparation / (this.attacker.speed - this.defender.backwardsSpeed);
    } else {
      return this.yardsOfSeparation / this.attacker.speed;
    }
  }

  get secondsToReachDefenderOrMax() {
    return Math.min(this.secondsToReachDefender, this.secondsAvailableAfterOrder);
  }

  get attackerReachedDefender() {
    return this.secondsSpentFighting > 0;
  }

  get defenderFled() {
    return this.yardsDefenderFled > 0;
  } // Warning: this could be negative in which case that means the defender outran the attacker.


  get secondsSpentFighting() {
    if (this.attacker.status === MORALE_SUCCESS) {
      if (this.melee) {
        return this.secondsAvailableAfterOrder - this.secondsToReachDefender;
      } else {
        return this.secondsAvailableAfterOrder;
      }
    } else {
      return 0;
    }
  }

  get minutesSpentFighting() {
    return Math.ceil(this.secondsSpentFighting / SECONDS_IN_AN_MINUTE);
  }

}

var encounter = {
  default: Encounter
};

class SoloUnit extends ActingUnit {
  constructor({
    unit,
    situation,
    armyLeadership = 0,
    status = MORALE_SUCCESS,
    resupply = false,
    mount = false,
    unmount = false,
    pace = 1,
    slope = SLOPE_NONE
  }) {
    super({
      unit,
      pace,
      environment: situation,
      armyLeadership
    });
    this.unit = unit;
    this.situation = situation;
    this.armyLeadership = armyLeadership;
    this.status = status;
    this.resupply = resupply;
    this.mount = mount;
    this.unmount = unmount;
    this.slope = slope;
    this.pace = pace;
    this.energyMoveModRoll = weightedRandomTowards(0, 1, 0.5, 3);
    this.energyRestModRoll = weightedRandomTowards(0, 1, 0.3, 3);
    this.moraleMoveModRoll = weightedRandomTowards(0, 1, 0.1, 3);
    this.moraleRestModRoll = weightedRandomTowards(0, 1, 0.1, 3);
  }

  get energyChange() {
    return Math.max(Math.min(MAX_STAT - this.unit.energy, this.maxEnergyChange), -this.unit.energy);
  }

  get moraleChange() {
    return Math.max(Math.min(MAX_STAT - this.unit.morale, this.maxMoraleChange), -this.unit.morale);
  }

  get pacePercentage() {
    return this.pace * 100;
  }

  get maxMoraleChange() {
    return this.situation.percentageOfATurnSpentResting * this.moraleRestModRoll + this.situation.percentageOfATurnSpentMoving * this.moraleMoveModRoll * Math.max(0.75 - this.pace, 0);
  }

  get maxEnergyChange() {
    return this.situation.percentageOfATurnSpentResting * this.energyRestModRoll + this.situation.percentageOfATurnSpentMoving * this.energyMoveModRoll * (0.75 - this.pace);
  }

  get ammunitionSupplied() {
    return this.resupply ? this.unit.maxAmmo : 0;
  }

  get updates() {
    return {
      id: this.unit.id,
      changes: this.changes
    };
  }

  get changes() {
    let changes = [{
      prop: "energy",
      value: this.unit.energy + this.energyChange
    }, {
      prop: "morale",
      value: this.unit.morale + this.moraleChange
    }, {
      prop: "ammunition",
      value: this.unit.ammunition + this.ammunitionSupplied
    }, {
      prop: 'nextAction',
      value: this.unit.nextAction + this.situation.totalSecondsSpent
    }];

    if (this.mount) {
      changes.push({
        prop: "isCurrentlyMounted",
        value: true
      });
    } else if (this.unmount) {
      changes.push({
        prop: "isCurrentlyMounted",
        value: false
      });
    }

    return changes;
  }

  get desc() {
    return ` ${this.unit.name}
             ${this.situation.yardsTravelled > 0 ? this.moveDesc : ''}
             ${this.situation.yardsTravelled > 0 && (this.moraleChange > 0 || this.energyChange > 0) ? 'and' : ''}
             ${this.moraleChange > 0 ? this.moraleRecoveredMessage : ''}
             ${(this.situation.yardsTravelled > 0 || this.moraleChange > 0) && this.energyChange > 0 ? 'and' : ''}
             ${this.energyChange > 0 ? this.energyRecoveredMessage : ''}
             ${this.timeDesc}.`;
  }

  get timeDesc() {
    return `in ${Math.ceil(this.situation.totalSecondsSpent / SECONDS_IN_AN_MINUTE)} minutes`;
  }

  get moveDesc() {
    if (this.situation.distance === -1) {
      return `moves ${Math.floor(this.situation.yardsTravelled / YARDS_PER_INCH)} inches`;
    } else if (this.situation.yardsTravelled < this.situation.distanceInYards) {
      return `could only move ${Math.floor(this.situation.yardsTravelled / YARDS_PER_INCH)} inches`;
    } else {
      return `moves the full ${Math.floor(this.situation.yardsTravelled / YARDS_PER_INCH)} inches`;
    }
  }

  get energyRecoveredMessage() {
    return this.unit.battle.statReporting === STAT_PERCENTAGE ? `recovered ${Math.floor(this.energyChange)}% of their energy` : this.energyRecoveredDesc;
  }

  get energyRecoveredDesc() {
    if (this.energyChange > 80) {
      return `recovered all of there energy`;
    } else if (this.energyChange > 60) {
      return `recovered most of their strength`;
    } else if (this.energyChange > 40) {
      return `made a great recovery`;
    } else if (this.energyChange > 20) {
      return `recovered a lot of their strength`;
    } else if (this.energyChange > 15) {
      return `recovered much of their strength`;
    } else if (this.energyChange > 9) {
      return `recovered some of their strength`;
    } else if (this.energyChange > 6) {
      return `recovered a bit of their strength`;
    } else if (this.energyChange > 3) {
      return `recovered a little bit of their strength`;
    } else {
      return `recovered almost no strength`;
    }
  }

  get moraleRecoveredMessage() {
    return this.unit.battle.statReporting === STAT_PERCENTAGE ? `recovered ${Math.floor(this.moraleChange)}% of their morale` : this.moraleRecoveredDesc;
  }

  get moraleRecoveredDesc() {
    if (this.moraleChange > 20) {
      return `have been greatly encouraged`;
    } else if (this.moraleChange > 10) {
      return `have been encouraged`;
    } else {
      return `seem to be more willing to fight than before`;
    }
  }

}

var soloUnit = {
  default: SoloUnit
};

class Situation {
  constructor({
    unit,
    armyLeadership = 0,
    movementTerrain = [],
    resupply = false,
    mount = false,
    unmount = false,
    pace = 1,
    slope = SLOPE_NONE$1
  }) {
    this.movementTerrain = movementTerrain;
    this.slope = slope;
    this.soloUnit = new SoloUnit({
      unit: unit,
      situation: this,
      resupply,
      mount,
      unmount,
      pace,
      slope: this.slope
    });
  }

  rest(minutesSpent = MINUTES_PER_TURN) {
    this.distance = 0;
    this.minutesSpent = minutesSpent;
    return this.actionResult;
  }

  move(distance) {
    this.distance = distance;
    this.minutesSpent = 0;
    return this.actionResult;
  }

  get actionResult() {
    return {
      messages: [this.soloUnit.desc],
      updates: [this.soloUnit.updates]
    };
  }

  get secondsSpentResting() {
    return Math.max(Math.min(this.minutesSpent * SECONDS_IN_AN_MINUTE, SECONDS_PER_TURN) - this.soloUnit.unit.secondsToIssueOrder, 0);
  }

  get secondsSpentMoving() {
    if (this.distance < 0) {
      // This implys that the users wants to move as far as possible.
      return this.secondsAvailableToMove;
    } else if (this.soloUnit.speed > 0) {
      return Math.min(this.distanceInYards / this.soloUnit.speed, this.secondsAvailableToMove);
    } else {
      return 0;
    }
  }

  get maxYardsTravelled() {
    return this.secondsAvailableToMove * this.soloUnit.speed;
  }

  get secondsAvailableToMove() {
    return SECONDS_PER_TURN - this.soloUnit.unit.secondsToIssueOrder;
  }

  get yardsTravelled() {
    if (this.distance === -1) {
      return this.maxYardsTravelled;
    } else {
      return Math.min(this.distanceInYards, this.maxYardsTravelled);
    }
  }

  get distanceInYards() {
    return this.distance * YARDS_PER_INCH;
  }

  get totalSecondsSpent() {
    return this.secondsSpentResting + this.secondsSpentMoving + this.soloUnit.unit.secondsToIssueOrder;
  }

  get percentageOfATurnSpent() {
    return this.totalSecondsSpent / SECONDS_PER_TURN * 100;
  }

  get percentageOfATurnSpentMoving() {
    return this.secondsSpentMoving / SECONDS_PER_TURN * 100;
  }

  get percentageOfATurnSpentResting() {
    return this.secondsSpentResting / SECONDS_PER_TURN * 100;
  }

  get minutesSpentResting() {
    return this.secondsSpentResting / SECONDS_IN_AN_MINUTE;
  }

}

var situation = {
  default: Situation
};

class FightView extends BattleViewWrapper {
  static get properties() {
    return {
      _targetUnit: {
        type: Object
      },
      _actionMessages: {
        type: Array
      },
      _showSeparation: {
        type: Boolean
      },
      _showTarget: {
        type: Boolean
      },
      _showChargeMessage: {
        type: Boolean
      },
      _showDoCombat: {
        type: Boolean
      },
      _showTakeAction: {
        type: Boolean
      },
      _showActionResult: {
        type: Boolean
      },
      _actionsDisabled: {
        type: Boolean
      },
      _hasSelection: {
        type: Boolean
      }
    };
  }

  static get styles() {
    return [SharedStyles, ButtonSharedStyles, css`
        .unit-actions button {
          margin-bottom: 0;
        }
        [has-selection] button {
          opacity: 0.6;
        }
        [has-selection] button.selected {
          opacity: 1;
        }
      `];
  }

  battleViewRender() {
    return html`
      ${this._activeBattle.unitIsActing ? html`
        <section>
          <h2>${this._activeBattle.activeUnit.name}</h2>
          <div class="muted centered">Army: ${this._activeBattle.activeArmyModel.name}</div>
          <div class="muted centered">${this._activeBattle.currentTimeMessage}</div>
          <p>${this._activeBattle.activeUnit.detailedStatus}</p>
          <hr>
          <p>${this._activeBattle.activeUnit.desc}</p>
        </section>
        <section>
          ${this._activeBattle.playingArmyIsActive ? html`
          <button-tray ?has-selection="${this._hasSelection}" class="unit-actions">
            <button @click="${this._rest}" id="rest" ?disabled="${this._actionsDisabled}" class="${classMap({
      selected: this._selectedAction === REST
    })}">Rest</button>
            <button @click="${this._move}" id="move" ?disabled="${this._actionsDisabled}" class="${classMap({
      selected: this._selectedAction === MOVE
    })}">Move</button>
            <button @click="${this._charge}" id="charge" ?disabled="${this._actionsDisabled}" class="${classMap({
      selected: this._selectedAction === CHARGE
    })}">Charge</button>
            <button @click="${this._fire}" id="fire" ?disabled="${this._actionsDisabled}" class="${classMap({
      selected: this._selectedAction === FIRE
    })}">Fire</button>
          </button-tray>
          ` : html`
            <p>This unit does not belong to the army that you are playing.</p>
          `}
        </section>
        <section>
          <div>
            ${this._activeBattle.messages ? html`
              ${repeat(this._activeBattle.messages, message => html`
                <p>${message}</p>
              `)}
            ` : ''}
            ${this._activeBattle.playingArmyIsActive ? html`
              <div class="row">
                <input id="separation" class="${classMap({
      hidden: !this._showSeparation
    })}" type="number" placeholder="Distance"></input>
                <select id="target" class="${classMap({
      hidden: !this._showTarget
    })}" @change="${this._updateTarget}">
                  <option value="">Select Target</option>
                  ${repeat(this._activeBattle.activeUnit.targets, target => html`
                    <option value="${target.id}">${target.unit.name}</option>
                  `)}
                </select>
              </div>
              <button-tray class="${classMap({
      hidden: !this._showDoCombat
    })}">
                <button @click="${this._doCombat}">Do Combat</button>
              </button-tray>
              <button-tray class="${classMap({
      hidden: !this._showTakeAction
    })}">
                <button @click="${this._takeAction}">Take Action</button>
              </button-tray>
              <battle-sim-alert warning>You must provide a value for each field listed above the button</battle-sim-alert>
              <environment-options .targetUnit="${this._targetUnit}" .battle="${this._activeBattle}" action="${this._selectedAction}"></environment-options>
              <div class="${classMap({
      hidden: !this._showActionResult
    })}">
                <button-tray>
                  <button @click="${this._progressToNextAction}">Next Action</button>
                </button-tray>
              </div>
            ` : ''}
          </div>
        </section>
      ` : this._activeBattle.armyIsActing ? html`
          <section>
            <army-action .battle="${this._activeBattle}" @done="${this._takeArmyAction}"></army-action>
          </section>
        ` : html`
          <section>
            <battle-event .battle="${this._activeBattle}" @done="${this._finishEvent}"></battle-event>
          </section>
        `}
    `;
  }

  constructor() {
    super();
    this._actionUpdates = [];
  }

  _doCombat() {
    if (this._validSituation) {
      this._hideInputs();

      const encounter = this._createEncounter();

      store.dispatch(updateMessage([encounter.chargeMessage]));
      this._options.showEngagedAttackers = encounter.attackerReachedDefender;
      this._options.showEngagedDefenders = encounter.attackerReachedDefender;
      this._actionsDisabled = true;
      this._showTakeAction = true;
      this._showChargeMessage = true;
    } else {
      this.shadowRoot.querySelector('battle-sim-alert').alert();
    }
  }

  _takeAction() {
    if (this._validSituation) {
      let actionResult;
      let skipResults;

      if (this._selectedAction === REST || this._selectedAction === MOVE) {
        const situation = this._createSituation();

        actionResult = this._selectedAction === REST ? situation.rest(this._options.restTime) : situation.move(this._options.distance);
        skipResults = false;
      } else {
        let encounter = this._createEncounter();

        actionResult = encounter.fight();
        skipResults = this._selectedAction === CHARGE && !encounter.attackerReachedDefender;
      }

      store.dispatch(updateMessage(actionResult.messages));
      this._actionMessages = actionResult.messages;
      this._actionUpdates = actionResult.updates;
      this._savedEnvironment = this._environment;

      this._hideInputs();

      this._resetInputs();

      this._selectedAction = NO_ACTION;
      this._actionsDisabled = true;
      this._showTakeAction = false;

      if (skipResults) {
        this._progressToNextAction();
      } else {
        this._showActionResult = true;
      }
    } else {
      this.shadowRoot.querySelector('battle-sim-alert').alert();
    }
  }

  _progressToNextAction() {
    store.dispatch(takeAction(this._actionUpdates, this._actionMessages, this._savedEnvironment));

    this._resetAction();
  }

  _takeArmyAction() {
    store.dispatch(takeArmyAction());

    this._resetAction();
  }

  _finishEvent() {
    store.dispatch(finishEvent());

    this._resetAction();
  }

  _resetAction() {
    this._hasSelection = false;
    this._actionUpdates = [];
    this._showActionResult = false;
    this._actionsDisabled = false;
    window.scroll(0, 0);
  }

  _rest(e) {
    this._hideInputs();

    this._hasSelection = true;
    this._selectedAction = REST;
    this._showTakeAction = true;
    this._options.showRestTime = true;
    this._options.showResupply = true;
    this._options.showMount = this._activeBattle.activeUnit.isMounted && this._activeBattle.activeUnit.canUnmount;
  }

  _move(e) {
    this._hideInputs();

    this._hasSelection = true;
    this._selectedAction = MOVE;
    this._showTakeAction = true;
    this._options.showDistance = true;
    this._options.showHill = true;
    this._options.showPace = true;
    this._options.showLeader = true;
    this._options.showTerrain = true;
  }

  _charge(e) {
    this._hideInputs();

    this._hasSelection = true;
    this._selectedAction = CHARGE;
    this._showSeparation = true;
    this._showTarget = true;
    this._showDoCombat = true;
    this._options.showHill = true;
    this._options.showLeader = true;
    this._options.showTerrain = true;
  }

  _fire(e) {
    this._hideInputs();

    this._hasSelection = true;
    this._selectedAction = FIRE;
    this._showSeparation = true;
    this._showTarget = true;
    this._showTakeAction = true;
    this._options.showEngagedAttackers = true;
    this._options.showEngagedDefenders = true;
    this._options.showHill = true;
    this._options.showLeader = true;
    this._options.showTerrain = true;
  }

  _createEncounter() {
    return new Encounter({
      attacker: this._activeBattle.activeUnit,
      attackerArmyLeadership: this._options._activeArmyLeadership,
      attackerEngagedStands: this._options.engagedAttackers,
      defender: this._activeBattle.unitModels[this.target],
      defenderArmyLeadership: this._options._defenderArmyLeadership,
      defenderEngagedStands: this._options.engagedDefenders,
      melee: this._selectedAction === CHARGE,
      separation: this.separation,
      attackerChargeTerrain: this._options._selectedTerrain(TERRAIN_TYPE_MOVEMENT),
      defenderTerrain: this._options._defenderTerrain,
      meleeCombatTerrain: this._options._selectedTerrain(TERRAIN_TYPE_MELEE_COMBAT),
      slope: this._options.slope
    });
  }

  _createSituation() {
    return new Situation({
      unit: this._activeBattle.activeUnit,
      armyLeadership: this._options._activeArmyLeadership,
      movementTerrain: this._options._selectedTerrain(TERRAIN_TYPE_MOVEMENT),
      resupply: this._options.resupply,
      mount: this._options.mount,
      unmount: this._options.unmount,
      pace: this._options.pace,
      slope: this._options.slope
    });
  }

  _hideInputs() {
    this._showSeparation = false;
    this._showTarget = false;
    this._showChargeMessage = false;
    this._showDoCombat = false;
    this._showTakeAction = false;

    this._options.hide();
  }

  _resetInputs() {
    this.get('separation').value = '';
    this.get('target').value = '';

    this._options.reset();

    [...this.shadowRoot.querySelectorAll('battle-sim-option')].forEach(option => option.selected = false);
  }

  _updateTarget() {
    if (this.target !== undefined && !isNaN(this.target)) {
      this._targetUnit = this._activeBattle.unitModels[this.target];
    } else {
      this._targetUnit = null;
    }
  }

  get separation() {
    if (this.get('separation')) {
      return parseInt(this.get('separation').value);
    } else {
      return null;
    }
  }

  get target() {
    if (this.get('target')) {
      return parseInt(this.get('target').value);
    } else {
      return null;
    }
  }

  get _validSituation() {
    if (this._selectedAction === REST) {
      return true;
    } else if (this._selectedAction === MOVE) {
      return true;
    } else if (this._selectedAction === CHARGE) {
      return !isNaN(this.target);
    } else if (this._selectedAction === FIRE) {
      return !isNaN(this.target);
    } else {
      return false;
    }
  }

  get _environment() {
    return {
      resupply: this._options.resupply,
      mount: this._options.mount,
      unmount: this._options.unmount,
      defenderArmyLeadership: this._options._defenderArmyLeadership,
      activeArmyLeadership: this._options._activeArmyLeadership,
      pace: this._options.pace,
      slope: this._options.slope,
      engagedDefenders: this._options.engagedDefenders,
      engagedAttackers: this._options.engagedAttackers,
      separation: this.separation,
      restTime: this._options._restTime,
      distance: this._options.distance,
      selectedAction: this._selectedAction,
      target: this.target,
      defenderTerrain: this._options._defenderTerrain,
      attackerChargeTerrain: this._options._selectedTerrain(TERRAIN_TYPE_MOVEMENT),
      meleeCombatTerrain: this._options._selectedTerrain(TERRAIN_TYPE_MELEE_COMBAT)
    };
  }

  get _options() {
    return this.shadowRoot.querySelector('environment-options');
  }

  get(id) {
    return this.shadowRoot.getElementById(id);
  }

}

window.customElements.define('fight-view', FightView);
export { actingUnit as $actingUnit, combatant as $combatant, encounter as $encounter, situation as $situation, soloUnit as $soloUnit, battleUtils as $battleUtils, ActingUnit as $actingUnitDefault, Combatant as $combatantDefault, Encounter as $encounterDefault, Situation as $situationDefault, SoloUnit as $soloUnitDefault, combat };