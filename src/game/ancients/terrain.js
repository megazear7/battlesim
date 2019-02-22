export const ANCIENTS_TERRAIN = [
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
  {
    name: "Rough Hill",
    descripton: "A hill that is difficult to manuever on.",
    movePenalty: 40,
    areaTerrain: true,
    defendable: false,
    melee: {
      armor: 0,
      volumeMod: 0.7,
    },
    ranged: {
      armor: 0,
      volumeMod: 0.4,
    },
  },
];
