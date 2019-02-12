import BATTLE_TEMPLATES from '../battle-templates.js';
import {
  REST,
  CHARGE,
  MOVE,
  FIRE,
  ADD,
  REMOVE,
  CREATE_NEW_BATTLE,
  SET_ACTIVE_BATTLE,
  REMOVE_BATTLE
} from '../actions/battle.js';

const INITIAL_STATE = {
  activeBattle: 0,
  battles: [ { ...BATTLE_TEMPLATES[0] } ],
};

let initialState = JSON.parse(localStorage.getItem("battle"));

if (! initialState) {
  initialState = INITIAL_STATE;
  initialState.battles[0].createdAt = new Date().getTime();
}

const battle = (state = initialState, action) => {
  var newState = { ...state };
  if (newState.battles.length-1 <= newState.activeBattle) {
    var activeBattle = newState.battles[newState.activeBattle];
  }
  if (activeBattle && action.type === REST) {
    var oldActiveUnit = activeBattle.activeUnit;
    var newActiveUnit = oldActiveUnit >= activeBattle.units.length - 1 ? 0 : oldActiveUnit + 1;
    // TODO use action.update
    activeBattle.activeUnit = newActiveUnit;
    activeBattle.units[oldActiveUnit].energy += 10;
  } else if (activeBattle && action.type === MOVE) {
    var oldActiveUnit = activeBattle.activeUnit;
    var newActiveUnit = oldActiveUnit >= activeBattle.units.length - 1 ? 0 : oldActiveUnit + 1;
    activeBattle.activeUnit = newActiveUnit;

    action.updates.forEach(update => {
      let unit = activeBattle.units[update.id];
      update.changes.forEach(change => {
        unit[change.prop] = change.value;
      });
    });
  } else if (activeBattle && action.type === CHARGE) {
    var oldActiveUnit = activeBattle.activeUnit;
    var newActiveUnit = oldActiveUnit >= activeBattle.units.length - 1 ? 0 : oldActiveUnit + 1;
    // TODO use action.update
    activeBattle.activeUnit = newActiveUnit;
    activeBattle.units[oldActiveUnit].energy -= action.situation.distance * 2;
  } else if (activeBattle && action.type === FIRE) {
    var oldActiveUnit = activeBattle.activeUnit;
    var newActiveUnit = oldActiveUnit >= activeBattle.units.length - 1 ? 0 : oldActiveUnit + 1;
    // TODO use action.update
    activeBattle.activeUnit = newActiveUnit;
    activeBattle.units[oldActiveUnit].energy -= 10;
  } else if (activeBattle && action.type === ADD) {
    let newUnit = activeBattle.unitTemplates[action.unitTemplate];
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

export default battle;
