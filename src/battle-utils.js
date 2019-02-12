import { weightedRandom } from './math-utils.js';

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
  checkAttackParams(strength, volume, armor, power, attackSkill, defendSkill, attackEnergy, defendEnergy);
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
    if (param < 0) {
      console.error(`${name} of less than 1 is invalid. ${name} was ${param}`);
    }
    if (param > 100) {
      console.error(`${name} of greater than 99 is invalid. ${name} was ${param}`);
    }
  });

  // Power can be over 1 and that would be for things like cannons or area affects.
  if (power < 0) {
    console.error(`power of less than 1 is invalid. power was ${power}`);
  }

  if (strength <= 0) {
    console.error(`volume of less than or equal to 0 is invalid. volume was ${volume}`);
  }
}
