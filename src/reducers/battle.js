import BATTLE_TEMPLATES from '../game/battle-templates.js';
import UNITS from '../game/units.js';
import {
  SECONDS_PER_TURN,
  ACTION_TYPE_UNIT,
  ACTION_TYPE_ARMY,
  ACTION_TYPE_EVENT,
  NO_PLAYER_TURNS } from '../game.js';
import {
  TAKE_ACTION,
  UPDATE_MESSAGE,
  TAKE_ARMY_ACTION,
  FINISH_EVENT,
  ADD,
  REMOVE,
  CREATE_NEW_BATTLE,
  SET_ACTIVE_BATTLE,
  REMOVE_BATTLE,
  ADD_SHARED_BATTLE,
  PLAY_ARMY,
  REMOVE_SHARED_BATTLE,
  UPDATE_DISPLAY_NAME,
} from '../actions/battle.js';
import { LOCAL_BATTLE, SHARED_BATTLE } from '../game.js';
import Battle from '../models/battle.js';
import ActiveBattleStorage from '../models/active-battle-storage.js';
import BattleStorage from '../models/battle-storage.js';
import BattleDeviceStorage from '../models/battle-device-storage.js';
import SharedBattleStorage from '../models/shared-battle-storage.js';

const initialState = {
  activeBattle: ActiveBattleStorage.get,
  battles: BattleStorage.get,
  sharedBattles: { },
  battlesimDevice: BattleDeviceStorage.get,
};

const battle = (state = initialState, action) => {
  var newState = { ...state };
  let activeBattle;
  if (newState.activeBattle.id < newState.battles.length) {
    activeBattle = newState.battles[newState.activeBattle.id];
  } else if (Object.keys(newState.sharedBattles).indexOf(newState.activeBattle.id) >= 0) {
    activeBattle = newState.sharedBattles[newState.activeBattle.id];
  }
  if (activeBattle && action.type === TAKE_ACTION) {
    let actionLog = {
      time: activeBattle.second,
      message: action.message,
      environment: action.environment,
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
    activeBattle.messages = [ ];
    activeBattle.actionLog.push(actionLog);
    updateTime(activeBattle);
  } else if (activeBattle && action.type === UPDATE_MESSAGE) {
    activeBattle.messages = action.messages;
  } else if (activeBattle && action.type === TAKE_ARMY_ACTION && activeBattle.activeAction.type === ACTION_TYPE_ARMY) {
    activeBattle.armies[activeBattle.activeAction.index].nextAction += SECONDS_PER_TURN;
    updateTime(activeBattle);
  } else if (activeBattle && action.type === FINISH_EVENT && activeBattle.activeAction.type === ACTION_TYPE_EVENT) {
    let activeEvent = activeBattle.events[activeBattle.activeAction.index];
    let proceedClock = activeEvent.proceedClock ? activeEvent.proceedClock : 0;
    activeBattle.armies.forEach(army => army.nextAction += proceedClock);
    activeBattle.units.forEach(unit => unit.nextAction += proceedClock);
    activeBattle.second += proceedClock;
    activeEvent.time = undefined;
    updateTime(activeBattle);
  } else if (activeBattle && action.type === ADD) {
    let newUnit = { ...UNITS[activeBattle.unitTemplates][action.unitTemplate] };
    newUnit.nextAction = activeBattle.second + 1;
    if (action.name) {
      newUnit.name = action.name;
    }
    activeBattle.units.push(newUnit);
  } else if (activeBattle && action.type === REMOVE) {
    activeBattle.units.splice(action.index, 1);
  } else if (action.type === PLAY_ARMY) {
    let sharedBattle = newState.sharedBattles[action.battleId];
    if (sharedBattle) {
      let deviceId = BattleDeviceStorage.id;
      sharedBattle.connectedDevices.find(device => device.id === deviceId).army = action.army
      sharedBattle.playingArmy = action.army;
    }
  } else if (action.type === CREATE_NEW_BATTLE) {
    let newBattle = {
      ...BATTLE_TEMPLATES[action.battleStats.templateIndex],
      createdAt: new Date().getTime()
    };
    if (action.battleStats.name) {
      newBattle.name = action.battleStats.name;
    }
    if (action.battleStats.army1Name) {
      newBattle.armies[0].name = action.battleStats.army1Name;
    }
    if (action.battleStats.army2Name) {
      newBattle.armies[1].name = action.battleStats.army2Name;
    }
    if (action.battleStats.statType) {
      newBattle.statReporting = action.battleStats.statType;
    }
    newBattle.units.forEach(unit => {
      unit.nextAction = Math.random() * SECONDS_PER_TURN;
    });
    newBattle.armies.forEach(army => {
      army.nextAction = Math.random() * SECONDS_PER_TURN;
    });

    updateTime(newBattle);

    newState.battles.push(newBattle);
    newState.activeBattle = {
      type: LOCAL_BATTLE,
      id: newState.battles.length - 1
    };
  } else if (action.type === ADD_SHARED_BATTLE) {
    newState.sharedBattles[action.id] = action.battleStats;
  } else if (action.type === REMOVE_BATTLE) {
    newState.battles.splice(action.index, 1);
    if (newState.activeBattle.type === LOCAL_BATTLE) {
      if (newState.activeBattle.id >= action.index) {
        newState.activeBattle.id -= 1;
      }
      if (newState.activeBattle.id < 0) {
        newState.activeBattle = { };
      }
    }
  } else if (action.type === REMOVE_SHARED_BATTLE) {

    let deviceId = BattleDeviceStorage.id;
    if (deviceId) {
      let connectedDevices = newState.sharedBattles[action.id].connectedDevices
      .filter(device => device.id !== deviceId);

      firebase.firestore().collection('apps/battlesim/battles')
      .doc(action.id)
      .update({'battle.connectedDevices': connectedDevices});
    }

    delete newState.sharedBattles[action.id];
    newState.activeBattle = { };
    SharedBattleStorage.removeById(action.id);
  } else if (action.type === SET_ACTIVE_BATTLE) {
    newState.activeBattle = action.activeBattle;
  } else if (action.type === UPDATE_DISPLAY_NAME) {
    newState.battlesimDevice.displayName = action.displayName;
    BattleDeviceStorage.displayName = action.displayName;

    Object.keys(newState.sharedBattles).forEach(battleId => addDevice(state.sharedBattles[battleId], battleId, BattleDeviceStorage.get));
  }

  if (activeBattle && newState.activeBattle.type === SHARED_BATTLE && action.type !== ADD_SHARED_BATTLE && action.type !== SET_ACTIVE_BATTLE) {
    firebase.firestore().collection('apps/battlesim/battles')
    .doc(newState.activeBattle.id)
    .set({ battle: JSON.parse(JSON.stringify(activeBattle)) }); // The stringify / parse gets rid of undefined attributes which firestore will complain about.
  }

  BattleStorage.set = newState.battles;
  ActiveBattleStorage.set = newState.activeBattle;
  return newState
};

export function addDevice(battle, battleId, battlsimDevice) {
  firebase.firestore().collection('apps/battlesim/battles')
  .doc(battleId)
  .get()
  .then(docSnapshot => {
    let connectedDevices = docSnapshot.get('battle.connectedDevices') || [ ];

    addDeviceToList(connectedDevices, battlsimDevice);

    battle.connectedDevices = connectedDevices;
    firebase.firestore().collection('apps/battlesim/battles')
    .doc(battleId)
    .update({'battle.connectedDevices': connectedDevices});
  });
}

export function addDeviceToList(connectedDevices = [], battlsimDevice) {
  if (battlsimDevice.displayName) {
    let foundDevice = connectedDevices.find(device => device.id === battlsimDevice.id);
    if (foundDevice) {
      foundDevice.displayName = battlsimDevice.displayName;
    } else {
      connectedDevices.push(battlsimDevice);
    }
  } else {
    connectedDevices = connectedDevices.filter(device => device.id !== battlsimDevice.id);
  }

  return connectedDevices;
}

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
  var battleModel = new Battle(battle);
  var nextTime = Number.MAX_SAFE_INTEGER;
  var nextAction;
  battleModel.unitModels.forEach((unit, index) => {
    if ((battle.playerTurnDuration === NO_PLAYER_TURNS || unit.army === battle.activeArmy) &&
        unit.nextAction < nextTime && unit.isNotEliminated) {
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
  battle.events.forEach((event, index) => {
    if (event.time < nextTime) {
      nextTime = event.time;
      nextAction = {
        type: ACTION_TYPE_EVENT,
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
