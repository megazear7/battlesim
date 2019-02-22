import { ANCIENTS_UNITS_ID } from '../units.js';
import { ANCIENTS_TERRAIN_ID } from '../terrain.js';
import {
  STAT_PERCENTAGE,
  STAT_DESCRIPTION,
  STRENGTH_MESSAGE_DESCRIPTIVE,
  CASUALTY_MESSAGE_DESCRIPTIVE,
  ACTION_TYPE_UNIT,
  ACTION_TYPE_ARMY,
  NO_PLAYER_TURNS } from '../../game.js';
import { msSinceMidnight, SECONDS_IN_AN_HOUR } from '../../math-utils.js';

export const BATTLE_TEMPLATES = [
  {
    name: "Point Based Ancient Warfare",
    ruleset: 1,
    second: 0,
    startTime: Date.parse('11 May 245 11:30:00 EST'),
    events: [ ],
    terrain: ANCIENTS_TERRAIN_ID,
    deadliness: 1,
    turnDuration: SECONDS_IN_AN_HOUR,
    playerTurnDuration: NO_PLAYER_TURNS,
    strengthReporting: 10,
    casualtyReporting: 1,
    statReporting: STAT_PERCENTAGE,
    usesPoints: true,
    activeArmy: 0,
    actionLog: [ ],
    activeAction: {
      type: ACTION_TYPE_UNIT,
      index: 0,
    },
    turnStarted: 0,
    armies: [
      {
        name: "Army 1",
        armyActionTitle: "Army 1 Actions.",
        armyActionDesc: "Generals and commanders can move 12 inches. Supply wagons can move 8 inches.",
        nextAction: 0,
        leaders: [
          {
            shortname: "General",
            name: "General",
            leadership: 100,
          }
        ]
      },
      {
        name: "Army 2",
        armyActionTitle: "Army 2 Actions.",
        armyActionDesc: "Generals and commanders can move 12 inches. Supply wagons can move 8 inches.",
        nextAction: 0,
        leaders: [
          {
            shortname: "General",
            name: "General",
            leadership: 100,
          },
        ]
      },
    ],
    units: [ ],
    unitTemplates: ANCIENTS_UNITS_ID,
    rules: [
      {
        heading: 'Create Your Army.',
        text: 'Create your army on the battle page. Each unit will cost a certain number of points.'
      },
      {
        heading: 'Setup',
        text: 'Currently there are no setup instructions for this battle. Setup the terrain and units however you would like or try to base it off of the actual battle.'
      },
    ]
  },
];
