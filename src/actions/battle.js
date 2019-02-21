export const TAKE_ACTION = 'TAKE_ACTION';
export const TAKE_ARMY_ACTION = 'TAKE_ARMY_ACTION';
export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const CREATE_NEW_BATTLE = 'CREATE_NEW_BATTLE';
export const SET_ACTIVE_BATTLE = 'SET_ACTIVE_BATTLE';
export const REMOVE_BATTLE = 'REMOVE_BATTLE';

export const takeAction = (updates, message, environment) => {
  return {
    type: TAKE_ACTION,
    updates,
    message,
    environment
  };
};

export const takeArmyAction = () => {
  return {
    type: TAKE_ARMY_ACTION,
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

export const setActiveBattle = (index) => {
  return {
    type: SET_ACTIVE_BATTLE,
    index,
  };
};

export const removeBattle = (index) => {
  return {
    type: REMOVE_BATTLE,
    index,
  };
};
