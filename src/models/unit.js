import { FOOT_TROOP, CAVALRY_TROOP, ARTILLERY_TROOP } from '../game.js';
import { upperCaseFirst } from '../utils/string-utils.js';
import { getRandomInt, roundToNearest, prettyLengthOfTime } from '../utils/math-utils.js';
import { STAT_PERCENTAGE, STAT_DESCRIPTION, STRENGTH_MESSAGE_DESCRIPTIVE } from '../game.js';
import WEAPONS from '../game/weapons.js';
import ARMOR from '../game/armor.js';

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
                maxAmmo = 0,
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
    this.maxAmmo = maxAmmo;
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

  get timeUntilNextMove() {
    return this.nextAction - this.battle.second;
  }

  get nextMovePrettyTime() {
    if (this.isNotEliminated) {
      if (this.timeUntilNextMove > 0) {
        return prettyLengthOfTime(this.timeUntilNextMove);
      } else {
        return 'Active unit';
      }
    } else {
      return 'Eliminated';
    }
  }

  get isNotEliminated() {
    return ! this.isEliminated;
  }

  get isEliminated() {
    return this.morale <= 0 || this.strength <= 0 || this.energy <= 0;
  }

  get secondsToIssueOrder() {
    return (this.leadership * 3) + (this.experience * 2);
  }

  get carriedWeight() {
    return this.meleeWeapon.weight + this.rangedWeapon.weight + this.armor.weight;
  }

  get targets() {
    return this.battle.units
        .map((unit, index) => ({ id: index, unit: unit}))
        .filter(target => target.unit.army !== this.armyIndex);
  }

  get army() {
    return this.battle.armies[this.armyIndex];
  }

  get troopTypeName() {
    return {
      [FOOT_TROOP]: 'Foot troops',
      [CAVALRY_TROOP]: 'Cavalry',
      [ARTILLERY_TROOP]: 'Artillery',
    }[this.troopType];
  }

  get outOfAmmo() {
    return this.ammunition <= 0;
  }

  get lowOnAmmo() {
    return this.ammunition < this.strength * this.volume * 2;
  }

  get strengthPercentage() {
    return (this.strength / this.fullStrength) * 100;
  }

  get detailedStatus() {
    if (this.strength <= 0) {
      return `${this.name} has been destroyed.`;
    } else if (this.morale <= 0) {
      return `${this.name} has fled the battlefield.`;
    } else {
      return `${this.strengthMessage} ${this.moraleMessage} ${this.energyMessage} ${this.mountedStatus} ${this.ammoMessage}`;
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

  get ammoMessage() {
    if (this.battle.useAmmo) {
      if (this.outOfAmmo) {
        return `They are out of ammunition.`;
      } else if (this.lowOnAmmo) {
        return `They are low on ammunition.`;
      } else {
        return '';
      }
    } else {
      return '';
    }
  }

  get experienceDesc() {
    if (this.experience >= 90) {
      return 'Legendary';
    } else if (this.experience >= 85) {
      return 'Heroic';
    } else if (this.experience >= 80) {
      return 'Crack';
    } else if (this.experience >= 75) {
      return 'Elite';
    } else if (this.experience >= 70) {
      return 'Veteran';
    } else if (this.experience >= 65) {
      return 'Superior';
    } else if (this.experience >= 60) {
      return 'Experienced';
    } else if (this.experience >= 55) {
      return 'Somewhat experienced';
    } else if (this.experience >= 45) {
      return 'Average';
    } else if (this.experience >= 40) {
      return 'Inexperienced';
    } else if (this.experience >= 35) {
      return 'Undisciplined';
    } else if (this.experience >= 30) {
      return 'Green';
    } else if (this.experience >= 20) {
      return 'Inept';
    } else if (this.experience >= 10) {
      return 'Incapable';
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
      ? `They are at ${Math.ceil(this.morale)}% morale `
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
      ? `and ${Math.ceil(this.energy)}% energy.`
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
