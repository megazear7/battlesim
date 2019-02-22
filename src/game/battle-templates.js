import { BATTLE_TEMPLATES as CIVIL_WAR_BATTLE_TEMPLATES } from './civil-war/battle-templates.js'
import { BATTLE_TEMPLATES as ANCIENTS_BATTLE_TEMPLATES } from './ancients/battle-templates.js'

const BATTLE_TEMPLATES = [
  ...CIVIL_WAR_BATTLE_TEMPLATES,
  ...ANCIENTS_BATTLE_TEMPLATES,
];

export default BATTLE_TEMPLATES;
