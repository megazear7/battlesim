/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import {
  TAKE_ACTION
} from '../actions/battle.js';

const INITIAL_STATE = {
  activeUnit: 0,
  armies: [
    { name: "Brittish" },
    { name: "Americans" },
  ],
  units: [
    { army: 0, name: "Red Coats", hp: 100, speed: 50 },
    { army: 0, name: "Brittish Cavalry", hp: 100, speed: 70 },
    { army: 0, name: "Red Coats", hp: 40, speed: 50 },
    { army: 1, name: "Militia", hp: 30, speed: 60 },
    { army: 1, name: "Continental Soldiers", hp: 80, speed: 40 },
    { army: 1, name: "Militia", hp: 30, speed: 60 },
  ]
};

const battle = (state = INITIAL_STATE, action) => {
  if (action.type === TAKE_ACTION) {
    var oldActiveUnit = state.activeUnit;
    var newActiveUnit = oldActiveUnit >= state.units.length - 1
      ? 0 : oldActiveUnit + 1;
    return {
      ...state,
      activeUnit: newActiveUnit
    }
  } else {
    return state;
  }
};

export default battle;
