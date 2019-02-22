import { WEAPONS as CIVIL_WAR_WEAPONS } from './civil-war/weapons.js'
import { WEAPONS as ANCIENTS_WEAPONS } from './ancients/weapons.js'

const WEAPONS = {
  ...CIVIL_WAR_WEAPONS,
  ...ANCIENTS_WEAPONS,
};

export default WEAPONS;
