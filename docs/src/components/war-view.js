define(["exports","./battle-sim.js"],function(_exports,_battleSim){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.classMap=_exports.$classMap=void 0;if(window.navigator.userAgent.match("Trident")){DOMTokenList.prototype.toggle=function(token,force){if(force===void 0||force){this.add(token)}else{this.remove(token)}return force===void 0?!0:force}}const classMapCache=new WeakMap,classMapStatics=new WeakMap,classMap=(0,_battleSim.directive)(classInfo=>part=>{if(!(part instanceof _battleSim.AttributePart)||part instanceof _battleSim.PropertyPart||"class"!==part.committer.name||1<part.committer.parts.length){throw new Error("The `classMap` directive must be used in the `class` attribute "+"and must be the only part in the attribute.")}if(!classMapStatics.has(part)){part.committer.element.className=part.committer.strings.join(" ");classMapStatics.set(part,!0)}const oldInfo=classMapCache.get(part);for(const name in oldInfo){if(!(name in classInfo)){part.committer.element.classList.remove(name)}}for(const name in classInfo){if(!oldInfo||oldInfo[name]!==classInfo[name]){part.committer.element.classList.toggle(name,!!classInfo[name])}}classMapCache.set(part,classInfo)});_exports.classMap=classMap;var classMap$1={classMap:classMap};_exports.$classMap=classMap$1;_battleSim.store.addReducers({battle:_battleSim.$battleDefault});class WarView extends(0,_battleSim.connect)(_battleSim.store)(_battleSim.PageViewElement){static get properties(){return{_battles:{type:Object},_battleTemplates:{type:Object}}}static get styles(){return[_battleSim.SharedStyles,_battleSim.ButtonSharedStyles,_battleSim.css`
      `]}render(){return _battleSim.html`
      ${(0,_battleSim.repeat)(this._battles,({battle:battle$$1,index,active})=>_battleSim.html`
        <section>
          <div class="${classMap({battle:!0,active:active})}" data-index="${index}">
            ${battle$$1.name}
            <br>
            ${!active?_battleSim.html`
              <button class="btn-link" @click="${this._playBattle}">Play</button>
            `:_battleSim.html`
              This is the active battle
            `}
          </div>
        </section>
      `)}
      <section>
        <div>
          <p>TODO In the above section show the date the battle was created. Allow battles to be deleted.</p>
          <p>TODO Use the name field to override the default name.</p>
          Name:
          <input id="name" type="text" placeholder="Name the Battle"></input>
          <br>
          Battle:
          <select id="battle-template">
            ${(0,_battleSim.repeat)(this._battleTemplates,({battleTemplate,index})=>_battleSim.html`
              <option value="${index}">${battleTemplate.name}</option>
            `)}
          </select>
          <br>
          <button @click="${this._create}">Create</button>
        </div>
      </section>
    `}get newBattleTemplate(){return this.shadowRoot.getElementById("battle-template").value}get newBattleName(){return this.shadowRoot.getElementById("name").value}get battleStats(){return{name:this.newBattleName,templateIndex:this.newBattleTemplate}}_create(){_battleSim.store.dispatch((0,_battleSim.createBattle)(this.battleStats))}_playBattle(e){_battleSim.store.dispatch((0,_battleSim.setActiveBattle)(parseInt(e.target.closest(".battle").dataset.index)))}stateChanged(state){this._battles=state.battle.battles.map((battle$$1,index)=>({battle:battle$$1,index,active:index===state.battle.activeBattle}));this._battleTemplates=state.battle.battleTemplates.map((battleTemplate,index)=>({battleTemplate,index}))}}window.customElements.define("war-view",WarView)});