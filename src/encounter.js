import { store } from './store.js';
import { WEAPONS } from './weapons.js';
import { ARMOR } from './armor.js';
import { randomMinutesBetween, SECONDS_IN_AN_MINUTE } from './math-utils.js';
import { attack } from './battle-utils.js';
import {
  FOOT_TROOP,
  CAVALRY_TROOP,
  ARTILLERY_TROOP } from './units.js';
import {
  SLOPE_UP,
  SLOPE_DOWN,
  SLOPE_NONE } from './terrain.js';
import {
  MORALE_SUCCESS,
  MORALE_FAILURE } from './combatant.js'
import {
  SECONDS_PER_TURN,
  YARDS_PER_INCH } from './game.js';

export default class Encounter {
  constructor({ attacker,
                defender,
                melee = true,
                separation = 0,
                terrain = 0,
                slope = SLOPE_NONE }) {
    this.attacker = attacker;
    this.defender = defender;
    this.melee = melee;
    this.separation = separation;
    this.terrain = terrain;
    this.slope = slope;
  }

  meleeFight() {
    // TODO update attacker and defender.
  }

  rangedFight() {
    // TODO update attacker and defender.
  }

  fight() {
    this.attacker.performMoraleCheck();
    this.defender.performMoraleCheck();

    let actionMessage;
    if (this.attackerReachedDefender) {
      this.melee ? this.meleeFight() : this.rangedFight();
      if (this.inchesDefenderFled > 1) {
        actionMessage = `${this.defender.unit.name} fell back ${this.inchesDefenderFled} inches but was then caught by ${this.attacker.unit.name}.`;
      } else if (this.defenderFled) {
        actionMessage = `${this.defender.unit.name} attempted to fall back but was quickly caught by ${this.attacker.unit.name}.`;
      } else {
        actionMessage = `${this.defender.unit.name} held it's ground against ${this.attacker.unit.name}.`;
      }
    } else {
      if (this.defenderFled) {
        actionMessage = `${this.defender.unit.name} fell back ${this.inchesDefenderFled} inches and ${this.attacker.unit.name} could not reach it's target but is now ${this.inchesOfSeparationAfter} inches behind.`;
      } else {
        actionMessage = `${this.attacker.unit.name} could not reach ${this.defender.unit.name} but made it a distance of ${this.inchesAttackerTravelled} inches towards it's target.`;
      }
    }

    let allDetails = `${this.minutesSpentFighting} minutes spent fighting. ${this.defender.unit.name} fled ${this.yardsDefenderFled} yards. ${this.defender.unit.name} charged ${this.yardsAttackerTravelled} yards.`;

    return {
      messages: [
        allDetails,
        actionMessage,
        this.defender.battleReport(),
        //this.defender.exactBattleReport(),
        this.attacker.battleReport(),
        //this.attacker.exactBattleReport(),
      ],
      updates: [
        this.defender.updates(this.defender.unit.nextAction + SECONDS_PER_TURN),
        this.attacker.updates(this.defender.unit.nextAction + SECONDS_PER_TURN + randomMinutesBetween(5, 10))
      ]
    };
  }

  get yardsOfSeparation() {
    return this.separation * YARDS_PER_INCH;
  }

  get yardsOfSeparationAfter() {
    if (this.secondsToReachDefender > 0) {
      return 0;
    } else {
      return (this.separation + this.defender.unit.backwardsSpeed(this.terrain) * this.secondsAvailableAfterOrder) - this.attacker.unit.speed(this.terrain) * this.secondsAvailableAfterOrder;
    }
  }

  get inchesOfSeparationAfter() {
    return Math.ceil(this.yardsOfSeparationAfter / YARDS_PER_INCH);
  }

  get yardsDefenderFled() {
    if (this.defender.status === MORALE_FAILURE) {
      const timeAvailableToFlee = this.secondsAvailableAfterOrder - ((0.5 * this.separation) / this.attacker.unit.speed(this.terrain));
      return timeAvailableToFlee * this.unit.backwardsSpeed(this.terrain);
    } else {
      return 0;
    }
  }

  get inchesDefenderFled() {
    return Math.ceil(this.yardsDefenderFled / YARDS_PER_INCH);
  }

  get yardsAttackerTravelled() {
    if (this.melee) {
      return this.attacker.unit.speed(this.terrain) * this.secondsToReachDefenderOrMax;
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
      return this.yardsOfSeparation / (this.attacker.unit.speed(this.terrain) - this.defender.unit.backwardsSpeed(this.terrain));
    } else {
      return this.yardsOfSeparation / this.attacker.unit.speed(this.terrain);
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
