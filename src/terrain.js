export const SLOPE_UP = "SLOPE_UP";
export const SLOPE_DOWN = "SLOPE_DOWN";
export const SLOPE_NONE = "SLOPE_NONE";
export const MAX_TERRAIN = 100;
export const CIVIL_WAR_TERRAIN = [
  {
    name: "Cornfield",
    descripton: "A high cornfield that only provide slight cover from enemy fire but also signicantly impedes movement.",
    melee: {
      armor: 0,
      volumeMod: 0.2,
    },
    ranged: {
      armor: 20,
      volumeMod: 0,
    },
    movePenalty: 20,
  },
  {
    name: "Wooden fence",
    descripton: "A wooden fence which provides some cover and is also fairly easy to cross over.",
    movePenalty: 10,
    melee: {
      armor: 10,
      volumeMod: 0.1,
    },
    ranged: {
      armor: 100,
      volumeMod: 0,
    },
  },
  {
    name: "Stone wall",
    descripton: "A thick stone wall which provide amazing cover from enemy fire and is not very difficult to climb over.",
    movePenalty: 10,
    melee: {
      armor: 20,
      volumeMod: 0.3,
    },
    ranged: {
      armor: 130,
      volumeMod: 0,
    },
  },
  {
    name: "Forest",
    descripton: "A thick grove of tree's that provide excelent cover but also are quite difficult to march through.",
    movePenalty: 30,
    melee: {
      armor: 0,
      volumeMod: 0.6,
    },
    ranged: {
      armor: 0,
      volumeMod: 0.7,
    },
  },
];
