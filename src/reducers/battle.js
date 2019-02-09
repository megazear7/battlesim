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
  FIRE,
  ADD,
  REMOVE
} from '../actions/battle.js';

const INITIAL_STATE = {
  activeUnit: 0,
  armies: [
    { name: "Brittish" },
    { name: "Americans" },
  ],
  units: [
    { army: 0, name: "15th Regiment (East Yorkshire)", hp: 100, speed: 50, energy: 100, },
    { army: 0, name: "16th Cavalry (The Queen's Lancers)", hp: 100, speed: 70, energy: 100, },
    { army: 0, name: "9th Regiment (Royal Norfolk)", hp: 40, speed: 50, energy: 100, },
    { army: 1, name: "3rd Regiment of Militia", hp: 30, speed: 60, energy: 100, },
    { army: 1, name: "Bradley's Regiment", hp: 80, speed: 40, energy: 100, },
    { army: 1, name: "Waterbury's Regiment", hp: 30, speed: 60, energy: 100, },
  ]
};

let initialState = JSON.parse(localStorage.getItem("battle"));

if (! initialState) {
  initialState = INITIAL_STATE;
}

const battle = (state = initialState, action) => {
  var newState = { ...state }
  if (action.type === REST) {
    var oldActiveUnit = state.activeUnit;
    var newActiveUnit = oldActiveUnit >= state.units.length - 1 ? 0 : oldActiveUnit + 1;
    var newState = {
      ...state,
      activeUnit: newActiveUnit
    }
    newState.units[oldActiveUnit].energy += 10;

  } else if (action.type === MOVE) {
    var oldActiveUnit = state.activeUnit;
    var newActiveUnit = oldActiveUnit >= state.units.length - 1 ? 0 : oldActiveUnit + 1;
    newState.activeUnit = newActiveUnit;
    newState.units[oldActiveUnit].energy -= action.situation.distance;
  } else if (action.type === CHARGE) {
    var oldActiveUnit = state.activeUnit;
    var newActiveUnit = oldActiveUnit >= state.units.length - 1 ? 0 : oldActiveUnit + 1;
    newState.activeUnit = newActiveUnit;
    newState.units[oldActiveUnit].energy -= action.situation.distance * 2;
  } else if (action.type === FIRE) {
    var oldActiveUnit = state.activeUnit;
    var newActiveUnit = oldActiveUnit >= state.units.length - 1 ? 0 : oldActiveUnit + 1;
    newState.activeUnit = newActiveUnit;
    newState.units[oldActiveUnit].energy -= 10;
  } else if (action.type === ADD) {
    newState.units.push(action.stats);
  } else if (action.type === REMOVE) {
    newState.units.splice(action.index, 1);
  }
  localStorage.setItem("battle", JSON.stringify(newState));
  return newState
};

export default battle;
