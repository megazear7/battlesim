let armor = {
  clothes: {
    defense: 1,
    weight: 1,
  },
  gambeson: {
    thin: {
      defense: 8,
      weight: 5,
    },
    standard: {
      defense: 13,
      weight: 8,
    },
    thick: {
      defense: 18,
      weight: 11,
    }
  },
  bronze: {
    scalemail: {
      partial: {
        defense: 15,
        weight: 28,
      },
      complete: {
        defense: 20,
        weight: 50,
      }
    },
    chainmail: {
      partial: {
        defense: 20,
        weight: 25,
      },
      complete: {
        defense: 35,
        weight: 30,
      }
    },
    platemail: {
      partial: {
        defense: 25,
        weight: 40,
      },
      complete: {
        defense: 55,
        weight: 50,
      }
    }
  },
  iron: {
    scalemail: {
      partial: {
        defense: 25,
        weight: 28,
      },
      complete: {
        defense: 30,
        weight: 50,
      }
    },
    chainmail: {
      partial: {
        defense: 30,
        weight: 25,
      },
      complete: {
        defense: 45,
        weight: 30,
      }
    },
    platemail: {
      partial: {
        defense: 35,
        weight: 40,
      },
      complete: {
        defense: 70,
        weight: 50,
      }
    }
  },
  steel: {
    scalemail: {
      partial: {
        defense: 30,
        weight: 28,
      },
      complete: {
        defense: 35,
        weight: 50,
      }
    },
    chainmail: {
      partial: {
        defense: 35,
        weight: 25,
      },
      complete: {
        defense: 50,
        weight: 30,
      }
    },
    platemail: {
      partial: {
        defense: 40,
        weight: 40,
      },
      complete: {
        defense: 80,
        weight: 50,
      }
    }
  }
};

let weapons = {
  sword: {
    powerVsFoot: 30,
    powerVsMounted: 20,
    volume: 4,
    weight: 5,
  },
  spear: {
    powerVsFoot: 30,
    powerVsMounted: 30,
    volume: 3,
    weight: 5,
  },
  pike: {
    powerVsFoot: 20,
    powerVsMounted: 40,
    volume: 2,
    weight: 7,
  },
  longbow: {
    powerVsFoot: 30,
    powerVsMounted: 30,
    volume: 1,
    weight: 3,
  },
  bayonete: {
    powerVsFoot: 15,
    powerVsMounted: 15,
    volume: 1,
    weight: 1,
  },
  brownBessSmoothbore: { // Standard revolutionary war rifle
    powerVsFoot: 60,
    powerVsMounted: 60,
    volume: 3,
    weight: 3,
  },
  confederateSmoothbore: { // Standard union civil war rifle
    powerVsFoot: 60,
    powerVsMounted: 60,
    volume: 4,
    weight: 3,
  },
  springfieldRifledMusket: { // Standard union civil war rifle
    powerVsFoot: 70,
    powerVsMounted: 70,
    volume: 4,
    weight: 3,
  },
  leeEnfield303: { // Standard ww1 rifle
    powerVsFoot: 75,
    powerVsMounted: 75,
    volume: 5,
    weight: 3,
  }
};

let unionLine = {
  static: {
    armor: armor.clothes,
    meleeWeapon: weapons.bayonete,
    rangedWeapon: weapons.springfieldRifledMusket,
    experience: 50,
    leadership: 50,
    fullStrength: 1000,
    speed: 120,
  },
  dynamic: {
    energy: 100,
    strength: 1000,
    morale: 90,
  }
};

let confederateLine = {
  static: {
    armor: armor.clothes,
    meleeWeapon: weapons.bayonete,
    rangedWeapon: weapons.springfieldRifledMusket,
    experience: 50,
    leadership: 50,
    fullStrength: 1000,
    speed: 120,
  },
  dynamic: {
    energy: 100,
    strength: 1000,
    morale: 90,
  }
};

/** @function attack
 *  Make an attack against a unit. This assumes no environmental factors.
 *  @param strength: The number of soldiers in the attacking unit
 *  @param volume: The number of attacks per soldier.
 *  @param power: This number takes away the affectiveness of armor (0-100)
 *  @param armor: Percentage of how effective the defenders armor is (1-99)
 *  @param attackSkill: Percentage of how effective the defenders armor is (1-99)
 *  @param defendSkill: Percentage of how effective the defenders armor is (1-99)
 *  @param attackSkill: Percentage of how much energy the defenders has (1-99)
 *  @param defendSkill: Percentage of how much energy the defenders has (1-99)
 *  @return The number of casualties the defener takes.
 */
export function attack(strength, volume, power, armor, attackSkill, defendSkill, attackEnergy, defendEnergy) {
  checkAttackParams(strength, volume, armor, power, attackSkill, defendSkill);
  let affectiveArmor = Math.min(armor - power, 0);
  let explosivePower = 1 + Math.min(power - armor, 0);

  let casualties = volume * strength // The total number of attacks
    * explosivePower // If the power is greater than the armor the affective number of attacks increase
    * ((100 - affectiveArmor) / 100) // Account for the inverse of the defenders armor that is affective
    * (attackSkill / 100) // Account for the attackers skill
    * ((100 - defendSkill) / 100) // Account for the inverse of the defenders skill
    * (attackEnergy / 100) // Account for the attackers energy
    * ((100 - defendEnergy) / 100) // Account for the inverse of the defenders energy
    * (weightedRandom(2)); // Random percentage weighted towards 0.5

  return Math.floor(casualties);
}

/** @function checkAttackParams
 *  Sends debug messages if the parameters are not in the acceptable range.
 */
function checkAttackParams(strength, volume, power, armor, attackSkill, defendSkill, attackEnergy, defendEnergy) {
  [{ name: 'armor', param: armor },
   { name: 'attackSkill', param: attackSkill },
   { name: 'defendSkill', param: defendSkill },
   { name: 'attackEnergy', param: attackEnergy },
   { name: 'defendEnergy', param: defendEnergy },
 ].forEach(({name, param}) => {
    if (param < 1) {
      console.error(`${name} of less than 1 is invalid. ${name} was ${param}`);
    }
    if (param > 99) {
      console.error(`${name} of greater than 99 is invalid. ${name} was ${param}`);
    }
  });

  // Power can be over 1 and that would be for things like cannons or area affects.
  if (power < 1) {
    console.error(`power of less than 1 is invalid. power was ${power}`);
  }

  if (strength < 1) {
    console.error(`strength of less than 1 is invalid. strength was ${strength}`);
  }

  if (strength <= 0) {
    console.error(`volume of less than or equal to 0 is invalid. volume was ${volume}`);
  }
}

/** @function weightedRandom
 *  A random number between 0 and 1 weighted towards the middle.
 *  @param bellFactor Increasing this number increases the weight towards the middle.
 */
function weightedRandom(bellFactor) {
  var max = 100;
  var num = 0;
  for (var i = 0; i < bellFactor; i++) {
    num += Math.random() * (max/bellFactor);
  }
  return num / max;
}
