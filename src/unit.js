import { store } from './store.js';
import { FOOT_TROOP, CAVALRY_TROOP, ARTILLERY_TROOP } from './units.js';
import { upperCaseFirst } from './string-utils.js';
import { getRandomInt, roundToNearest } from './math-utils.js';
import { STAT_PERCENTAGE, STAT_DESCRIPTION, STRENGTH_MESSAGE_DESCRIPTIVE } from './game.js';
import WEAPONS from './game/weapons.js';
import ARMOR from './game/armor.js';

export default class Unit {
  constructor({
                army = 0,
                name,
                points = 0,
                unitType = FOOT_TROOP,
                openness = 20,
                minFallback = 10,
                maxFallback = 20,
                ammunition = 0,
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
                isMounted = false,
                canUnmount = false,
                isCurrentlyMounted,
                mountedSpeed,
                unmountedSpeed,
                maneuverTime = 100,
              }, id, battle) {
    this.armyIndex = army;
    this.id = id;
    this.battle = battle;
    this.name = name;
    this.points = points;
    this.unitType = unitType;
    this.openness = openness;
    this.minFallback = minFallback;
    this.maxFallback = maxFallback;
    this.ammunition = ammunition;
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
    this.baseSpeed = baseSpeed;
    this.baseBackwardSpeed = baseBackwardSpeed;
    this.isMounted = isMounted;
    this.canUnmount = canUnmount;
    this.isCurrentlyMounted = isCurrentlyMounted;
    this.mountedSpeed = mountedSpeed;
    this.unmountedSpeed = unmountedSpeed;
    this.maneuverTime = maneuverTime;
    this.fallback = getRandomInt(this.minFallback, this.maxFallback);
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
    if (this.strength <= 0) {
      return `${this.name} has been destroyed.`;
    } else if (this.morale <= 0) {
      return `${this.name} has fled the battlefield.`;
    } else {
      return `${this.strengthMessage} ${this.moraleMessage} ${this.energyMessage} ${this.mountedStatus}`;
    }
  }

  get mountedStatus() {
    if (this.isMounted) {
      if (this.canUnmount && this.isCurrentlyMounted) {
        return `They are currently mounted.`;
      } else if (this.canUnmount && ! this.isCurrentlyMounted) {
        return `They are currently unmounted.`;
      } else {
        return ``;
      }
    } else {
      return ``;
    }
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

  get moraleMessage() {
    return this.battle.statReporting === STAT_PERCENTAGE
      ? `They are at ${this.morale}% morale `
      : this.moraleDesc;
  }

  get moraleDesc() {
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

  get strengthMessage() {
    return this.battle.strengthReporting === STRENGTH_MESSAGE_DESCRIPTIVE
      ? this.strengthDesc
      : `They are at ${Math.ceil(this.strengthPercentage)}% strength, having ${roundToNearest(this.strength, this.battle.strengthReporting)} men left.`;
  }

  get strengthDesc() {
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

  get energyMessage() {
    return this.battle.statReporting === STAT_PERCENTAGE
      ? `and ${this.energy}% energy.`
      : this.energyDesc;
  }

  get energyDesc() {
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
