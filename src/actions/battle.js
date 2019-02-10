export const REST = 'REST';
export const MOVE = 'MOVE';
export const CHARGE = 'CHARGE';
export const FIRE = 'FIRE';
export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const CREATE_BATTLE = 'CREATE_BATTLE';
export const SET_ACTIVE_BATTLE = 'SET_ACTIVE_BATTLE';
export const REMOVE_BATTLE = 'REMOVE_BATTLE';

export const rest = () => {
  return {
    type: REST
  };
};

export const move = (situation) => {
  return {
    type: MOVE,
    situation
  };
};

export const charge = (situation) => {
  return {
    type: CHARGE,
    situation
  };
};

export const fire = (situation) => {
  return {
    type: FIRE,
    situation
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

export const createBattle = (battleStats) => {
  return {
    type: CREATE_BATTLE,
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
