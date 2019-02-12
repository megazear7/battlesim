export const REST = 'REST';
export const MOVE = 'MOVE';
export const CHARGE = 'CHARGE';
export const FIRE = 'FIRE';
export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const CREATE_NEW_BATTLE = 'CREATE_NEW_BATTLE';
export const SET_ACTIVE_BATTLE = 'SET_ACTIVE_BATTLE';
export const REMOVE_BATTLE = 'REMOVE_BATTLE';

export const rest = (updates) => {
  return {
    type: REST,
    updates
  };
};

export const move = (updates) => {
  return {
    type: MOVE,
    updates
  };
};

export const charge = (updates) => {
  return {
    type: CHARGE,
    updates
  };
};

export const fire = (updates) => {
  return {
    type: FIRE,
    updates
  };
};

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
