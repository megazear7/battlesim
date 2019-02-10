import {
  REST,
  CHARGE,
  MOVE,
  FIRE,
  ADD,
  REMOVE,
  CREATE_BATTLE,
  SET_ACTIVE_BATTLE,
  REMOVE_BATTLE
} from '../actions/battle.js';

const INITIAL_STATE = {
  activeBattle: 0,
  battles: [
    {
      activeUnit: 0,
      createdAt: new Date().getTime(),
      name: "Example Battle",
      armies: [
        { name: "Brittish" },
        { name: "Americans" },
      ],
      units: [
        { army: 0, name: "15th Regiment (East Yorkshire)", hp: 100, speed: 50, energy: 100, },
      ],
      unitTemplates: [
        { army: 0, name: "15th Regiment (East Yorkshire)", hp: 100, speed: 50, energy: 100, },
        { army: 0, name: "16th Cavalry (The Queen's Lancers)", hp: 100, speed: 70, energy: 100, },
        { army: 0, name: "9th Regiment (Royal Norfolk)", hp: 40, speed: 50, energy: 100, },
        { army: 0, name: "Redcoats", hp: 30, speed: 60, energy: 100, },
        { army: 0, name: "Brittish Cavalry", hp: 30, speed: 60, energy: 100, },
        { army: 0, name: "Brittish Cannon", hp: 30, speed: 60, energy: 100, },
        { army: 1, name: "3rd Regiment of Militia", hp: 30, speed: 60, energy: 100, },
        { army: 1, name: "Bradley's Regiment", hp: 80, speed: 40, energy: 100, },
        { army: 1, name: "Waterbury's Regiment", hp: 30, speed: 60, energy: 100, },
        { army: 1, name: "Continental Line", hp: 30, speed: 60, energy: 100, },
        { army: 1, name: "Continental Cavalry", hp: 30, speed: 60, energy: 100, },
        { army: 1, name: "Continental Cannon", hp: 30, speed: 60, energy: 100, },
      ],
    }
  ],
  battleTemplates: [
    {
      activeUnit: 0,
      name: "Generic Revolutionary War",
      armies: [
        { name: "Brittish" },
        { name: "Americans" },
      ],
      units: [
        { army: 0, name: "15th Regiment (East Yorkshire)", hp: 100, speed: 50, energy: 100, },
      ],
      unitTemplates: [
        { army: 0, name: "15th Regiment (East Yorkshire)", hp: 100, speed: 50, energy: 100, },
        { army: 0, name: "16th Cavalry (The Queen's Lancers)", hp: 100, speed: 70, energy: 100, },
        { army: 0, name: "9th Regiment (Royal Norfolk)", hp: 40, speed: 50, energy: 100, },
        { army: 0, name: "Redcoats", hp: 30, speed: 60, energy: 100, },
        { army: 0, name: "Brittish Cavalry", hp: 30, speed: 60, energy: 100, },
        { army: 0, name: "Brittish Cannon", hp: 30, speed: 60, energy: 100, },
        { army: 1, name: "3rd Regiment of Militia", hp: 30, speed: 60, energy: 100, },
        { army: 1, name: "Bradley's Regiment", hp: 80, speed: 40, energy: 100, },
        { army: 1, name: "Waterbury's Regiment", hp: 30, speed: 60, energy: 100, },
        { army: 1, name: "Continental Line", hp: 30, speed: 60, energy: 100, },
        { army: 1, name: "Continental Cavalry", hp: 30, speed: 60, energy: 100, },
        { army: 1, name: "Continental Cannon", hp: 30, speed: 60, energy: 100, },
      ]
    },
    {
      activeUnit: 0,
      name: "Bunker Hill",
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
      ],
      unitTemplates: [
        { army: 0, name: "15th Regiment (East Yorkshire)", hp: 100, speed: 50, energy: 100, },
        { army: 0, name: "16th Cavalry (The Queen's Lancers)", hp: 100, speed: 70, energy: 100, },
        { army: 0, name: "9th Regiment (Royal Norfolk)", hp: 40, speed: 50, energy: 100, },
        { army: 0, name: "Redcoats", hp: 30, speed: 60, energy: 100, },
        { army: 0, name: "Brittish Cavalry", hp: 30, speed: 60, energy: 100, },
        { army: 0, name: "Brittish Cannon", hp: 30, speed: 60, energy: 100, },
        { army: 1, name: "3rd Regiment of Militia", hp: 30, speed: 60, energy: 100, },
        { army: 1, name: "Bradley's Regiment", hp: 80, speed: 40, energy: 100, },
        { army: 1, name: "Waterbury's Regiment", hp: 30, speed: 60, energy: 100, },
        { army: 1, name: "Continental Line", hp: 30, speed: 60, energy: 100, },
        { army: 1, name: "Continental Cavalry", hp: 30, speed: 60, energy: 100, },
        { army: 1, name: "Continental Cannon", hp: 30, speed: 60, energy: 100, },
      ],
    }
  ]
};

let initialState = JSON.parse(localStorage.getItem("battle"));

if (! initialState) {
  initialState = INITIAL_STATE;
}

const battle = (state = initialState, action) => {
  var newState = { ...state }
  var activeBattle = newState.battles[newState.activeBattle];
  if (action.type === REST) {
    var oldActiveUnit = activeBattle.activeUnit;
    var newActiveUnit = oldActiveUnit >= activeBattle.units.length - 1 ? 0 : oldActiveUnit + 1;
    activeBattle.activeUnit = newActiveUnit;
    activeBattle.units[oldActiveUnit].energy += 10;
  } else if (action.type === MOVE) {
    var oldActiveUnit = activeBattle.activeUnit;
    var newActiveUnit = oldActiveUnit >= activeBattle.units.length - 1 ? 0 : oldActiveUnit + 1;
    activeBattle.activeUnit = newActiveUnit;
    activeBattle.units[oldActiveUnit].energy -= action.situation.distance;
  } else if (action.type === CHARGE) {
    var oldActiveUnit = activeBattle.activeUnit;
    var newActiveUnit = oldActiveUnit >= activeBattle.units.length - 1 ? 0 : oldActiveUnit + 1;
    activeBattle.activeUnit = newActiveUnit;
    activeBattle.units[oldActiveUnit].energy -= action.situation.distance * 2;
  } else if (action.type === FIRE) {
    var oldActiveUnit = activeBattle.activeUnit;
    var newActiveUnit = oldActiveUnit >= activeBattle.units.length - 1 ? 0 : oldActiveUnit + 1;
    activeBattle.activeUnit = newActiveUnit;
    activeBattle.units[oldActiveUnit].energy -= 10;
  } else if (action.type === ADD) {
    let newUnit = activeBattle.unitTemplates[action.unitTemplate];
    if (action.name) {
      newUnit.name = action.name;
    }
    activeBattle.units.push(newUnit);
  } else if (action.type === REMOVE) {
    activeBattle.units.splice(action.index, 1);
  } else if (action.type === CREATE_BATTLE) {
    let newBattle = {
      ...state.battleTemplates[action.battleStats.templateIndex],
      createdAt: new Date().getTime()
    };
    if (action.battleStats.name) {
      newBattle.name = action.battleStats.name;
    }
    newState.battles.push(newBattle);
    newState.activeBattle = newState.battles.length - 1;
  } else if (action.type === REMOVE_BATTLE) {
    newState.battles.splice(action.index, 1);
    if (newState.activeBattle >= action.index) {
      newState.activeBattle -= 1;
    }
    if (newState.activeBattle < 0) {
      newState.activeBattle = 0;
    }
  } else if (action.type === SET_ACTIVE_BATTLE) {
    newState.activeBattle = action.index;
  }
  localStorage.setItem("battle", JSON.stringify(newState));
  return newState
};

export default battle;
