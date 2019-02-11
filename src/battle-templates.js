import {
  CIVIL_WAR_UNITS,
  FRESH_UNION_BRIGADE,
  FRESH_UNION_CAVALRY_REGIMENT,
  FRESH_UNION_ARTILLERY,
  FRESH_CONFEDERATE_BRIGADE,
  FRESH_CONFEDERATE_CAVALRY_REGIMENT,
  FRESH_CONFEDERATE_ARTILLERY, } from './civil-war-units.js';

export default [
  {
    ruleset: 0,
    activeUnit: 0,
    name: "Generic Civil War",
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
    rules: [ ],
  },
  {
    ruleset: 0,
    activeUnit: 0,
    name: "Bull Run",
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
        heading: 'Command level',
        text: 'The standard unit size is a brigade, consisting of eight stands. Harrisons battalion of cavalry and the Louisiana artillery both consist of only four stands.'
      }
    ]
  }
];
