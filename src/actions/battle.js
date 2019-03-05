export const TAKE_ACTION = 'TAKE_ACTION';
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const TAKE_ARMY_ACTION = 'TAKE_ARMY_ACTION';
export const FINISH_EVENT = 'FINISH_EVENT';
export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const CREATE_NEW_BATTLE = 'CREATE_NEW_BATTLE';
export const ADD_SHARED_BATTLE = 'ADD_SHARED_BATTLE';
export const SET_ACTIVE_BATTLE = 'SET_ACTIVE_BATTLE';
export const REMOVE_BATTLE = 'REMOVE_BATTLE';
export const PLAY_ARMY = 'PLAY_ARMY';

export const takeAction = (updates, message, environment) => {
  return {
    type: TAKE_ACTION,
    updates,
    message,
    environment
  };
};

export const updateMessage = (messages) => {
  return {
    type: UPDATE_MESSAGE,
    messages,
  };
};

export const takeArmyAction = () => {
  return {
    type: TAKE_ARMY_ACTION,
  };
}

export const finishEvent = () => {
  return {
    type: FINISH_EVENT,
  };
}

export const add = (unitTemplate, name) => {
  return {
    type: ADD,
    unitTemplate,
    name
  };
};

export const remove = (index) => {
  return {
    type: REMOVE,
    index
  };
};

export const createNewBattle = (battleStats) => {
  return {
    type: CREATE_NEW_BATTLE,
    battleStats
  };
};

export const addSharedBattle = (id, battleStats) => {
  return {
    type: ADD_SHARED_BATTLE,
    id,
    battleStats,
  };
};

export const setActiveBattle = (activeBattle) => {
  return {
    type: SET_ACTIVE_BATTLE,
    activeBattle,
  };
};

export const removeBattle = (index) => {
  return {
    type: REMOVE_BATTLE,
    index,
  };
};

export const playArmy = (battleId, army) => {
  return {
    type: PLAY_ARMY,
    army,
    battleId,
  };
};
