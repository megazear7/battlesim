export const REST = 'REST';
export const MOVE = 'MOVE';

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
