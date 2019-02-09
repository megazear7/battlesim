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
  REST,
  CHARGE,
  MOVE,
  FIRE
} from '../actions/battle.js';

const INITIAL_STATE = {
  activeUnit: 0,
  armies: [
    { name: "Brittish" },
    { name: "Americans" },
  ],
  units: [
    { army: 0, name: "Red Coats", hp: 100, speed: 50, energy: 100, },
    { army: 0, name: "Brittish Cavalry", hp: 100, speed: 70, energy: 100, },
    { army: 0, name: "Red Coats", hp: 40, speed: 50, energy: 100, },
    { army: 1, name: "Militia", hp: 30, speed: 60, energy: 100, },
    { army: 1, name: "Continental Soldiers", hp: 80, speed: 40, energy: 100, },
    { army: 1, name: "Militia", hp: 30, speed: 60, energy: 100, },
  ]
};

const battle = (state = INITIAL_STATE, action) => {
  if (action.type === REST) {
    var oldActiveUnit = state.activeUnit;
    var newActiveUnit = oldActiveUnit >= state.units.length - 1 ? 0 : oldActiveUnit + 1;
    var newState = {
      ...state,
      activeUnit: newActiveUnit
    }
    newState.units[oldActiveUnit].energy += 10;
    return {
      ...state,
      activeUnit: newActiveUnit
    }
  } else if (action.type === MOVE) {
    var oldActiveUnit = state.activeUnit;
    var newActiveUnit = oldActiveUnit >= state.units.length - 1 ? 0 : oldActiveUnit + 1;
    var newState = {
      ...state,
      activeUnit: newActiveUnit
    }
    newState.units[oldActiveUnit].energy -= action.distance;
    return newState;
  } else if (action.type === CHARGE) {
    var oldActiveUnit = state.activeUnit;
    var newActiveUnit = oldActiveUnit >= state.units.length - 1 ? 0 : oldActiveUnit + 1;
    var newState = {
      ...state,
      activeUnit: newActiveUnit
    }
    newState.units[oldActiveUnit].energy -= action.distance * 2;
    return newState;
  } else if (action.type === FIRE) {
    var oldActiveUnit = state.activeUnit;
    var newActiveUnit = oldActiveUnit >= state.units.length - 1 ? 0 : oldActiveUnit + 1;
    var newState = {
      ...state,
      activeUnit: newActiveUnit
    }
    newState.units[oldActiveUnit].energy -= 10;
    return newState;
  } else {
    return state;
  }
};

export default battle;
