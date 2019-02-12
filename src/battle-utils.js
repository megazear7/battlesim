import { weightedRandom } from './math-utils.js';

export function attack(strength, volume, power, armor, attackSkill, defendSkill, attackEnergy, defendEnergy) {
  const MAX_ENERGY = 100;
  const DEADLYNESS = 0.25;

  let hits = 0;
  let totalAttacks = strength * volume * (attackEnergy / MAX_ENERGY);
  for (let i = 0; i < totalAttacks; i++) {
    if (Math.random() * attackSkill * DEADLYNESS > Math.random() * defendSkill * ((MAX_ENERGY - defendEnergy) / MAX_ENERGY)) {
      hits += 1;
    }
  }

  let casualties = 0;
  for (let i = 0; i < hits; i++) {
    if (Math.random() * power > Math.random() * armor) {
      casualties += 1;
    }
  }

  return casualties;
}
