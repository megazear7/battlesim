export const CIVIL_WAR_TERRAIN = [
  {
    name: "Cornfield",
    descripton: "A high cornfield that only provide slight cover from enemy fire but also signicantly impedes movement.",
    movePenalty: 20,
    areaTerrain: true,
    defendable: false,
    melee: {
      armor: 0,
      volumeMod: 0.2,
    },
    ranged: {
      armor: 20,
      volumeMod: 0,
    },
  },
  {
    name: "Wooden fence",
    descripton: "A wooden fence which provides some cover and is also fairly easy to cross over.",
    movePenalty: 10,
    areaTerrain: false,
    defendable: true,
    melee: {
      armor: 10,
      volumeMod: 0.1,
    },
    ranged: {
      armor: 150,
      volumeMod: 0,
    },
  },
  {
    name: "Stone wall",
    descripton: "A thick stone wall which provide amazing cover from enemy fire and is not very difficult to climb over.",
    movePenalty: 10,
    areaTerrain: false,
    defendable: true,
    melee: {
      armor: 20,
      volumeMod: 0.3,
    },
    ranged: {
      armor: 300,
      volumeMod: 0,
    },
  },
  {
    name: "Forest",
    descripton: "A thick grove of tree's that provide excelent cover but also are quite difficult to march through.",
    movePenalty: 30,
    areaTerrain: true,
    defendable: false,
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
