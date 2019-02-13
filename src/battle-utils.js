import { weightedRandom } from './math-utils.js';

const MAX_ENERGY = 100;
const DEADLYNESS = 0.1;

export function attack(strength, volume, power, armor, attackSkill, defendSkill, attackEnergy, defendEnergy) {
  console.debug('[attack]', '\nstrength', strength, '\nvolume', volume, '\npower', power, '\narmor', armor, '\nattackSkill', attackSkill, '\ndefendSkill', defendSkill, '\nattackEnergy', attackEnergy, '\ndefendEnergy', defendEnergy);

  let hits = 0;
  let totalAttacks = strength * volume * (attackEnergy / MAX_ENERGY);
  for (let i = 0; i < totalAttacks; i++) {
    if (Math.random() * attackSkill * DEADLYNESS > Math.random() * defendSkill * (defendEnergy / MAX_ENERGY)) {
      hits += 1;
    }
  }

  console.debug('[attack] hits', hits);

  let casualties = 0;
  for (let i = 0; i < hits; i++) {
    if (Math.random() * power > Math.random() * armor) {
      casualties += 1;
    }
  }

  console.debug('[attack] casualties', casualties);

  return casualties;
}
