import { store } from './store.js';
import { WEAPONS } from './weapons.js';
import { ARMOR } from './armor.js';
import { weightedRandom, numberWithCommas } from './math-utils.js';

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

  /**
   * @function move
   * @param distance This is given in inches
   * @param terrain This should be a number between 0 and 100
   * @return
   */
  move(distance, terrain, manuevering = false) {
    const secondsInAnHour = 3600;

    let time;
    let moveAsFarAsPossible = false;
    if (distance === 0) {
      moveAsFarAsPossible = true;
      time = secondsInAnHour;
      distance = secondsInAnHour / this.movementTime;
    } else {
      time = distance * this.movementTime;
    }

    time *= (1 + (terrain/100)) * (1 + weightedRandom(5));

    if (manuevering) {
      time += this.maneuverTime;
    }

    // If it would take more than 1 hour to perform the action then the movement
    // is reduced to however far they could have gone in an hour.
    let actualDistance;
    let actualTime;
    if (time > secondsInAnHour) {
      let speed = distance / time;
      actualTime = secondsInAnHour;
      actualDistance = speed * actualTime;
    } else {
      actualTime = time;
      actualDistance = distance;
    }

    let moveMessage;
    if (moveAsFarAsPossible) {
      moveMessage = `You move ${Math.floor(actualDistance)} inches.`;
    } else if (actualDistance < distance) {
      moveMessage = `You could only move ${Math.floor(actualDistance)} inches.`;
    } else {
      moveMessage = `You move the full ${Math.floor(actualDistance)} inches.`;
    }

    return {
      distance: Math.floor(actualDistance),
      time: Math.floor(actualTime),
      messages: [
        moveMessage,
        `${this.name} travelled ${numberWithCommas(Math.floor(actualDistance * 100))} yards in ${Math.floor(actualTime / 60)} minutes.`,
      ]
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
