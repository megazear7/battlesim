import { store } from './store.js';
import { WEAPONS } from './weapons.js';
import { ARMOR } from './armor.js';
import { weightedRandom, numberWithCommas, nearest100, SECONDS_IN_AN_HOUR } from './math-utils.js';
import { attack } from './battle-utils.js';

export default class Unit {
  constructor({
                army = 0,
                name,
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
                movementTime = 100,
                maneuverTime = 100,
              }, id) {
    this.armyIndex = army;
    this.id = id;
    this.name = name;
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
    this.movementTime = movementTime; // Time it takes to go 100 yards
    this.maneuverTime = maneuverTime;
  }

  energyRecoveredDesc(energyRecovered) {
    if (energyRecovered > 80) {
      return `They got back all of there energy.`;
    } else if (energyRecovered > 60) {
      return `They recovered almost all of their strength.`;
    } else if (energyRecovered > 40) {
      return `They made a great recovery. The rest was very helpful.`;
    } else if (energyRecovered > 20) {
      return `They recovered a lot of their strength`;
    } else if (energyRecovered > 15) {
      return `They recovered much of their strength`;
    } else if (energyRecovered > 9) {
      return `They recovered some of their strength`;
    } else if (energyRecovered > 6) {
      return `They recovered a bit of their strength.`;
    } else if (energyRecovered > 3) {
      return `The rest was worth it but they only recovered a little bit.`;
    } else {
      return `The rest was hardly worth it.`;
    }
  }

  rest(time = SECONDS_IN_AN_HOUR) {
    let percentageOfAnHourSpentResting = (time / SECONDS_IN_AN_HOUR) * 100;
    let maxEnergyRecovered = (percentageOfAnHourSpentResting / 100) * 20 * Math.random();
    let energyRecovered = Math.min(100 - this.energy, maxEnergyRecovered);

    return {
      messages: [ this.energyRecoveredDesc(energyRecovered) ],
      updates: [
        {
          id: this.id,
          changes: [
            {
              prop: 'energy',
              value: Math.min(this.energy + energyRecovered, 100),
            },
            {
              prop: 'nextAction',
              value: this.nextAction + time,
            },
          ]
        }
      ]
    };
  }

  get secondsToIssueOrder() {
    return (this.leadership * 3) + (this.experience * 2);
  }

  energyDesc(energyCost) {
    if (energyCost > 100) {
      return `This took last ounce of strength they had.`;
    } else if (energyCost > 80) {
      return `This took nearly every ounce of strength they had.`;
    } else if (energyCost > 30) {
      return `This was a really tough assignment. They are feeling exhaustion creep in.`;
    } else if (energyCost > 20) {
      return `This was a tough job. It took a lot out of them.`;
    } else if (energyCost > 8) {
      return `They put in a lot of work.`;
    } else if (energyCost > 4) {
      return `They put in some real work.`;
    } else if (energyCost > 2) {
      return `They put in a bit of work.`;
    } else if (energyCost > 1) {
      return `This didn't take much effort`;
    } else {
      return `This took no effort at all`;
    }
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

  battlefieldMoveDesc(yardsTravelled, secondsSpent) {
    return `${this.name} travelled ${numberWithCommas(nearest100(yardsTravelled))} yards in ${Math.floor(secondsSpent / 60)} minutes.`;
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

  baseCombat(separation, attackersCasualties, defendersCasualties, terrainModifier, general, subcommander, defender) {
    let attackerPercentLoss = attackersCasualties / this.strength;
    let defenderPercentLoss = defendersCasualties / defender.strength;

    let attackerEnergyLoss = attackerPercentLoss * 2 * 100 * Math.random();
    let defenderEnergyLoss = defenderPercentLoss * 2 * 100 * Math.random();

    let attackerMoraleMod = (this.experience / 100) + 1;
    let defenderMoraleMod = (defender.experience / 100) + 1;

    let attackerMoraleLoss = attackerPercentLoss * attackerMoraleMod * 100 * Math.random();
    let defenderMoraleLoss = defenderPercentLoss * defenderMoraleMod * 100 * Math.random();

    let attackerLeadershipLoss;
    if (Math.random() > 0.95) {
      attackerLeadershipLoss = Math.random() * 50;
    } else {
      attackerLeadershipLoss = 0;
    }

    let defenderLeadershipLoss;
    if (Math.random() > 0.95) {
      defenderLeadershipLoss = Math.random() * 50;
    } else {
      defenderLeadershipLoss = 0;
    }

    let changes = {
      attacker: {
        casualties: attackersCasualties,
        energy: attackerEnergyLoss,
        morale: attackerMoraleLoss,
        leadership: attackerLeadershipLoss,
      },
      defender: {
        casualties: defendersCasualties,
        energy: defenderEnergyLoss,
        morale: defenderMoraleLoss,
        leadership: defenderLeadershipLoss,
      }
    };

    console.debug(changes.attacker.casualties, changes.defender.casualties);

    return changes;
  }

  meleeCombat(separation, terrainModifier, uphill, downhill, engagedAttackers, engagedDefenders, general, subcommander, defender) {
    let attackersPowerMod = 1;
    let defendersPowerMod = 1;
    if (uphill) {
      attackersPowerMod -= 0.25;
      defendersPowerMod += 0.25;
    }
    if (downhill) {
      attackersPowerMod += 0.25;
      defendersPowerMod -= 0.25;
    }

    let attackersCasualties = attack(
      defender.strength,
      defender.meleeWeapon.volume * defender.percentageEngaged(engagedDefenders),
      defender.meleeWeapon.powerVsFoot * defendersPowerMod,
      defender.armor.defense,
      defender.meleeSkill,
      this.meleeSkill,
      defender.energy,
      this.energy);

    let defendersCasualties = attack(
      this.strength,
      this.meleeWeapon.volume * defender.percentageEngaged(engagedAttackers),
      this.meleeWeapon.powerVsFoot * attackersPowerMod,
      this.armor.defense,
      this.meleeSkill,
      defender.meleeSkill,
      this.energy,
      defender.energy);

    return this.baseCombat(separation, attackersCasualties, defendersCasualties, terrainModifier, general, subcommander, defender);
  }

  rangedCombat(separation, terrainModifier, uphill, downhill, engagedAttackers, engagedDefenders, general, subcommander, defender) {
    const attackerTimeToFight = SECONDS_IN_AN_HOUR - this.secondsToIssueOrder - (terrainModifier / 100);
    const attackerPercentTimeFighting = attackerTimeToFight / SECONDS_IN_AN_HOUR;
    const defenderTimeToFight = SECONDS_IN_AN_HOUR - defender.secondsToIssueOrder - (terrainModifier / 100);
    const defenderPercentTimeFighting = defenderTimeToFight / SECONDS_IN_AN_HOUR;
    const attackerDistanceMod = Math.max((this.rangedWeapon.range - separation) / this.rangedWeapon.range, 0);
    const defenderDistanceMod = Math.max((defender.rangedWeapon.range - separation) / defender.rangedWeapon.range, 0);

    let attackersCasualties = attack(
      defender.strength,
      defender.rangedWeapon.volume * defender.percentageEngaged(engagedDefenders) * defenderPercentTimeFighting,
      defender.rangedWeapon.powerVsFoot,
      defender.armor.defense,
      defender.rangedSkill * defenderDistanceMod,
      this.rangedSkill,
      defender.energy,
      this.energy);

    let defendersCasualties = attack(
      this.strength,
      this.rangedWeapon.volume * this.percentageEngaged(engagedAttackers) * attackerPercentTimeFighting,
      this.rangedWeapon.powerVsFoot,
      this.armor.defense,
      this.rangedSkill * attackerDistanceMod,
      defender.rangedSkill,
      this.energy,
      defender.energy);

    return this.baseCombat(separation, attackersCasualties, defendersCasualties, terrainModifier, general, subcommander, defender);
  }

  percentageEngaged(engagedStands) {
    return Math.min(engagedStands / this.stands, 100);
  }

  createMessage({ casualties = 0, energy = 0 , morale = 0, leadership = 0, }) {
    return `${this.name} sustained the following affects: casualties: ${Math.floor(casualties * 100) / 100}, energy: ${Math.floor(energy) / 100}, morale: ${Math.floor(morale) / 100}, leadership: ${Math.floor(leadership) / 100}`;
  }

  combat(separation, terrainModifier, uphill, downhill, engagedAttackers, engagedDefenders, general, subcommander, defender, melee) {
    if (engagedAttackers === 0) {
      engagedAttackers = this.stands;
    }

    if (engagedDefenders === 0) {
      engagedDefenders = defender.stands;
    }

    let changes;
    let specificMessage;
    if (melee) {
      changes = this.meleeCombat(separation, terrainModifier, uphill, downhill, engagedAttackers, engagedDefenders, general, subcommander, defender);
    } else {
      changes = this.rangedCombat(separation, terrainModifier, uphill, downhill, engagedAttackers, engagedDefenders, general, subcommander, defender);
    }

    let attackerMessage = createCasualtyMessage(this, changes.attacker.casualties);
    let defenderMessage = createCasualtyMessage(defender, changes.defender.casualties);

    return {
      messages: [ attackerMessage, this.detailedStatus, "---", defenderMessage, defender.detailedStatus ],
      updates: [
        {
          id: this.id,
          changes: [
            {
              prop: "strength",
              value: this.strength - changes.attacker.casualties
            },
            {
              prop: "energy",
              value: this.energy - changes.attacker.energy
            },
            {
              prop: "morale",
              value: this.morale - changes.attacker.morale
            },
            {
              prop: "leadership",
              value: this.leadership - changes.attacker.leadership
            },
            {
              prop: 'nextAction',
              value: this.nextAction + (SECONDS_IN_AN_HOUR * ((Math.random() / 2) + 0.5)),
            }
          ]
        },
        {
          id: defender.id,
          changes: [
            {
              prop: "strength",
              value: defender.strength - changes.defender.casualties
            },
            {
              prop: "energy",
              value: defender.energy - changes.defender.energy
            },
            {
              prop: "morale",
              value: defender.morale - changes.defender.morale
            },
            {
              prop: "leadership",
              value: defender.leadership - changes.defender.leadership
            },
            {
              prop: 'nextAction',
              value: defender.nextAction + (SECONDS_IN_AN_HOUR * ((Math.random() / 2) + 0.5)),
            }
          ]
        }
      ],
    };
  }

  charge(separation, terrainModifier, uphill, downhill, engagedAttackers, engagedDefenders, general, subcommander, defender) {
    return this.combat(separation, terrainModifier, uphill, downhill, engagedAttackers, engagedDefenders, general, subcommander, defender, true);
  }

  fire(separation, terrainModifier, uphill, downhill, engagedAttackers, engagedDefenders, general, subcommander, defender) {
    return this.combat(separation, terrainModifier, uphill, downhill, engagedAttackers, engagedDefenders, general, subcommander, defender, false);
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
      0: 'Foot troops',
      1: 'Cavalry',
      2: 'Artillery',
    }[this.troopType];
  }

  get strengthPercentage() {
    return (this.strength / this.fullStrength) * 100;
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
    return `${upperCaseFirst(this.experienceDesc)} ${this.troopTypeName.toLocaleLowerCase()} weilding ${this.rangedWeapon.name.toLocaleLowerCase()} and ${this.meleeWeapon.name.toLocaleLowerCase()} with ${this.leaderDesc.toLocaleLowerCase()} leaders consisting of ${this.stands} stands.`;
  }

}

function upperCaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function createCasualtyMessage(unit, casualties) {
  if (casualties > unit.strength) {
    return `${unit.name} was totally destroyed.`;
  } else if (casualties > unit.strength * 0.75) {
    return `${unit.name} sustained terrible casualties. Almost the whole unit was destroyed.`;
  } else if (casualties > unit.strength * 0.50) {
    return `${unit.name} sustained terrible casualties. Over half the unit is destroyed.`;
  } else if (casualties > unit.strength * 0.40) {
    return `${unit.name} sustained terrible casualties.`;
  } else if (casualties > unit.strength * 0.30) {
    return `${unit.name} sustained grave casualties.`;
  } else if (casualties > unit.strength * 0.20) {
    return `${unit.name} sustained massive casualties.`;
  } else if (casualties > unit.strength * 0.15) {
    return `${unit.name} sustained major casualties.`;
  } else if (casualties > unit.strength * 0.10) {
    return `${unit.name} sustained significant casualties.`;
  } else if (casualties > unit.strength * 0.5) {
    return `${unit.name} sustained noticable casualties.`;
  } else if (casualties > unit.strength * 0.2) {
    return `${unit.name} sustained minor casualties.`;
  } else {
    return `${unit.name} sustained almost no casualties.`;
  }
}
