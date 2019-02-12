define(["exports","./battle-sim.js"],function(_exports,_battleSim){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.classMap=_exports.$classMap=void 0;if(window.navigator.userAgent.match("Trident")){DOMTokenList.prototype.toggle=function(token,force){if(force===void 0||force){this.add(token)}else{this.remove(token)}return force===void 0?!0:force}}const classMapCache=new WeakMap,classMapStatics=new WeakMap,classMap=(0,_battleSim.directive)(classInfo=>part=>{if(!(part instanceof _battleSim.AttributePart)||part instanceof _battleSim.PropertyPart||"class"!==part.committer.name||1<part.committer.parts.length){throw new Error("The `classMap` directive must be used in the `class` attribute "+"and must be the only part in the attribute.")}if(!classMapStatics.has(part)){part.committer.element.className=part.committer.strings.join(" ");classMapStatics.set(part,!0)}const oldInfo=classMapCache.get(part);for(const name in oldInfo){if(!(name in classInfo)){part.committer.element.classList.remove(name)}}for(const name in classInfo){if(!oldInfo||oldInfo[name]!==classInfo[name]){part.committer.element.classList.toggle(name,!!classInfo[name])}}classMapCache.set(part,classInfo)});_exports.classMap=classMap;var classMap$1={classMap:classMap};_exports.$classMap=classMap$1;class WarView extends(0,_battleSim.connect)(_battleSim.store)(_battleSim.PageViewElement){static get properties(){return{_battles:{type:Object}}}static get styles(){return[_battleSim.SharedStyles,_battleSim.ButtonSharedStyles,_battleSim.css`
        .selectedBattle {
          color: var(--app-primary-color);
        }
      `]}render(){return _battleSim.html`
      ${(0,_battleSim.repeat)(this._battles,({battle,index,active,createdAt})=>_battleSim.html`
        <section>
          <div class="${classMap({battle:!0,active:active})}" data-index="${index}">
            <h3 class="${classMap({selectedBattle:active})}">${battle.name}</h3>
            <pre>Created ${createdAt}</pre>
            ${active?_battleSim.html`
              <button @click="${this._playBattle}" disabled>Playing</button>
            `:_battleSim.html`
              <button @click="${this._playBattle}">Play</button>
            `}
            <button @click="${this._removeBattle}">Remove</button>
          </div>
        </section>
      `)}
      ${0===this._battles.length?_battleSim.html`
        <section>
          <p>No battles exist. You can create one below.</p>
        </section>
      `:``}
      <section>
        <div>
          <select id="battle-template">
            ${(0,_battleSim.repeat)(_battleSim.$battleTemplatesDefault,(battleTemplate,index)=>_battleSim.html`
              <option value="${index}">${battleTemplate.name}</option>
            `)}
          </select>
          <input id="name" type="text" placeholder="Optional: Provide a Different Name for the Battle"></input>
          <button @click="${this._create}">Create</button>
        </div>
      </section>
    `}get newBattleTemplate(){return this.shadowRoot.getElementById("battle-template").value}get newBattleNameElement(){return this.shadowRoot.getElementById("name")}get newBattleName(){return this.newBattleNameElement.value}set newBattleName(value){this.newBattleNameElement.value=value}get battleStats(){return{name:this.newBattleName,templateIndex:this.newBattleTemplate}}_create(){_battleSim.store.dispatch((0,_battleSim.createNewBattle)(this.battleStats));this.newBattleName=""}_playBattle(e){_battleSim.store.dispatch((0,_battleSim.setActiveBattle)(parseInt(e.target.closest(".battle").dataset.index)))}_removeBattle(e){if(confirm("Are you sure you want to delete the battle?")){_battleSim.store.dispatch((0,_battleSim.removeBattle)(parseInt(e.target.closest(".battle").dataset.index)))}}stateChanged(state){this._battles=state.battle.battles.map((battle,index)=>{let createdAt=new Date(battle.createdAt);return{battle,index,active:index===state.battle.activeBattle,createdAt:createdAt.getMonth()+1+"/"+createdAt.getDate()+"/"+createdAt.getFullYear()}})}}window.customElements.define("war-view",WarView)});