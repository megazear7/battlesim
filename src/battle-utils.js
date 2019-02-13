import { DEADLYNESS } from './game.js';

export function attack({attacker, defender, duration = SECONDS_PER_TURN}) {
  let hits = 0;
  for (let i = 0; i < attacker.attacksForTime(duration); i++) {
    if (attacker.skillRoll * DEADLYNESS > attacker.skillRoll) {
      hits += 1;
    }
  }

  let casualties = 0;
  for (let i = 0; i < hits; i++) {
    if (attacker.powerRoll * DEADLYNESS > this.armorRoll) {
      casualties += 1;
    }
  }

  return casualties;
}
