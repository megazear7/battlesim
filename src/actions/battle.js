export const REST = 'REST';
export const MOVE = 'MOVE';
export const CHARGE = 'CHARGE';

export const rest = () => {
  return {
    type: REST
  };
};

export const move = (distance) => {
  return {
    type: MOVE,
    distance
  };
};

export const charge = (distance) => {
  return {
    type: CHARGE,
    distance
  };
};
