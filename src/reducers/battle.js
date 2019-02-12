import BATTLE_TEMPLATES from '../battle-templates.js';
import { SECONDS_IN_AN_HOUR } from '../math-utils.js';
import {
  TAKE_ACTION,
  ADD,
  REMOVE,
  CREATE_NEW_BATTLE,
  SET_ACTIVE_BATTLE,
  REMOVE_BATTLE
} from '../actions/battle.js';

const INITIAL_STATE = {
  activeBattle: 0,
  battles: [ ],
};

let initialState = JSON.parse(localStorage.getItem("battle"));
if (! initialState) {
  initialState = INITIAL_STATE;
}

const battle = (state = initialState, action) => {
  var newState = { ...state };
  if (newState.battles.length-1 <= newState.activeBattle) {
    var activeBattle = newState.battles[newState.activeBattle];
  }
  if (activeBattle && action.type === TAKE_ACTION) {
    action.updates.forEach(update => {
      let unit = activeBattle.units[update.id];
      update.changes.forEach(change => {
        unit[change.prop] = change.value;
      });
    });

    updateTime(activeBattle);
  } else if (activeBattle && action.type === ADD) {
    let newUnit = activeBattle.unitTemplates[action.unitTemplate];
    newUnit.nextAction = activeBattle.second + 1;
    if (action.name) {
      newUnit.name = action.name;
    }
    activeBattle.units.push(newUnit);
  } else if (activeBattle && action.type === REMOVE) {
    activeBattle.units.splice(action.index, 1);
  } else if (action.type === CREATE_NEW_BATTLE) {
    let newBattle = {
      ...BATTLE_TEMPLATES[action.battleStats.templateIndex],
      createdAt: new Date().getTime()
    };
    if (action.battleStats.name) {
      newBattle.name = action.battleStats.name;
    }
    newBattle.units.forEach(unit => {
      unit.nextAction = Math.random() * SECONDS_IN_AN_HOUR;
    });

    updateTime(newBattle);

    newState.battles.push(newBattle);
    newState.activeBattle = newState.battles.length - 1;
  } else if (action.type === REMOVE_BATTLE) {
    newState.battles.splice(action.index, 1);
    if (newState.activeBattle >= action.index) {
      newState.activeBattle -= 1;
    }
    if (newState.activeBattle < 0) {
      newState.activeBattle = 0;
    }
  } else if (action.type === SET_ACTIVE_BATTLE) {
    newState.activeBattle = action.index;
  }

  localStorage.setItem("battle", JSON.stringify(newState));
  return newState
};

function updateTime(battle) {
  let next = nextUnit(battle);

  if (battle.units[next].nextAction > battle.turnStarted + SECONDS_IN_AN_HOUR) {
    if (battle.activeArmy === 0) {
      battle.activeArmy = 1;
    } else {
      battle.activeArmy = 0;
    }

    next = nextUnit(battle);
    battle.turnStarted = battle.units[next].nextAction;
  }

  battle.second = battle.units[next].nextAction;
  battle.activeUnit = next;
}

function nextUnit(battle) {
  var minTime = Number.MAX_SAFE_INTEGER;
  var next;
  battle.units.forEach((unit, index) => {
    if (unit.army === battle.activeArmy && unit.nextAction < minTime) {
      minTime = unit.nextAction;
      next = index;
    }
  });
  return next;
}

export default battle;
