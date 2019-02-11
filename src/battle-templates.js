import CIVIL_WAR_UNITS from './civil-war-units.js';

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
      { army: 0, name: "15th Regiment (East Yorkshire)", hp: 100, speed: 50, energy: 100, },
    ],
    unitTemplates: CIVIL_WAR_UNITS
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
      { army: 0, name: "Tyler's 1st Brigade", strength: 3000 },
      { army: 0, name: "Tyler's 3rd Brigade (Cavalry)", strength: 750 },
      { army: 0, name: "Hunter's 1st Brigade", strength: 3000 },
      { army: 0, name: "Hunter's 2nd Brigade", strength: 3000 },
      { army: 0, name: "Blenker's Brigade", strength: 2000 },
      { army: 0, name: "Franklin's Brigade", strength: 2000 },
      { army: 1, name: "1st Potomac Brigade", strength: 2000 },
      { army: 1, name: "2nd Potomac Brigade", strength: 2000 },
      { army: 1, name: "3rd Potomac Brigade", strength: 2000 },
      { army: 1, name: "1st Shenandoah Brigade", strength: 1500 },
      { army: 1, name: "Thirteenth Virginia Brigade (Cavalry)", strength: 642 },
      { army: 1, name: "Harrison's Battalion (Cavalry)", strength: 196 },
      { army: 1, name: "Washington (Louisiana) Artillery", strength: 50 },
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
