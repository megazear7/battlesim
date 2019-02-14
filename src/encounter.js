import Combatant from './combatant.js';
import { WEAPONS } from './weapons.js';
import { ARMOR } from './armor.js';
import { store } from './store.js';
import { attack } from './battle-utils.js';
import { randomMinutesBetween, SECONDS_IN_AN_MINUTE } from './math-utils.js';
import { FOOT_TROOP, CAVALRY_TROOP, ARTILLERY_TROOP } from './units.js';
import { SLOPE_UP, SLOPE_DOWN, SLOPE_NONE } from './terrain.js';
import { MORALE_SUCCESS, MORALE_FAILURE } from './acting-unit.js'
import { SECONDS_PER_TURN, YARDS_PER_INCH } from './game.js';

/** @class Situation
 *  This represents the encounter of two units on the battle field. */
export default class Encounter {
  constructor({ attacker,
                attackerTerrainDefense = 0,
                attackerArmyLeadership = 0,
                attackerEngagedStands = -1,
                defender,
                defenderTerrainDefense = 0,
                defenderArmyLeadership = 0,
                defenderEngagedStands = -1,
                melee = true,
                separation = 0,
                terrain = 0,
                slope = SLOPE_NONE }) {
    this.melee = melee;
    this.separation = separation;
    this.terrain = terrain;
    this.slope = slope;

    this.attacker = new Combatant({
      unit: attacker,
      encounter: this,
      target: defender,
      attackerTerrainDefense,
      attackerArmyLeadership,
      attackerEngagedStands,
      slope: this.attackerSlope });

    this.defender = new Combatant({
      unit: defender,
      encounter: this,
      target: attacker,
      defenderTerrainDefense,
      defenderArmyLeadership,
      defenderEngagedStands,
      slope: this.defenderSlope });
  }

  attackerAttacks() {
    if (this.attacker.status === MORALE_SUCCESS) {
      this.defender.casualties = attack({
        attacker: this.attacker,
        defender: this.defender,
        duration: this.secondsSpentFighting });
      return ``;
    } else {
      return `${this.attacker.name} refused to attack.`;
    }
  }

  defenderAttacks() {
    if (this.attacker.status === MORALE_SUCCESS) {
      this.attacker.casualties = attack({
        attacker: this.defender,
        defender: this.attacker,
        duration: this.secondsSpentFighting });
      return ``;
    } else {
      return `${this.defender.name} refused to stand and defend.`;
    }
  }

  attackerEngages() {
    const attackerMessage = this.attackerAttacks();
    const defenderMessage = this.defenderAttacks();

    if (this.inchesDefenderFled > 1) {
      return `${attackerMessage} ${this.defender.unit.name} fell back ${this.inchesDefenderFled} inches but was then caught by ${this.attacker.unit.name}. ${this.timeEngagedMessage}`;
    } else if (this.defenderFled) {
      return `${this.defender.unit.name} attempted to fall back but was quickly caught by ${this.attacker.unit.name}. ${this.timeEngagedMessage}`;
    } else {
      return `${this.defender.unit.name} held it's ground against ${this.attacker.unit.name}. ${this.timeEngagedMessage}`;
    }
  }

  defenderRunsAway() {
    if (this.defenderFled) {
      return `${this.defender.unit.name} fell back ${this.inchesDefenderFled} inches and ${this.attacker.unit.name} could not reach it's target but is now ${this.inchesOfSeparationAfter} inches behind.`;
    } else {
      return `${this.attacker.unit.name} could not reach ${this.defender.unit.name} but made it a distance of ${this.inchesAttackerTravelled} inches towards it's target.`;
    }
  }

  fight() {
    this.attacker.performMoraleCheck();
    this.defender.performMoraleCheck();

    const actionMessage = this.attackerReachedDefender ? this.attackerEngages() : this.defenderRunsAway();
    const fullMessage = `${actionMessage} ${this.defender.battleReport()} ${this.attacker.battleReport()}`;

    return {
      messages: [
        //`Attacker casualties: ${this.attacker.casualties}. Attacker energy loss: ${this.attacker.energyLoss}. Attacker morale loss: ${this.attacker.moraleLoss}. Attacker leadership loss: ${this.attacker.leadershipLoss}. Defender casualties: ${this.defender.casualties}. Defender energy loss: ${this.defender.energyLoss}. Defender morale loss: ${this.defender.moraleLoss}. Defender leadership loss: ${this.defender.leadershipLoss}.`,
        fullMessage,
      ],
      updates: [
        this.defender.updates(SECONDS_PER_TURN),
        this.attacker.updates(SECONDS_PER_TURN + randomMinutesBetween(5, 10))
      ]
    };
  }

  get timeEngagedMessage() {
    return `They were engaged for ${this.minutesSpentFighting} minutes.`;
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
    if (this.melee) {
      return this.secondsAvailableAfterOrder - this.secondsToReachDefender;
    } else {
      return this.secondsAvailableAfterOrder;
    }
  }

  get minutesSpentFighting() {
    return Math.ceil(this.secondsSpentFighting / SECONDS_IN_AN_MINUTE);
  }
}
