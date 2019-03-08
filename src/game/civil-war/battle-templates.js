import { CIVIL_WAR_UNITS_ID } from '../units.js';
import { CIVIL_WAR_RULES_ID } from '../rules.js';
import {
  FRESH_UNION_REGIMENT,
  FRESH_UNION_CAVALRY_REGIMENT,
  FRESH_UNION_ARTILLERY,
  FRESH_CONFEDERATE_REGIMENT,
  FRESH_CONFEDERATE_CAVALRY_REGIMENT,
  FRESH_CONFEDERATE_ARTILLERY } from './units.js';
import {
  CANNON_6_POUNDER_CIVIL_WAR,
  CANNON_12_POUNDER_CIVIL_WAR } from './weapons.js';
import { CIVIL_WAR_TERRAIN_ID } from '../terrain.js';
import {
  STAT_PERCENTAGE,
  STAT_DESCRIPTION,
  STRENGTH_MESSAGE_DESCRIPTIVE,
  CASUALTY_MESSAGE_DESCRIPTIVE,
  ACTION_TYPE_UNIT,
  ACTION_TYPE_ARMY,
  NO_PLAYER_TURNS } from '../../game.js';
import { msSinceMidnight, SECONDS_IN_AN_HOUR } from '../../utils/math-utils.js';
import { CIVIL_WAR_BULL_RUN_SCENARIO, CIVIL_WAR_GENERIC_SCENARIO } from './scenarios.js';

export default {
  'CIVIL_WAR_BULL_RUN_BATTLE': {
    name: "Bull Run",
    ruleset: CIVIL_WAR_RULES_ID,
    second: 0,
    startTime: Date.parse('11 May 1862 11:30:00 EST'),
    events: [
      {
        time: msSinceMidnight(new Date(Date.parse('11 May 1862 20:36:00 EST'))),
        title: 'Sun Set',
        descripton: 'The sun has set. It might be clear as to which army won the battle. If it is not then you may proceed to the next morning and continue the engagment. Each unit withdraws at least 6 inches and at most 18 inches.',
        provideArmyOverview: true,
        proceedClock: 10000,
      }
    ],
    terrain: CIVIL_WAR_TERRAIN_ID,
    deadliness: 1,
    turnDuration: SECONDS_IN_AN_HOUR,
    playerTurnDuration: NO_PLAYER_TURNS,
    strengthReporting: STRENGTH_MESSAGE_DESCRIPTIVE,
    casualtyReporting: CASUALTY_MESSAGE_DESCRIPTIVE,
    statReporting: STAT_DESCRIPTION,
    usesPoints: false,
    activeArmy: 0,
    actionLog: [ ],
    activeAction: {
      type: ACTION_TYPE_UNIT,
      index: 0,
    },
    turnStarted: 0,
    armies: [
      {
        name: "Union",
        armyActionTitle: "Union Army Actions",
        messages: [
          "Generals and commanders can move 12 inches. Supply wagons can move 8 inches.",
        ],
        nextAction: 0,
        leaders: [],
      },
      {
        name: "Confederate",
        armyActionTitle: "Confederate Army Actions",
        messages: [
          "Generals and commanders can move 12 inches. Supply wagons can move 8 inches.",
        ],
        nextAction: 0,
        leaders: [],
      },
    ],
    units: [
      { ...FRESH_UNION_REGIMENT,
        name: "Tyler's 1st Regiment",
        strength: 1000,
        fullStrength: 2600,
        stands: 8,
        experience: 68,
        leadership: 37,
        energy: 84,
        morale: 99,
      },
      { ...FRESH_UNION_REGIMENT,
        name: "Tyler's 2nd Regiment",
        strength: 1000,
        fullStrength: 3103,
        stands: 8,
        experience: 34,
        leadership: 68,
        energy: 86,
        morale: 85,
      },
      { ...FRESH_UNION_REGIMENT,
        name: "Tyler's 3rd Regiment",
        strength: 1000,
        fullStrength: 3000,
        stands: 8,
        experience: 51,
        leadership: 52,
        energy: 86,
        morale: 90,
      },
      { ...FRESH_UNION_REGIMENT,
        name: "Hunter's Regiment",
        strength: 1000,
        fullStrength: 2500,
        stands: 6,
        experience: 20,
        leadership: 43,
        energy: 80,
        morale: 80,
      },
      { ...FRESH_UNION_REGIMENT,
        name: "Franklin's Regiment",
        strength: 1000,
        fullStrength: 2500,
        stands: 6,
        experience: 65,
        leadership: 92,
        energy: 85,
        morale: 91,
      },
      { ...FRESH_UNION_REGIMENT,
        name: "Cadwalader's Regiment",
        strength: 1000,
        fullStrength: 3003,
        stands: 8,
        experience: 42,
        leadership: 73,
        energy: 90,
        morale: 91,
      },
      { ...FRESH_UNION_CAVALRY_REGIMENT,
        name: "Porter's Cavalry",
        strength: 500,
        fullStrength: 300,
        stands: 4,
        experience: 75,
        leadership: 62,
        energy: 87,
        morale: 85,
      },
      { ...FRESH_UNION_ARTILLERY,
        name: "Howard's Battery",
        fullStrength: 48,
        rangedWeapon: CANNON_12_POUNDER_CIVIL_WAR,
        stands: 3,
        experience: 61,
        leadership: 52,
        energy: 95,
        morale: 95,
      },
      { ...FRESH_UNION_ARTILLERY,
        name: "Blenker's Battery",
        fullStrength: 63,
        rangedWeapon: CANNON_6_POUNDER_CIVIL_WAR,
        stands: 4,
        experience: 47,
        leadership: 61,
        energy: 87,
        morale: 90,
      },
      { ...FRESH_CONFEDERATE_REGIMENT,
        name: "1st Potomac Regiment",
        strength: 1000,
        fullStrength: 4070,
        stands: 8,
        experience: 65,
        leadership: 62,
        energy: 97,
        morale: 95,
      },
      { ...FRESH_CONFEDERATE_REGIMENT,
        name: "2nd Potomac Regiment",
        strength: 1000,
        fullStrength: 2500,
        stands: 6,
        experience: 52,
        leadership: 42,
        energy: 97,
        morale: 85,
      },
      { ...FRESH_CONFEDERATE_REGIMENT,
        name: "3rd Potomac Regiment",
        strength: 1000,
        fullStrength: 2000,
        stands: 6,
        experience: 48,
        leadership: 52,
        energy: 73,
        morale: 95,
      },
      { ...FRESH_CONFEDERATE_REGIMENT,
        name: "4th Potomac Regiment",
        strength: 1000,
        fullStrength: 2500,
        stands: 6,
        experience: 63,
        leadership: 62,
        energy: 79,
        morale: 95,
      },
      { ...FRESH_CONFEDERATE_REGIMENT,
        name: "1st Shenandoah Regiment",
        strength: 1000,
        fullStrength: 2100,
        stands: 6,
        experience: 55,
        leadership: 66,
        energy: 91,
        morale: 85,
      },
      { ...FRESH_CONFEDERATE_REGIMENT,
        name: "2nd Shenandoah Regiment",
        strength: 1000,
        fullStrength: 2500,
        stands: 6,
        experience: 83,
        leadership: 74,
        energy: 89,
        morale: 85,
      },
      { ...FRESH_CONFEDERATE_REGIMENT,
        name: "3rd Shenandoah Regiment",
        strength: 1000,
        fullStrength: 2700,
        stands: 6,
        experience: 51,
        leadership: 82,
        energy: 87,
        morale: 95,
      },
      { ...FRESH_CONFEDERATE_CAVALRY_REGIMENT,
        name: "Thirteenth Virginia (Cavalry)",
        strength: 500,
        fullStrength: 700,
        stands: 4,
        experience: 85,
        leadership: 67,
        energy: 87,
        morale: 92,
      },
      { ...FRESH_CONFEDERATE_CAVALRY_REGIMENT,
        name: "Harrison's Cavalry",
        strength: 500,
        fullStrength: 600,
        experience: 65,
        leadership: 82,
        energy: 89,
        morale: 99,
      },
      { ...FRESH_CONFEDERATE_REGIMENT,
        name: "Louisiana Artillery",
        strength: 20,
        fullStrength: 33,
        stands: 2,
        rangedWeapon: CANNON_6_POUNDER_CIVIL_WAR,
        experience: 65,
        leadership: 52,
        energy: 84,
        morale: 99,
      },
      { ...FRESH_CONFEDERATE_REGIMENT,
        name: "Kemper's Artillery",
        strength: 20,
        fullStrength: 18,
        stands: 2,
        rangedWeapon: CANNON_12_POUNDER_CIVIL_WAR,
        experience: 41,
        leadership: 52,
        energy: 92,
        morale: 99,
      },
    ],
    unitTemplates: CIVIL_WAR_UNITS_ID,
    rules: CIVIL_WAR_BULL_RUN_SCENARIO
  },
  'CIVIL_WAR_GENERIC_BATTLE': {
    name: "Generic Civil War",
    ruleset: CIVIL_WAR_RULES_ID,
    second: 0,
    startTime: Date.parse('20 June 1862 9:03:00 EST'),
    events: [
      {
        time: 1,
        title: 'Example Event',
        messages: [
          'Some example message. Here we could tell the players of the game to do a certain thing or whatever we want.',
          'Another message that says stuff. We also have the ability to add multiple paragraphs as you can see here. Lorem ipsum somet dolor so on and so on.'
        ],
        provideArmyOverview: true
      },
      {
        time: msSinceMidnight(new Date(Date.parse('20 June 1862 21:04:00 EST'))),
        title: 'Sun Set',
        descripton: 'The sun has set. It might be clear as to which army won the battle. If it is not then you may proceed to the next morning and continue the engagment. Each unit withdraws at least 6 inches and at most 18 inches.',
        provideArmyOverview: true,
        proceedClock: 10000,
      }
    ],
    terrain: CIVIL_WAR_TERRAIN_ID,
    deadliness: 1,
    turnDuration: SECONDS_IN_AN_HOUR,
    playerTurnDuration: NO_PLAYER_TURNS,
    strengthReporting: 1,
    casualtyReporting: 1,
    statReporting: STAT_PERCENTAGE,
    usesPoints: false,
    activeArmy: 0,
    actionLog: [ ],
    activeAction: {
      type: ACTION_TYPE_UNIT,
      index: 0,
    },
    turnStarted: 0,
    armies: [
      {
        name: "Union",
        armyActionTitle: "Union Army Actions",
        messages: [
          "Generals and commanders can move 12 inches. Supply wagons can move 8 inches.",
        ],
        nextAction: 0,
        leaders: [
          {
            shortname: "Tyler",
            name: "Colonel Daniel Tyler",
            leadership: 68,
          },
          {
            shortname: "Hunter",
            name: "Colonel David Hunter",
            leadership: 78,
          }
        ],
      },
      {
        name: "Confederate",
        armyActionTitle: "Confederate Army Actions",
        messages: [
          "Generals and commanders can move 12 inches. Supply wagons can move 8 inches.",
        ],
        nextAction: 0,
        leaders: [
          {
            shortname: "Beauregard",
            name: "Brigadier General Beauregard",
            leadership: 88,
          },
          {
            shortname: "Longstreet",
            name: "Brigadier General Longstreet",
            leadership: 95,
          }
        ],
      },
    ],
    units: [
      {
        ...FRESH_UNION_REGIMENT,
        name: "Tyler's 3rd Regiment",
      },
      {
        ...FRESH_CONFEDERATE_REGIMENT,
        name: "1st Potomac Regiment",
      },
    ],
    unitTemplates: CIVIL_WAR_UNITS_ID,
    rules: CIVIL_WAR_GENERIC_SCENARIO
  },
  'CIVIL_WAR_EXAMPLE_BATTLE': {
    name: "Example Civil War Battle",
    ruleset: CIVIL_WAR_RULES_ID,
    second: 0,
    startTime: Date.parse('11 May 1862 11:30:00 EST'),
    events: [
      {
        time: msSinceMidnight(new Date(Date.parse('11 May 1862 20:36:00 EST'))),
        title: 'Sun Set',
        descripton: 'The sun has set. It might be clear as to which army won the battle. If it is not then you may proceed to the next morning and continue the engagment. Each unit withdraws at least 6 inches and at most 18 inches.',
        provideArmyOverview: true,
        proceedClock: 10000, // TODO this needs to be the seconds between sunset and sunrise.
      }
    ],
    terrain: CIVIL_WAR_TERRAIN_ID,
    deadliness: 1,
    turnDuration: SECONDS_IN_AN_HOUR,
    playerTurnDuration: NO_PLAYER_TURNS,
    strengthReporting: 10,
    casualtyReporting: 1,
    statReporting: STAT_PERCENTAGE,
    usesPoints: false,
    activeArmy: 0,
    actionLog: [ ],
    activeAction: {
      type: ACTION_TYPE_UNIT,
      index: 0,
    },
    turnStarted: 0,
    armies: [
      {
        name: "Union",
        armyActionTitle: "Union Army Actions",
        messages: [
          "Generals and commanders can move 12 inches. Supply wagons can move 8 inches.",
        ],
        nextAction: 0,
        leaders: [
          {
            shortname: "McDowell",
            name: "Brigadier General Irvin McDowell",
            leadership: 80,
          },
          {
            shortname: "Tyler",
            name: "Colonel Daniel Tyler",
            leadership: 68,
          },
          {
            shortname: "Hunter",
            name: "Colonel David Hunter",
            leadership: 78,
          },
        ]
      },
      {
        name: "Confederate",
        armyActionTitle: "Confederate Army Actions",
        messages: [
          "Generals and commanders can move 12 inches. Supply wagons can move 8 inches.",
        ],
        nextAction: 0,
        leaders: [
          {
            shortname: "Beauregard",
            name: "Brigadier General Beauregard",
            leadership: 88,
          },
          {
            shortname: "Longstreet",
            name: "Brigadier General Longstreet",
            leadership: 95,
          },
          {
            shortname: "Bartow",
            name: "Colonel Bartow",
            leadership: 78,
          },
        ]
      },
    ],
    units: [
      { ...FRESH_UNION_REGIMENT,
        name: "Tyler's 1st Regiment",
        stands: 8,
        experience: 68,
        leadership: 37,
        energy: 84,
        morale: 99,
      },
      { ...FRESH_UNION_REGIMENT,
        name: "Tyler's 2nd Regiment",
        stands: 6,
        experience: 34,
        leadership: 68,
        energy: 86,
        morale: 85,
      },
      { ...FRESH_UNION_REGIMENT,
        name: "Tyler's 3rd Regiment",
        stands: 6,
        experience: 51,
        leadership: 52,
        energy: 86,
        morale: 90,
      },
      { ...FRESH_UNION_REGIMENT,
        name: "Hunter's 1st Regiment",
        stands: 6,
        experience: 20,
        leadership: 43,
        energy: 80,
        morale: 80,
      },
      { ...FRESH_UNION_REGIMENT,
        name: "Hunter's 2nd Regiment",
        stands: 4,
        experience: 65,
        leadership: 92,
        energy: 85,
        morale: 91,
      },
      { ...FRESH_UNION_REGIMENT,
        name: "Hunter's 3rd Regiment",
        stands: 6,
        experience: 42,
        leadership: 73,
        energy: 90,
        morale: 91,
      },
      { ...FRESH_UNION_ARTILLERY,
        name: "Howard's Battery",
        rangedWeapon: CANNON_12_POUNDER_CIVIL_WAR,
        stands: 2,
        experience: 61,
        leadership: 52,
        energy: 95,
        morale: 95,
      },
      { ...FRESH_CONFEDERATE_REGIMENT,
        name: "1st Potomac Regiment",
        stands: 8,
        experience: 65,
        leadership: 62,
        energy: 97,
        morale: 95,
      },
      { ...FRESH_CONFEDERATE_REGIMENT,
        name: "2nd Potomac Regiment",
        stands: 6,
        experience: 52,
        leadership: 42,
        energy: 97,
        morale: 85,
      },
      { ...FRESH_CONFEDERATE_REGIMENT,
        name: "3rd Potomac Regiment",
        stands: 6,
        experience: 48,
        leadership: 52,
        energy: 73,
        morale: 95,
      },
      { ...FRESH_CONFEDERATE_REGIMENT,
        name: "1st Shenandoah Regiment",
        stands: 5,
        experience: 55,
        leadership: 66,
        energy: 91,
        morale: 85,
      },
      { ...FRESH_CONFEDERATE_REGIMENT,
        name: "2nd Shenandoah Regiment",
        stands: 6,
        experience: 83,
        leadership: 74,
        energy: 89,
        morale: 85,
      },
      { ...FRESH_CONFEDERATE_REGIMENT,
        name: "3rd Shenandoah Regiment",
        stands: 6,
        experience: 51,
        leadership: 82,
        energy: 87,
        morale: 95,
      },
      { ...FRESH_CONFEDERATE_REGIMENT,
        name: "Louisiana Artillery",
        stands: 2,
        rangedWeapon: CANNON_6_POUNDER_CIVIL_WAR,
        experience: 65,
        leadership: 52,
        energy: 84,
        morale: 99,
      },
    ],
    unitTemplates: CIVIL_WAR_UNITS_ID,
    rules: CIVIL_WAR_GENERIC_SCENARIO
  },
  'CIVIL_WAR_POINT_BASED_BATTLE': {
    name: "Point Based Civil War",
    ruleset: CIVIL_WAR_RULES_ID,
    second: 0,
    startTime: Date.parse('11 May 1862 11:30:00 EST'),
    events: [
      {
        time: msSinceMidnight(new Date(Date.parse('11 May 1862 20:36:00 EST'))),
        title: 'Sun Set',
        descripton: 'The sun has set. It might be clear as to which army won the battle. If it is not then you may proceed to the next morning and continue the engagment. Each unit withdraws at least 6 inches and at most 18 inches.',
        provideArmyOverview: true,
        proceedClock: 10000, // TODO this needs to be the seconds between sunset and sunrise.
      }
    ],
    terrain: CIVIL_WAR_TERRAIN_ID,
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
        name: "Union",
        armyActionTitle: "Union Army Actions",
        messages: [
          "Generals and commanders can move 12 inches. Supply wagons can move 8 inches.",
        ],
        nextAction: 0,
        leaders: [
          {
            shortname: "McDowell",
            name: "Brigadier General Irvin McDowell",
            leadership: 80,
          },
          {
            shortname: "Tyler",
            name: "Colonel Daniel Tyler",
            leadership: 68,
          },
          {
            shortname: "Hunter",
            name: "Colonel David Hunter",
            leadership: 78,
          },
        ]
      },
      {
        name: "Confederate",
        armyActionTitle: "Confederate Army Actions",
        messages: [
          "Generals and commanders can move 12 inches. Supply wagons can move 8 inches.",
        ],
        nextAction: 0,
        leaders: [
          {
            shortname: "Beauregard",
            name: "Brigadier General Beauregard",
            leadership: 88,
          },
          {
            shortname: "Longstreet",
            name: "Brigadier General Longstreet",
            leadership: 95,
          },
          {
            shortname: "Bartow",
            name: "Colonel Bartow",
            leadership: 78,
          },
        ]
      },
    ],
    units: [ ],
    unitTemplates: CIVIL_WAR_UNITS_ID,
    rules: CIVIL_WAR_GENERIC_SCENARIO
  },
};
