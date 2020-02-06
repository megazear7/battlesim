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
import { CIVIL_WAR_BULL_RUN_SCENARIO, CIVIL_WAR_GENERIC_SCENARIO, CIVIL_WAR_DRANESVILLE_SCENARIO } from './scenarios.js';

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
        strength: 900,
        fullStrength: 1000,
        stands: 8,
        experience: 68,
        leadership: 37,
        energy: 84,
        morale: 99,
      },
      { ...FRESH_UNION_REGIMENT,
        name: "Tyler's 2nd Regiment",
        strength: 950,
        fullStrength: 1000,
        stands: 8,
        experience: 34,
        leadership: 68,
        energy: 86,
        morale: 85,
      },
      { ...FRESH_UNION_REGIMENT,
        name: "Tyler's 3rd Regiment",
        strength: 1000,
        fullStrength: 1000,
        stands: 8,
        experience: 51,
        leadership: 52,
        energy: 86,
        morale: 90,
      },
      { ...FRESH_UNION_REGIMENT,
        name: "Hunter's Regiment",
        strength: 1000,
        fullStrength: 1000,
        stands: 6,
        experience: 20,
        leadership: 43,
        energy: 80,
        morale: 80,
      },
      { ...FRESH_UNION_REGIMENT,
        name: "Franklin's Regiment",
        strength: 1000,
        fullStrength: 1000,
        stands: 6,
        experience: 65,
        leadership: 92,
        energy: 85,
        morale: 91,
      },
      { ...FRESH_UNION_REGIMENT,
        name: "Cadwalader's Regiment",
        strength: 800,
        fullStrength: 1000,
        stands: 8,
        experience: 42,
        leadership: 73,
        energy: 90,
        morale: 91,
      },
      { ...FRESH_UNION_CAVALRY_REGIMENT,
        name: "Porter's Cavalry",
        strength: 300,
        fullStrength: 300,
        stands: 4,
        experience: 75,
        leadership: 62,
        energy: 87,
        morale: 85,
      },
      { ...FRESH_UNION_ARTILLERY,
        name: "Howard's Battery",
        strength: 48,
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
        strength: 63,
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
        fullStrength: 1000,
        stands: 8,
        experience: 65,
        leadership: 62,
        energy: 97,
        morale: 95,
      },
      { ...FRESH_CONFEDERATE_REGIMENT,
        name: "2nd Potomac Regiment",
        strength: 800,
        fullStrength: 1000,
        stands: 6,
        experience: 52,
        leadership: 42,
        energy: 97,
        morale: 85,
      },
      { ...FRESH_CONFEDERATE_REGIMENT,
        name: "3rd Potomac Regiment",
        strength: 1000,
        fullStrength: 1000,
        stands: 6,
        experience: 48,
        leadership: 52,
        energy: 73,
        morale: 95,
      },
      { ...FRESH_CONFEDERATE_REGIMENT,
        name: "4th Potomac Regiment",
        strength: 900,
        fullStrength: 1000,
        stands: 6,
        experience: 63,
        leadership: 62,
        energy: 79,
        morale: 95,
      },
      { ...FRESH_CONFEDERATE_REGIMENT,
        name: "1st Shenandoah Regiment",
        strength: 1000,
        fullStrength: 1000,
        stands: 6,
        experience: 55,
        leadership: 66,
        energy: 91,
        morale: 85,
      },
      { ...FRESH_CONFEDERATE_REGIMENT,
        name: "2nd Shenandoah Regiment",
        strength: 1000,
        fullStrength: 1000,
        stands: 6,
        experience: 83,
        leadership: 74,
        energy: 89,
        morale: 85,
      },
      { ...FRESH_CONFEDERATE_REGIMENT,
        name: "3rd Shenandoah Regiment",
        strength: 950,
        fullStrength: 1000,
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
        strength: 33,
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
        strength: 18,
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
  'CIVIL_WAR_BATTLE_OF_DRANESVILLE': {
    name: "Battle of Dranesville",
    ruleset: CIVIL_WAR_RULES_ID,
    second: 0,
    startTime: Date.parse('20 December 1861 01:00:00 EST'),
    events: [
      {
        time: 1,
        title: 'The Battle of Dranesville',
        messages: [
          'Early on the morning of December 20 when General Stuart, with a mixed brigade of infantry comprising the regiments of the 6th South Carolina, 1st Kentucky, 10th Alabama, and 11th Virginia, 150 of his cavalry troopers and Allen S. Cuttss four-gun Georgia battery, set out north from their position near Centreville to escort the armys wagons trains on a foraging expedition into Loudoun County. Meanwhile, General Ord, leading the 10,000 strong 3rd Brigade of Pennsylvania Reserves set out west from Langley to clear the south bank of the Potomac River of Confederate pickets and partisans in Fairfax and Loudoun. At Colvin Run Mill, Ord left half his force to protect his rear and prevent his force from being cut off from their base at Langley.',
          'At about noon, Ord arrived at the intersection of the Georgetown Pike and Leesburg Pike in the village of Dranesville, where he encountered Stuarts advance cavalry pickets, which were quickly driven off by the Union force. Ord then began to lead his command west, down the Leesburg Pike. At around 1 p.m. Stuart, with the main body of his force approached Dranesville from the south, whereupon he encountered the rear of the Union detachment.',
          'Seeing that the Stewarts Brigade is guarding confederate supply wagons, Union Brigadier General Ord determines he must cut off the confederate supply. To do this the union troops must reach the confederate board edge before the supply wagons finish passing by.'
        ],
        provideArmyOverview: false
      },
      {
        time: 3600,
        title: 'Confederate Friendly Fire',
        messages: [
          'The 6th South Carolina mistook the 1st Kentucky for Union troops and opened fire, which was quickly returned by the Kentuckians',
          'Both units have sustained casualties.'
        ],
        provideArmyOverview: false
      },
      {
        time: 5000,
        title: 'Confederate Supply Wagons on the move',
        messages: [
          'Ord recieves report that the confederate supply wagons are on the move. You likely do not have much time to reach the supply wagons before they escape the battlefield.',
        ],
        provideArmyOverview: false
      },
      {
        time: 7200,
        title: 'The battle ends',
        descripton: 'At 3 p.m., with his wagons safely away and secure from capture, Stuart ordered a withdrawal. If union troops were able to reach the confederate board edge the Ords 3rd brigade has won. Otherwise Stuarts Brigade wins.',
        provideArmyOverview: false
      },
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
        name: "Union: Ord's 3rd Brigade",
        armyActionTitle: "Union Army Actions",
        messages: [
          "Brigadier General Ord can move 12 inches. Lt. Col Kane can move 8 inches.",
        ],
        nextAction: 0,
        leaders: [
          {
            shortname: "Ord",
            name: "Brigadier General Edward O. C. Ord",
            leadership: 60,
          },
          {
            shortname: "Kane",
            name: "Thomas L. Kane",
            leadership: 70,
          },
        ],
      },
      {
        name: "Confederate: Stuart's Brigade",
        armyActionTitle: "Confederate Army Actions",
        messages: [
          "Brigadier General J.E.B. Stuart can move 16 inches.",
        ],
        nextAction: 0,
        leaders: [
          {
            shortname: "Jeb Stuart",
            name: "Brigadier General J. E. B. Stuart",
            leadership: 100,
          },
        ],
      },
    ],
    units: [
      { ...FRESH_UNION_REGIMENT,
        name: "6th Infantry Reserves",
        strength: 800,
        fullStrength: 1000,
        stands: 4,
        experience: 30,
        leadership: 30,
        energy: 90,
        morale: 80,
      },
      { ...FRESH_UNION_REGIMENT,
        name: "9th Infantry Reserves",
        strength: 900,
        fullStrength: 1000,
        stands: 4,
        experience: 30,
        leadership: 30,
        energy: 85,
        morale: 80,
      },
      { ...FRESH_UNION_REGIMENT,
        name: "10th Infantry Reserves",
        strength: 950,
        fullStrength: 1000,
        stands: 4,
        experience: 30,
        leadership: 60,
        energy: 85,
        morale: 95,
      },
      { ...FRESH_UNION_REGIMENT,
        name: "12th Infantry Reserves",
        strength: 950,
        fullStrength: 1000,
        stands: 4,
        experience: 20,
        leadership: 40,
        energy: 60,
        morale: 90,
      },
      { ...FRESH_UNION_REGIMENT,
        name: "1st Rifle Regiment",
        strength: 1000,
        fullStrength: 1000,
        stands: 4,
        experience: 60,
        leadership: 80,
        energy: 95,
        morale: 100,
      },
      { ...FRESH_UNION_CAVALRY_REGIMENT,
        name: "Higgins's Cavalry",
        strength: 300,
        fullStrength: 300,
        stands: 4,
        experience: 40,
        leadership: 30,
        energy: 95,
        morale: 95,
      },
      { ...FRESH_UNION_ARTILLERY,
        name: "Easton's Battery",
        strength: 4,
        fullStrength: 4,
        rangedWeapon: CANNON_12_POUNDER_CIVIL_WAR,
        stands: 1,
        experience: 40,
        leadership: 40,
        energy: 70,
        morale: 90,
      },
      { ...FRESH_UNION_ARTILLERY,
        name: "Matthews's Battery",
        strength: 4,
        fullStrength: 4,
        rangedWeapon: CANNON_12_POUNDER_CIVIL_WAR,
        stands: 1,
        experience: 30,
        leadership: 50,
        energy: 50,
        morale: 90,
      },
      { ...FRESH_CONFEDERATE_REGIMENT,
        name: "11th Virginia",
        strength: 1000,
        fullStrength: 1000,
        stands: 4,
        experience: 60,
        leadership: 60,
        energy: 90,
        morale: 100,
      },
      { ...FRESH_CONFEDERATE_REGIMENT,
        name: "6th Carolina",
        strength: 1000,
        fullStrength: 1000,
        stands: 4,
        experience: 70,
        leadership: 60,
        energy: 85,
        morale: 100,
      },
      { ...FRESH_CONFEDERATE_REGIMENT,
        name: "10th Alabama",
        strength: 1000,
        fullStrength: 1000,
        stands: 4,
        experience: 80,
        leadership: 70,
        energy: 90,
        morale: 100,
      },
      { ...FRESH_CONFEDERATE_REGIMENT,
        name: "1st Kentucky",
        strength: 1000,
        fullStrength: 1000,
        stands: 4,
        experience: 60,
        leadership: 60,
        energy: 95,
        morale: 100,
      },
      { ...FRESH_CONFEDERATE_CAVALRY_REGIMENT,
        name: "2nd Virginia Cavalry",
        strength: 150,
        fullStrength: 200,
        experience: 80,
        leadership: 80,
        energy: 100,
        morale: 100,
      },
      { ...FRESH_CONFEDERATE_ARTILLERY,
        name: "Allen's Battery",
        strength: 4,
        fullStrength: 4,
        stands: 1,
        rangedWeapon: CANNON_6_POUNDER_CIVIL_WAR,
        experience: 50,
        leadership: 40,
        energy: 80,
        morale: 85,
      },
    ],
    unitTemplates: CIVIL_WAR_UNITS_ID,
    rules: CIVIL_WAR_DRANESVILLE_SCENARIO
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
    useAmmo: true,
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
        ammunition: 0,
      },
      /*{
        ...FRESH_CONFEDERATE_REGIMENT,
        name: "1st Potomac Regiment",
      },
      { ...FRESH_UNION_ARTILLERY,
        name: "Howard's Battery",
        rangedWeapon: CANNON_12_POUNDER_CIVIL_WAR,
        stands: 3,
      },*/
      { ...FRESH_CONFEDERATE_CAVALRY_REGIMENT,
        name: "Harrison's Cavalry",
        ammunition: 1000,
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
