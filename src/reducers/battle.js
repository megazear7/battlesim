import BATTLE_TEMPLATES from '../battle-templates.js';
import {
  SECONDS_PER_TURN,
  ACTION_TYPE_UNIT,
  ACTION_TYPE_ARMY,
  NO_PLAYER_TURNS } from '../game.js';
import {
  TAKE_ACTION,
  TAKE_ARMY_ACTION,
  ADD,
  REMOVE,
  CREATE_NEW_BATTLE,
  SET_ACTIVE_BATTLE,
  REMOVE_BATTLE,
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
    let actionLog = {
      message: action.message,
      updates: action.updates,
      units: [ ],
    };
    action.updates.forEach(update => {
      let unit = activeBattle.units[update.id];
      let unitBefore = { ...unit };

      update.changes.forEach(change => {
        unit[change.prop] = change.value;
      });

      actionLog.units.push({
        before:{...unitBefore},
        after: {...unit}
      });
    });
    activeBattle.actionLog.push(actionLog);
    updateTime(activeBattle);
  } else if (activeBattle && action.type === TAKE_ARMY_ACTION && activeBattle.activeAction.type === ACTION_TYPE_ARMY) {
    activeBattle.armies[activeBattle.activeAction.index].nextAction += SECONDS_PER_TURN;
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
      unit.nextAction = Math.random() * SECONDS_PER_TURN;
    });
    newBattle.armies.forEach(army => {
      army.nextAction = Math.random() * SECONDS_PER_TURN;
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
  let next = nextAction(battle);

  if (battle.playerTurnDuration !== NO_PLAYER_TURNS && battle.units[next].nextAction > battle.turnStarted + battle.playerTurnDuration) {
    if (battle.activeArmy === 0) {
      battle.activeArmy = 1;
    } else {
      battle.activeArmy = 0;
    }

    next = nextAction(battle);
    battle.turnStarted = next.action;
  }

  battle.second = next.time;
  battle.activeAction = next.action;
}

function nextAction(battle) {
  var nextTime = Number.MAX_SAFE_INTEGER;
  var nextAction;
  battle.units.forEach((unit, index) => {
    if ((battle.playerTurnDuration === NO_PLAYER_TURNS || unit.army === battle.activeArmy) &&
        unit.nextAction < nextTime &&
        unit.strength > 0 &&
        unit.morale > 0) {
      nextTime = unit.nextAction;
      nextAction = {
        type: ACTION_TYPE_UNIT,
        index: index,
      };
    }
  });
  battle.armies.forEach((army, index) => {
    if ((battle.playerTurnDuration === NO_PLAYER_TURNS || index === battle.activeArmy) && army.nextAction < nextTime) {
      nextTime = army.nextAction;
      nextAction = {
        type: ACTION_TYPE_ARMY,
        index: index,
      };
    }
  });
  return {
    action: nextAction,
    time: nextTime,
  };
}

export default battle;
