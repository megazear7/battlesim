define(["exports","./battle-sim.js"],function(_exports,_battleSim){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.$rulesetsDefault=_exports.$rulesets=void 0;var RULESETS=[{name:"Civil War Rules",sections:[{heading:"Setup",text:"Setup will be based upon the scenario that you are playing",subsections:[{heading:"Terrain",text:"Follow the terrain of the scenario or randomly setup terrain."},{heading:"Unit Placement",text:"Follow the unit placement of the scenario or take turns setting up units."}]},{heading:"Taking Actions",text:"Use the fight page to take actions. Do not move any units until after submitting the action in the app. It will tell you what the result of the action is and what you are allowed to do.",subsections:[{heading:"Selecting an action",text:"Any action can be selected but based upon the morale and energy of the unit they may be incapable of completing the action or they might refuse."},{heading:"Applying the result",text:"Apply the result exactly as it is written. Once you submit your action that is your orders to the unit. What the unit actually does is provided in the action result."}]}]}];_exports.$rulesetsDefault=RULESETS;var rulesets={default:RULESETS};_exports.$rulesets=rulesets;_battleSim.store.addReducers({battle:_battleSim.$battleDefault});class RulesView extends(0,_battleSim.connect)(_battleSim.store)(_battleSim.PageViewElement){static get properties(){return{_ruleset:{type:Object},_battleRules:{type:Object},_battleName:{type:String}}}static get styles(){return[_battleSim.SharedStyles]}render(){return _battleSim.html`
      <section>
        <h3>${this._battleName}</h3>
        ${(0,_battleSim.repeat)(this._battleRules,({heading,text},index)=>_battleSim.html`
          <h5>${index+1} ${heading}</h5>
          <p>${text}</p>
        `)}
      </section>
      <section>
        <h2>${this._ruleset.name}</h2>
      </section>
      ${(0,_battleSim.repeat)(this._ruleset.sections,({heading,text,subsections},index)=>_battleSim.html`
        <section>
          <h3>${index+1} ${heading}</h3>
          <p>${text}</p>
          ${(0,_battleSim.repeat)(subsections,({heading,text},subIndex)=>_battleSim.html`
            <h5>${index+1}.${subIndex+1} ${heading}</h5>
            <p>${text}</p>
          `)}
        </section>
      `)}
    `}stateChanged(state){let activeBattle=state.battle.battles[state.battle.activeBattle];this._battleName=activeBattle.name;this._battleRules=activeBattle.rules;this._ruleset=RULESETS[activeBattle.ruleset]}}window.customElements.define("rules-view",RulesView)});