import ARMOR from './armor.js';
import WEAPONS from './armor.js';

const UNION = 0;
const CONFEDERATE = 1;
const UNION_BRIGADE_SIZE = 3000;
const CONFEDERATE_BRIGADE_SIZE = 3000;

const FRESH_UNION_BRIGADE = {
  army: UNION,
  name: "Fresh Union Brigade",
  strength: UNION_BRIGADE_SIZE,
  morale: 90,
  energy: 100,
  static: {
    armor: ARMOR.clothes,
    meleeWeapon: WEAPONS.bayonete,
    rangedWeapon: WEAPONS.springfieldRifledMusket,
    experience: 50,
    leadership: 50,
    fullStrength: 3000,
    movementTime: 120,
    maneuverTime: 110,
  }
};

const FRESH_CONFEDERATE_BRIGADE = {
  army: CONFEDERATE,
  name: "Fresh Confederate Brigade",
  strength: CONFEDERATE_BRIGADE_SIZE,
  morale: 90,
  energy: 100,
  static: {
    armor: ARMOR.clothes,
    meleeWeapon: WEAPONS.bayonete,
    rangedWeapon: WEAPONS.confederateSmoothbore,
    experience: 70,
    leadership: 70,
    fullStrength: 3000,
    movementTime: 120,
    maneuverTime: 80,
  }
};

export default [
  FRESH_UNION_BRIGADE,
  { ... FRESH_UNION_BRIGADE,
    name: "Tired Union Brigade",
    energy: 50,
  },
  { ... FRESH_UNION_BRIGADE,
    name: "Battered Union Brigade",
    strength: UNION_BRIGADE_SIZE * 0.7,
    energy: 80
  },
  FRESH_CONFEDERATE_BRIGADE,
  { ... FRESH_CONFEDERATE_BRIGADE,
    name: "Tired Confederate Brigade",
    energy: 50,
  },
  { ... FRESH_CONFEDERATE_BRIGADE,
    name: "Battered Confederate Brigade",
    strength: CONFEDERATE_BRIGADE_SIZE * 0.7,
    energy: 80
  },
];
