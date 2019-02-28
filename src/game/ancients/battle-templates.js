import { ANCIENTS_UNITS_ID } from '../units.js';
import { ANCIENTS_TERRAIN_ID } from '../terrain.js';
import { ANCIENTS_RULES_ID } from '../rules.js';
import {
  STAT_PERCENTAGE,
  STAT_DESCRIPTION,
  STRENGTH_MESSAGE_DESCRIPTIVE,
  CASUALTY_MESSAGE_DESCRIPTIVE,
  ACTION_TYPE_UNIT,
  ACTION_TYPE_ARMY,
  NO_PLAYER_TURNS } from '../../game.js';
import { msSinceMidnight, SECONDS_IN_AN_HOUR } from '../../utils/math-utils.js';
import { ANCIENTS_GENERIC_SCENARIO } from './scenarios.js';

export default {
  'ANCIENTS_POINT_BASED': {
    name: "Point Based Ancient Warfare",
    ruleset: ANCIENTS_RULES_ID,
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
        armyActionTitle: "Army 1 Actions",
        messages: [
          "Generals and commanders can move 12 inches. Supply wagons can move 8 inches."
        ],
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
        armyActionTitle: "Army 2 Actions",
        messages: [
          "Generals and commanders can move 12 inches. Supply wagons can move 8 inches.",
        ],
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
    rules: ANCIENTS_GENERIC_SCENARIO
  },
};
