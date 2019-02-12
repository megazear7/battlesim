import {
  CIVIL_WAR_UNITS,
  FRESH_UNION_BRIGADE,
  FRESH_UNION_CAVALRY_REGIMENT,
  FRESH_UNION_ARTILLERY,
  FRESH_CONFEDERATE_BRIGADE,
  FRESH_CONFEDERATE_CAVALRY_REGIMENT,
  FRESH_CONFEDERATE_ARTILLERY, } from './civil-war-units.js';
import { msSinceMidnight } from './math-utils.js';

export default [
  {
    name: "Generic Civil War",
    ruleset: 0,
    second: 0,
    startTime: Date.parse('20 June 1862 9:03:00 EST'),
    sunSet: msSinceMidnight(new Date(Date.parse('20 June 1862 21:04:00 EST'))),
    sunRise: msSinceMidnight(new Date(Date.parse('20 June 1862 6:03:00 EST'))),
    activeArmy: 0,
    activeUnit: 0,
    turnStarted: 0,
    armies: [
      { name: "Union" },
      { name: "Confederate" },
    ],
    units: [
      { ...FRESH_UNION_BRIGADE,
        name: "Tyler's 1st Brigade"
      },
      { ...FRESH_CONFEDERATE_BRIGADE,
        name: "2nd Potomac Brigade",
        strength: 2000
      },
    ],
    unitTemplates: CIVIL_WAR_UNITS,
    rules: [
      {
        heading: 'The battle begins.',
        text: 'The game clock starts at 11:30 am on 11th of May, 1862 '
      },
      {
        heading: 'Setup',
        text: 'Currently there are no setup instructions for this battle. Setup the terrain and units however you would like.'
      },
      {
        heading: 'Night time actions',
        text: 'During night time each unit that is within 12 inches of an enemy unit must move toward their table edge. The distance they move is 12 - X where X is the distance to the closest enemy unit. They may chose to move further than this.'
      },
    ]
  },
  {
    name: "Bull Run",
    ruleset: 0,
    second: 0,
    startTime: Date.parse('11 May 1862 11:30:00 EST'),
    sunSet: msSinceMidnight(new Date(Date.parse('11 May 1862 20:36:00 EST'))),
    sunRise: msSinceMidnight(new Date(Date.parse('11 May 1862 6:21:00 EST'))),
    activeArmy: 0,
    activeUnit: 0,
    turnStarted: 0,
    armies: [
      { name: "Union" },
      { name: "Confederate" },
    ],
    units: [
      { ...FRESH_UNION_BRIGADE,
        name: "Tyler's 1st Brigade"
      },
      { ...FRESH_UNION_CAVALRY_REGIMENT,
        name: "Tyler's Cavalry",
        strength: 750
      },
      { ...FRESH_UNION_BRIGADE,
        name: "Hunter's 1st Brigade"
      },
      { ...FRESH_UNION_BRIGADE,
        name: "Hunter's 2nd Brigade"
      },
      { ...FRESH_UNION_BRIGADE,
        name: "Blenker's Brigade",
        strength: 2000
      },
      { ...FRESH_UNION_BRIGADE,
        name: "Franklin's Brigade",
        strength: 2000
      },
      { ...FRESH_CONFEDERATE_BRIGADE,
        name: "1st Potomac Brigade",
        strength: 2000
      },
      { ...FRESH_CONFEDERATE_BRIGADE,
        name: "2nd Potomac Brigade",
        strength: 2000
      },
      { ...FRESH_CONFEDERATE_BRIGADE,
        name: "3rd Potomac Brigade",
        strength: 2000
      },
      { ...FRESH_CONFEDERATE_BRIGADE,
        name: "1st Shenandoah Brigade",
        strength: 2000
      },
      { ...FRESH_CONFEDERATE_CAVALRY_REGIMENT,
        name: "Thirteenth Cavalry",
        strength: 2000
      },
      { ...FRESH_CONFEDERATE_CAVALRY_REGIMENT,
        name: "Harrison's Cavalry",
        strength: 2000
      },
      { ...FRESH_CONFEDERATE_BRIGADE,
        name: "Washington (Louisiana) Artillery",
        strength: 2000
      },
    ],
    unitTemplates: CIVIL_WAR_UNITS,
    rules: [
      {
        heading: 'The battle begins.',
        text: 'The game clock starts at 9:03 am on 11th of May, 1862 '
      },
      {
        heading: 'Setup',
        text: 'Currently there are no setup instructions for this battle. Setup the terrain and units however you would like or try to base it off of the actual battle.'
      },
      {
        heading: 'Night time actions',
        text: 'During night time each unit that is within 12 inches of an enemy unit must move toward their table edge. The distance they move is 12 - X where X is the distance to the closest enemy unit. They may chose to move further than this.'
      },
    ]
  }
];
