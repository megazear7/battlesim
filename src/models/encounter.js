import WEAPONS from '../game/weapons.js';
import ARMOR from '../game/armor.js';
import { combat } from '../utils/battle-utils.js';
import { randomMinutesBetween, SECONDS_IN_AN_MINUTE } from '../utils/math-utils.js';
import { FOOT_TROOP, CAVALRY_TROOP, ARTILLERY_TROOP, FALLBACK_AMPLIFIER, DEFENDER_POSITION_NORMAL } from '../game.js';
import { SLOPE_UP, SLOPE_DOWN, SLOPE_NONE } from './terrain.js';
import { SECONDS_PER_TURN, YARDS_PER_INCH, YARDS_TO_FIGHT, MORALE_SUCCESS, MORALE_FAILURE } from '../game.js';
import Combatant from './combatant.js';

/** @class Situation
 *  This represents the encounter of two units on the battle field. */
export default class Encounter {
  constructor({ attacker,
                attackerArmyLeadership = 0,
                attackerEngagedStands = -1,
                defender,
                defenderArmyLeadership = 0,
                defenderEngagedStands = -1,
                defenderPosition = DEFENDER_POSITION_NORMAL,
                melee = true,
                separation = 0,
                slope = SLOPE_NONE,
                attackerChargeTerrain = [],
                defenderTerrain = [],
                meleeCombatTerrain = [] }) {
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
      slope: this.attackerSlope });

    this.defender = new Combatant({
      unit: defender,
      encounter: this,
      target: attacker,
      engagedStands: defenderEngagedStands,
      position: defenderPosition,
      movementTerrain: [],
      protectingTerrain: defenderTerrain,
      areaTerrain: this.melee ? meleeCombatTerrain : [],
      armyLeadership: defenderArmyLeadership,
      slope: this.defenderSlope });
  }

  inchesWord(number) {
    return number === 1 ? 'inch' : 'inches';
  }

  attackerEngages() {
    let secondsOfCombat = combat(this.attacker, this.defender, this.secondsSpentFighting);
    let actionMessage = ``;

    let effectiveAttackerFallBack = this.attacker.inchesFallenback * FALLBACK_AMPLIFIER;
    if (this.attacker.fallingback && effectiveAttackerFallBack >= 1) {
      actionMessage += `${this.attacker.unit.name} fell back ${effectiveAttackerFallBack} ${this.inchesWord(effectiveAttackerFallBack)}. `;

      let effectivePersuit = this.defender.inchesPersued > effectiveAttackerFallBack ? effectiveAttackerFallBack : this.defender.inchesPersued;

      if (this.defender.persueing && effectivePersuit >= 1) {
        actionMessage += `${this.defender.unit.name} persued ${effectivePersuit} ${this.inchesWord(effectivePersuit)}. `;
      }
    }

    let effectiveDefenderFallBack = this.defender.inchesFallenback * FALLBACK_AMPLIFIER;
    if (this.defender.fallingback && effectiveDefenderFallBack >= 1) {
      actionMessage += `${this.defender.unit.name} fell back ${effectiveDefenderFallBack} ${this.inchesWord(effectiveDefenderFallBack)}. `;

      let effectivePersuit = this.attacker.inchesPersued > effectiveDefenderFallBack ? effectiveDefenderFallBack : this.attacker.inchesPersued;

      if (this.attacker.persueing && effectivePersuit >= 1) {
        actionMessage += `${this.attacker.unit.name} persued ${effectivePersuit} ${this.inchesWord(effectivePersuit)}. `;
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
      messages: [
        actionMessage,
        this.defender.battleReport(),
        this.melee ? this.attacker.battleReport() : this.attacker.shootReport(),
      ],
      updates: [
        this.defender.updates(0),
        this.attacker.updates(SECONDS_PER_TURN + randomMinutesBetween(5, 10))
      ]
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
      return SLOPE_NONE;
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
      return (this.separation + this.defender.backwardsSpeed * this.secondsAvailableAfterOrder) - this.attacker.speed * this.secondsAvailableAfterOrder;
    }
  }

  get inchesOfSeparationAfter() {
    return Math.ceil(this.yardsOfSeparationAfter / YARDS_PER_INCH);
  }

  get yardsDefenderFled() {
    if (this.defender.status === MORALE_FAILURE) {
      const timeAvailableToFlee = this.secondsAvailableAfterOrder - ((0.5 * this.separation) / this.attacker.speed);
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
  }

  // Warning: this could be negative in which case that means the defender outran the attacker.
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
