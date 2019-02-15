import { DEADLYNESS, SECONDS_PER_TURN } from './game.js';
import { SECONDS_IN_AN_MINUTE } from './math-utils.js';

export const SECONDS_PER_ROUND = SECONDS_IN_AN_MINUTE;
export const YARDS_TO_FIGHT = 100;

export function combat(unit1, unit2, duration = SECONDS_PER_TURN) {
  let secondsOfCombat = 0;
  let secondsOfAction = 0;
  while (secondsOfAction < duration) {
    if (unit1.encounter.closeEnoughToFight) {
      if (unit1.fallingback) {
        unit1.yardsFallenback += unit1.yardsMovedPer(SECONDS_PER_ROUND);
        if (! unit2.fallingback) {
          unit2.yardsPersued += unit2.yardsMovedPer(SECONDS_PER_ROUND);
        }
      } else {
        makeAttacks(unit1, unit2, SECONDS_PER_ROUND);
      }

      if (unit2.fallingback) {
        unit2.yardsFallenback += unit2.yardsMovedPer(SECONDS_PER_ROUND);
        if (! unit1.fallingback) {
          unit1.yardsPersued += unit1.yardsMovedPer(SECONDS_PER_ROUND);
        }
      } else {
        makeAttacks(unit2, unit1, SECONDS_PER_ROUND);
      }
      secondsOfCombat += SECONDS_PER_ROUND;
    }

    secondsOfAction += SECONDS_PER_ROUND;
  }

  return secondsOfCombat;
}

function makeAttacks(attacker, defender, duration) {
  for (let i = 0; i < attacker.attacksForTime(duration); i++) {
    if (attacker.attacksRequireAmmunition) {
      attacker.ammunitionUsed += 1;
    }
    if (attacker.skillRoll * DEADLYNESS > defender.skillRoll &&
        attacker.powerRoll * DEADLYNESS > defender.armorRoll) {
      defender.casualties += 1;
    }
  }
}
