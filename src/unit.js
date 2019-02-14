import { store } from './store.js';
import { WEAPONS } from './weapons.js';
import { ARMOR } from './armor.js';
import { weightedRandom, numberWithCommas, nearest100, SECONDS_IN_AN_HOUR } from './math-utils.js';
import { attack } from './battle-utils.js';
import { statModFor } from './game.js';
import {
  FOOT_TROOP,
  CAVALRY_TROOP,
  ARTILLERY_TROOP } from './units.js';
import { upperCaseFirst } from './string-utils.js';

export default class Unit {
  constructor({
                army = 0,
                name,
                unitType = FOOT_TROOP,
                openness = 20,
                stands = 8,
                strength,
                morale = 90,
                energy = 100,
                nextAction = 0,
                armor,
                meleeWeapon,
                rangedWeapon,
                meleeSkill = 50,
                rangedSkill = 50,
                experience = 50,
                leadership = 50,
                troopType = 0,
                fullStrength,
                baseSpeed = 1,
                baseBackwardSpeed = 0.5,
                maneuverTime = 100,
              }, id) {
    this.armyIndex = army;
    this.id = id;
    this.name = name;
    this.unitType = unitType;
    this.openness = openness;
    this.stands = stands;
    this.strength = strength || fullStrength;
    this.morale = morale;
    this.energy = energy;
    this.meleeSkill = meleeSkill;
    this.rangedSkill = rangedSkill;
    this.nextAction = nextAction;
    this.armor = ARMOR[armor];
    this.meleeWeapon = WEAPONS[meleeWeapon];
    this.rangedWeapon = WEAPONS[rangedWeapon];
    this.experience = experience;
    this.leadership = leadership;
    this.troopType = troopType;
    this.fullStrength = fullStrength;
    this.baseSpeed = baseSpeed; // Given in yards per second. TODO set this in the unit configs and remove the movementTime
    this.baseBackwardSpeed = baseBackwardSpeed; // Given in yards per second. TODO set this in the unit configs and remove the movementTime
    this.maneuverTime = maneuverTime;
  }

  move(distanceInYards, terrain, manuevering = false) {
    // TODO reimplement this in similiar fashion to how we did the more complex attack
    const maxYardsTravelled = (secondsAvailableToMove / secondsToMove100Yards(terrain)) * 100;
    const yardsTravelled = Math.min(distanceInYards === 0 ? Number.MAX_SAFE_INTEGER : distanceInYards, maxYardsTravelled);
    const secondsSpentMoving = (yardsTravelled / 100) * secondsToMove100Yards(terrain);
    const energyCost = (secondsSpentMoving / SECONDS_IN_AN_HOUR) * terrainModifier;
    const totalSecondsSpent = secondsSpentMoving + this.secondsToIssueOrder;

    console.debug('secondsAvailableToMove', secondsAvailableToMove, '\nterrainModifier', terrainModifier, '\nsecondsToMove100Yards', secondsToMove100Yards, '\nmaxYardsTravelled', maxYardsTravelled, '\nyardsTravelled', yardsTravelled, '\nsecondsSpentMoving', secondsSpentMoving, '\nenergyCost', energyCost, '\ntotalSecondsSpent', totalSecondsSpent);

    return {
      messages: [
        this.moveDesc(distanceInYards, yardsTravelled),
        this.battlefieldMoveDesc(yardsTravelled, totalSecondsSpent),
        this.energyDesc(energyCost),
      ],
      updates: [
        {
          id: this.id,
          changes: [
            {
              prop: "energy",
              value: this.energy - energyCost,
            },
            {
              prop: 'nextAction',
              value: this.nextAction + totalSecondsSpent,
            },
          ],
        }
      ]
    };
  }

  secondsToMove100Yards(terrain) {
    // TODO this needs moved after we refactor the move action
    const secondsAvailableToMove = SECONDS_IN_AN_HOUR - this.secondsToIssueOrder;
    const terrainModifier = 2 + ((terrain / 100) * 5) + Math.random();
    return this.movementTime * terrainModifier;
  }

  battlefieldMoveDesc(yardsTravelled, secondsSpent) {
    // TODO this needs moved after we refactor the move action
    return `${this.name} travelled ${numberWithCommas(nearest100(yardsTravelled))} yards in ${Math.floor(secondsSpent / 60)} minutes.`;
  }

  moveDesc(expectedDistance, actualDistance) {
    if (expectedDistance === 0) {
      return `You move ${Math.floor(actualDistance / 100)} inches.`;
    } else if (actualDistance < expectedDistance) {
      return `You could only move ${Math.floor(actualDistance / 100)} inches.`;
    } else {
      return `You move the full ${Math.floor(actualDistance / 100)} inches.`;
    }
  }

  get secondsToIssueOrder() {
    return (this.leadership * 3) + (this.experience * 2);
  }

  get carriedWeight() {
    return this.meleeWeapon.weight + this.rangedWeapon.weight + this.armor.weight;
  }

  get targets() {
    let state = store.getState()
    let activeBattle = state.battle.battles[state.battle.activeBattle];
    return activeBattle.units
        .map((unit, index) => ({ id: index, unit: unit}))
        .filter(target => target.unit.army !== this.armyIndex);
  }

  get army() {
    let state = store.getState()
    let activeBattle = state.battle.battles[state.battle.activeBattle];
    return activeBattle.armies[this.armyIndex];
  }

  get troopTypeName() {
    return {
      [FOOT_TROOP]: 'Foot troops',
      [CAVALRY_TROOP]: 'Cavalry',
      [ARTILLERY_TROOP]: 'Artillery',
    }[this.troopType];
  }

  get strengthPercentage() {
    return (this.strength / this.fullStrength) * 100;
  }

  get perfectStatus() {
    return `${this.strength} soldiers remaining of the original ${this.fullStrength}. Morale is at ${this.morale}% of their maximum. There energy level is at ${this.energy}% of their maximum.`;
  }

  get detailedStatus() {
    return `${this.detailedStrengthDesc} ${this.detailedMoraleDesc} ${this.detailedEnergyDesc}`;
  }

  get desc() {
    return `${upperCaseFirst(this.experienceDesc)} ${this.troopTypeName.toLowerCase()} weilding ${this.rangedWeapon.name.toLowerCase()} and ${this.meleeWeapon.name.toLowerCase()} with ${this.leaderDesc.toLowerCase()} leaders consisting of ${this.stands} stands fighting in ${this.openness > 50 ? 'open' : 'closed'} order.`;
  }

  get experienceDesc() {
    if (this.experience > 90) {
      return 'Elite';
    } else if (this.experience > 80) {
      return 'Veteran';
    } else if (this.experience > 70) {
      return 'Experienced';
    } else if (this.experience > 60) {
      return 'Well trained';
    } else if (this.experience > 50) {
      return 'Trained';
    } else if (this.experience > 40) {
      return 'Poorly trained';
    } else if (this.experience > 30) {
      return 'Untrained';
    } else if (this.experience > 20) {
      return 'Somewhat inexperienced';
    } else if (this.experience > 10) {
      return 'Inexperienced';
    } else {
      return 'Totally inexperienced';
    }
  }

  get leaderDesc() {
    if (this.leadership > 90) {
      return 'outstanding';
    } else if (this.leadership > 80) {
      return 'amazing';
    } else if (this.leadership > 70) {
      return 'great';
    } else if (this.leadership > 60) {
      return 'very good';
    } else if (this.leadership > 50) {
      return 'average';
    } else if (this.leadership > 40) {
      return 'below average';
    } else if (this.leadership > 30) {
      return 'poor';
    } else if (this.leadership > 20) {
      return 'very poor';
    } else if (this.leadership > 10) {
      return 'terrible';
    } else {
      return 'horrendous';
    }
  }

  get detailedMoraleDesc() {
    if (this.morale > 90) {
      return 'Morale is great.';
    } else if (this.morale > 80) {
      return 'They have been shaken up but are ready for their orders.';
    } else if (this.morale > 70) {
      return 'They have been shaken up quite a bit.';
    } else if (this.morale > 60) {
      return 'They are nervous to engage in combat but are still in the fight.';
    } else if (this.morale > 50) {
      return 'They are timid.';
    } else if (this.morale > 40) {
      return 'They are afraid to fight any further.';
    } else if (this.morale > 30) {
      return 'They are afraid to fight any further.';
    } else if (this.morale > 20) {
      return 'They will likely not take any further orders.';
    } else if (this.morale > 10) {
      return 'They could flee at any time.';
    } else {
      return 'They are refusing to fight or take orders and could flee at any time.';
    }
  }

  get detailedStrengthDesc() {
    if (this.strengthPercentage > 97) {
      return 'They are at full strength and have taken no casualties.';
    } else if (this.strengthPercentage > 93) {
      return 'They are close to full strength but have take some casualties.';
    } else if (this.strengthPercentage > 90) {
      return 'They have taken some casualties.';
    } else if (this.strengthPercentage > 85) {
      return 'They have taken noticable casualties.';
    } else if (this.strengthPercentage > 80) {
      return 'They have taken significant casualties.';
    } else if (this.strengthPercentage > 75) {
      return 'They have taken a lot of casualties.';
    } else if (this.strengthPercentage > 60) {
      return 'They have taken severe casualties.';
    } else if (this.strengthPercentage > 50) {
      return 'They have taken terrible casualties.';
    } else if (this.strengthPercentage > 40) {
      return 'They have lost at least half their men.';
    } else if (this.strengthPercentage > 20) {
      return 'There are not many of the men left.';
    } else {
      return 'Very few men remain alive.';
    }
  }

  get detailedEnergyDesc() {
    if (this.energy > 90) {
      return 'They have lots of energy.';
    } else if (this.energy > 80) {
      return 'They are well rested.';
    } else if (this.energy > 70) {
      return 'They have put in some work but are still fresh.';
    } else if (this.energy > 60) {
      return 'They are beginning to slow down.';
    } else if (this.energy > 50) {
      return 'They are showing signs of exhaustion.';
    } else if (this.energy > 40) {
      return 'They are exhausted.';
    } else if (this.energy > 30) {
      return 'They are completely exhausted.';
    } else if (this.energy > 20) {
      return 'They are utterly spent.';
    } else if (this.energy > 10) {
      return 'They have no energy left.';
    } else {
      return 'They have given it all that they have. They are totally spent.';
    }
  }
}
