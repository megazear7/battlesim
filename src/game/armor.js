import { ARMOR as CIVIL_WAR_ARMOR } from './civil-war/armor.js'
import { ARMOR as ANCIENTS_ARMOR } from './ancients/armor.js'

const ARMOR = {
  ...CIVIL_WAR_ARMOR,
  ...ANCIENTS_ARMOR,
};

export default ARMOR;
