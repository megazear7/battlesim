define(["exports","./battle-sim.js"],function(_exports,_battleSim){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.$rulesetsDefault=_exports.$rulesets=void 0;var RULESETS=[{name:"Civil War Rules",sections:[{heading:"Setup",text:"Setup will be based upon the scenario that you are playing",subsections:[{heading:"Terrain",text:"Follow the terrain of the scenario or randomly setup terrain."},{heading:"Unit Placement",text:"Follow the unit placement of the scenario or take turns setting up units."}]},{heading:"Taking Actions",text:"Use the fight page to take actions. Do not move any units until after submitting the action in the app. It will tell you what the result of the action is and what you are allowed to do.",subsections:[{heading:"Selecting an action",text:"Any action can be selected but based upon the morale and energy of the unit they may be incapable of completing the action or they might refuse."},{heading:"Applying the result",text:"Apply the result exactly as it is written. Once you submit your action that is your orders to the unit. What the unit actually does is provided in the action result."}]}]}];_exports.$rulesetsDefault=RULESETS;var rulesets={default:RULESETS};_exports.$rulesets=rulesets;class RulesView extends(0,_battleSim.connect)(_battleSim.store)(_battleSim.PageViewElement){static get properties(){return{_ruleset:{type:Object},_battleRules:{type:Object},_hasActiveBattle:{type:Boolean}}}static get styles(){return[_battleSim.SharedStyles]}render(){return _battleSim.html`
      ${this._hasActiveBattle?_battleSim.html`
        <section>
          <h3>Scenario Rules</h3>
          ${(0,_battleSim.repeat)(this._battleRules,({heading,text},index)=>_battleSim.html`
            <h5>${index+1} ${heading}</h5>
            <p>${text}</p>
          `)}
        </section>
        <section>
          <h3>${this._ruleset.name}</h3>
        </section>
        ${(0,_battleSim.repeat)(this._ruleset.sections,({heading,text,subsections},index)=>_battleSim.html`
          <section>
            <h4>${index+1} ${heading}</h3>
            <p>${text}</p>
            ${(0,_battleSim.repeat)(subsections,({heading,text},subIndex)=>_battleSim.html`
              <h6>${index+1}.${subIndex+1} ${heading}</h5>
              <p>${text}</p>
            `)}
          </section>
        `)}
      `:_battleSim.html`
        <section>
          <p>No active battle. Go to the war tab and either select a battle or create a new battle.</p>
        </section>
      `}
    `}stateChanged(state){if(state.battle.battles.length>state.battle.activeBattle){let activeBattle=state.battle.battles[state.battle.activeBattle];this._battleRules=activeBattle.rules;this._ruleset=RULESETS[activeBattle.ruleset];this._hasActiveBattle=!0}else{this._hasActiveBattle=!1}}}window.customElements.define("rules-view",RulesView)});