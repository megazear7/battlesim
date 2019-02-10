export const REST = 'REST';
export const MOVE = 'MOVE';
export const CHARGE = 'CHARGE';
export const FIRE = 'FIRE';
export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const CREATE_BATTLE = 'CREATE_BATTLE';

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

export const add = (stats) => {
  return {
    type: ADD,
    stats
  };
};

export const remove = (index) => {
  return {
    type: REMOVE,
    index
  };
};

export const createBattle = (name, templateIndex) => {
  return {
    type: CREATE_BATTLE,
    name,
    templateIndex
  };
};
