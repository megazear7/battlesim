import { weightedRandom, SECONDS_IN_AN_HOUR } from './math-utils.js';
import { MAX_ENERGY, DEADLYNESS } from './game.js';

export function attack(attacker, defender, duration) {
  const totalAttacks = attacker.strength * attacker.volume * (attacker.energy / MAX_ENERGY) * (duration / SECONDS_IN_AN_HOUR);
  let hits = 0;
  for (let i = 0; i < totalAttacks; i++) {
    if (Math.random() * attacker.skill * DEADLYNESS > Math.random() * defender.skill * (defend.energy / MAX_ENERGY)) {
      hits += 1;
    }
  }

  let casualties = 0;
  for (let i = 0; i < hits; i++) {
    if (Math.random() * attacker.power > Math.random() * attacker.armor) {
      casualties += 1;
    }
  }

  return casualties;
}
