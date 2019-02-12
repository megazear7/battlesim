import { store } from './store.js';
import { WEAPONS } from './weapons.js';
import { ARMOR } from './armor.js';
import { weightedRandom, numberWithCommas } from './math-utils.js';

const SECONDS_IN_AN_HOUR = 3600;

export default class Unit {
  constructor({
                army = 0,
                name,
                strength,
                morale = 90,
                energy = 100,
                static: {
                  armor,
                  meleeWeapon,
                  rangedWeapon,
                  experience = 50,
                  leadership = 50,
                  troopType = 0,
                  fullStrength,
                  movementTime = 100,
                  maneuverTime = 100,
                }
              }) {
    this.armyIndex = army;
    this.name = name;
    this.strength = strength || fullStrength;
    this.morale = morale;
    this.energy = energy;
    this.armor = ARMOR[armor];
    this.meleeWeapon = WEAPONS[meleeWeapon];
    this.rangedWeapon = WEAPONS[rangedWeapon];
    this.experience = experience;
    this.leadership = leadership;
    this.troopType = troopType;
    this.fullStrength = fullStrength;
    this.movementTime = movementTime; // Time it takes to go 100 yards
    this.maneuverTime = maneuverTime;
  }

  rest() {
    return {
      message: "TODO"
    };
  }

  get secondsToIssueOrder() {
    return (this.leadership * 3) + (this.experience * 2);
  }

  move(distanceInYards, terrain, manuevering = false) {
    const secondsAvailableToMove = SECONDS_IN_AN_HOUR - this.secondsToIssueOrder;
    const terrainModifier = 2 + ((terrain / 100) * 5) + Math.random();
    const secondsToMove100Yards = this.movementTime * terrainModifier;
    const maxYardsTravelled = (secondsAvailableToMove / secondsToMove100Yards) * 100;
    const yardsTravelled = Math.min(distanceInYards === 0 ? Number.MAX_SAFE_INTEGER : distanceInYards, maxYardsTravelled);
    const secondsSpentMoving = (yardsTravelled / 100) * secondsToMove100Yards;
    const energyCost = (secondsSpentMoving / SECONDS_IN_AN_HOUR) * terrainModifier;
    const totalSecondsSpent = secondsSpentMoving + this.secondsToIssueOrder;

    console.debug('secondsAvailableToMove', secondsAvailableToMove, '\nterrainModifier', terrainModifier, '\nsecondsToMove100Yards', secondsToMove100Yards, '\nmaxYardsTravelled', maxYardsTravelled, '\nyardsTravelled', yardsTravelled, '\nsecondsSpentMoving', secondsSpentMoving, '\nenergyCost', energyCost, '\ntotalSecondsSpent', totalSecondsSpent);

    let moveDesc;
    if (distanceInYards === 0) {
      moveDesc = `You move ${Math.floor(yardsTravelled / 100)} inches.`;
    } else if (yardsTravelled < distanceInYards) {
      moveDesc = `You could only move ${Math.floor(yardsTravelled / 100)} inches.`;
    } else {
      moveDesc = `You move the full ${Math.floor(yardsTravelled / 100)} inches.`;
    }

    let battlefieldDesc = `${this.name} travelled ${numberWithCommas(Math.floor(yardsTravelled))} yards in ${Math.floor(totalSecondsSpent / 60)} minutes.`;
    let energyCostDesc = `Energy cost: ${energyCost}`;

    return {
      distance: Math.floor(yardsTravelled),
      time: Math.floor((secondsSpentMoving + this.secondsToIssueOrder) / 60),
      energyCost: energyCost,
      messages: [ moveDesc, battlefieldDesc, energyCostDesc ],
      update: {
        energy: this.energy - energyCost,
      }
    };
  }

  charge() {
    return {
      message: "TODO"
    };
  }

  fire() {
    return {
      message: "TODO"
    };
  }

  get targets() {
    let state = store.getState()
    let activeBattle = state.battle.battles[state.battle.activeBattle];
    return activeBattle.units
        .filter(unit => unit.army !== this.armyIndex)
        .map((unit, index) => ({ id: index, unit: unit}));
  }

  get army() {
    let state = store.getState()
    let activeBattle = state.battle.battles[state.battle.activeBattle];
    return activeBattle.armies[this.armyIndex];
  }

  get troopTypeName() {
    return {
      0: 'Foot troops',
      1: 'Cavalry',
      2: 'Artillery',
    }[this.troopType];
  }

  get strengthPercentage() {
    return (this.strength / this.fullStrength) * 100;
  }

  get experienceDesc() {
    if (this.experience > 80) {
      return 'elite';
    } else if (this.experience > 60) {
      return 'experienced';
    } else if (this.experience > 40) {
      return 'trained';
    } else if (this.experience > 20) {
      return 'inexperienced';
    } else {
      return 'untrained';
    }
  }

  get leaderDesc() {
    if (this.leadership > 80) {
      return 'great';
    } else if (this.leadership > 60) {
      return 'good';
    } else if (this.leadership > 40) {
      return 'average';
    } else if (this.leadership > 20) {
      return 'poor';
    } else {
      return 'terrible';
    }
  }

  get detailedMoraleDesc() {
    if (this.morale > 80) {
      return 'Morale is great. They are willing to fight.';
    } else if (this.morale > 60) {
      return 'Morale is good. They have been shaken up but are ready for their orders.';
    } else if (this.morale > 40) {
      return 'Morale is declining. They are nervous to engage in combat but are still in the fight';
    } else if (this.morale > 40) {
      return 'Morale is poor. They are afraid to fight any further.';
    } else if (this.morale > 40) {
      return 'Morale is terrible. They could flee at any time.';
    } else {
      return 'They are refusing to fight or take orders.';
    }
  }

  get detailedStrengthDesc() {
    if (this.strengthPercentage > 95) {
      return 'They are close to full strength.';
    } else if (this.strengthPercentage > 85) {
      return 'They have taken some casualties but remain strong.';
    } else if (this.strengthPercentage > 70) {
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
      return 'They are well rested.';
    } else if (this.energy > 70) {
      return 'They have put in some work but are still fresh.';
    } else if (this.energy > 50) {
      return 'They are beginning to slow down.';
    } else if (this.energy > 30) {
      return 'They are exhausted.';
    } else if (this.energy > 10) {
      return 'They are spent and have little energy left.';
    } else {
      return 'They have given it all that they have. They are totally spent.';
    }
  }

  get perfectStatus() {
    return `${this.strength} soldiers remaining of the original ${this.fullStrength}. Morale is at ${this.morale}% of their maximum. There energy level is at ${this.energy}% of their maximum.`;
  }

  get detailedStatus() {
    //3000 Soldiers / 90% Morale / 100% Energy
    return `${this.detailedStrengthDesc} ${this.detailedMoraleDesc} ${this.detailedEnergyDesc}`;
  }

  get desc() {
    return `${upperCaseFirst(this.experienceDesc)} ${this.troopTypeName.toLocaleLowerCase()} weilding ${this.rangedWeapon.name.toLocaleLowerCase()} and ${this.meleeWeapon.name.toLocaleLowerCase()} with ${this.leaderDesc.toLocaleLowerCase()} leaders.`;
  }

}

function upperCaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
