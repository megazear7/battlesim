define(["./battle-sim.js"],function(_battleSim){"use strict";class FightView extends(0,_battleSim.connect)(_battleSim.store)(_battleSim.PageViewElement){static get properties(){return{_unit:{type:Object},_hasActiveBattle:{type:Boolean},_actionMessages:{type:Array}}}static get styles(){return[_battleSim.SharedStyles,_battleSim.ButtonSharedStyles,_battleSim.css`
        #unit {
          text-align: center;
          font-size: 2rem;
        }
        #army {
          text-align: center;
          color: var(--app-muted-text-color);
        }
        #action-result {
          display: none;
        }
        h6 {
          margin-bottom: 0;
        }
      `]}render(){return _battleSim.html`
      ${this._hasActiveBattle?_battleSim.html`
        <section>
          <div>
            <div id="unit">${this._unit.name}</div>
            <div id="army">Army: ${this._unit.army.name}</div>
          </div>
          <h6>Unit Status</h6>
          <p>${this._unit.detailedStatus}</p>

          <h6>Unit Description</h6>
          <p>${this._unit.desc}</p>
        </section>
        <section>
          <div id="actions">
            <button @click="${this._rest}" id="rest">Rest</button>
            <button @click="${this._move}" id="move">Move</button>
            <button @click="${this._charge}" id="charge">Charge</button>
            <button @click="${this._fire}" id="fire">Fire</button>
          </div>
        </section>
        <section>
          <div>
            <input id="distance" class="hidden" type="number" placeholder="Distance (Leave blank to move as far as possible)"></input>
            <select id="target" class="hidden">
              <option>Select Target</option>
              ${(0,_battleSim.repeat)(this._unit.targets,target=>_battleSim.html`
                <option value="${target.id}">${target.unit.name}</option>
              `)}
            </select>
            <div id="uphill" class="hidden">
              <input type="checkbox" id="uphill-checkbox"></input>
              <label for="uphill-checkbox">Uphill</label>
            </div>
            <div id="terrain" class="hidden">
              <input type="checkbox" id="terrain-checkbox"></input>
              <label for="terrain-checkbox">Difficult Terrain</label>
            </div>
          <div>
          <div id="take-action" style="opacity: 0;">
            <button @click="${this._takeAction}">Take Action</button>
            <p class="error hidden">You must provide valid values for each field</p>
          </div>
          <div id="action-result">
            ${(0,_battleSim.repeat)(this._actionMessages,message=>_battleSim.html`
              <p>${message}</option>
            `)}
            <p id="action-message"></p>
            <button @click="${this._progressToNextAction}">Next Action</button>
          </div>
        </section>
      `:_battleSim.html`
        <section>
          <p>No active battle. Go to the war tab and either select a battle or create a new battle.</p>
        </section>
      `}
    `}get distanceElement(){return this.shadowRoot.getElementById("distance")}get uphillContainer(){return this.shadowRoot.getElementById("uphill")}get terrainContainer(){return this.shadowRoot.getElementById("terrain")}get targetElement(){return this.shadowRoot.getElementById("target")}get errorElement(){return this.shadowRoot.querySelector(".error")}get distance(){return parseInt(""===this.distanceElement.value?0:this.distanceElement.value)}get uphill(){return"on"===this.uphillContainer.querySelector("input").value}get terrain(){return"on"===this.terrainContainer.querySelector("input").value}get target(){return parseInt(this.targetElement.value)}get situation(){return{distance:this.distance,uphill:this.uphill,terrain:this.terrain,target:this.target}}get terrainModifier(){return 0+this.uphill?50:0+this.terrain?50:0}get validSituation(){if(this._selectedAction===_battleSim.rest){return!0}else if(this._selectedAction===_battleSim.move){return!0}else if(this._selectedAction===_battleSim.charge){return 0<this.distance&&!isNaN(this.target)}else if(this._selectedAction===_battleSim.fire){return 0<this.distance&&!isNaN(this.target)}else{return!1}}get _actionMessageElement(){return this.shadowRoot.getElementById("action-message")}_progressToNextAction(){_battleSim.store.dispatch(this._selectedAction(this.situation));this.shadowRoot.getElementById("actions").style.display="block";this.shadowRoot.getElementById("take-action").style.display="block";this.shadowRoot.getElementById("action-result").style.display="none";this._actionMessageElement.innerText=""}_takeAction(){if(this.validSituation){if(this._selectedAction===_battleSim.rest){let actionResult=this._unit.rest();this._actionMessages=actionResult.messages}else if(this._selectedAction===_battleSim.move){let actionResult=this._unit.move(this.distance,this.terrainModifier);this._actionMessages=actionResult.messages}else if(this._selectedAction===_battleSim.charge){let actionResult=this._unit.charge();this._actionMessages=actionResult.messages}else if(this._selectedAction===_battleSim.fire){let actionResult=this._unit.fire();this._actionMessages=actionResult.messages}this._removeSelection();this.shadowRoot.getElementById("move").style.opacity=1;this.shadowRoot.getElementById("charge").style.opacity=1;this.shadowRoot.getElementById("rest").style.opacity=1;this.shadowRoot.getElementById("fire").style.opacity=1;this.shadowRoot.getElementById("take-action").style.opacity=0;this.distanceElement.value="";this.uphillContainer.querySelector("input").checked=!1;this.terrainContainer.querySelector("input").checked=!1;this.targetElement.value="";this.shadowRoot.getElementById("take-action").style.display="none";this.shadowRoot.getElementById("actions").style.display="none";this.shadowRoot.getElementById("action-result").style.display="block"}else{this.errorElement.style.opacity="1";this.errorElement.style.display="block";setTimeout(()=>{this.errorElement.style.opacity="0";this.errorElement.style.display="none"},3e3)}}_removeSelection(){[...this.shadowRoot.querySelectorAll("button")].forEach(button=>button.classList.remove("selected"));this.distanceElement.classList.add("hidden");this.uphillContainer.classList.add("hidden");this.terrainContainer.classList.add("hidden");this.targetElement.classList.add("hidden")}_move(e){this._removeSelection();e.target.classList.add("selected");this.distanceElement.classList.remove("hidden");this.uphillContainer.classList.remove("hidden");this.terrainContainer.classList.remove("hidden");this.shadowRoot.getElementById("move").style.opacity=1;this.shadowRoot.getElementById("charge").style.opacity=.5;this.shadowRoot.getElementById("rest").style.opacity=.5;this.shadowRoot.getElementById("fire").style.opacity=.5;this.shadowRoot.getElementById("take-action").style.opacity=1;this._selectedAction=_battleSim.move}_charge(e){this._removeSelection();e.target.classList.add("selected");this.distanceElement.classList.remove("hidden");this.uphillContainer.classList.remove("hidden");this.terrainContainer.classList.remove("hidden");this.targetElement.classList.remove("hidden");this.shadowRoot.getElementById("move").style.opacity=.5;this.shadowRoot.getElementById("charge").style.opacity=1;this.shadowRoot.getElementById("rest").style.opacity=.5;this.shadowRoot.getElementById("fire").style.opacity=.5;this.shadowRoot.getElementById("take-action").style.opacity=1;this._selectedAction=_battleSim.charge}_rest(e){this._removeSelection();e.target.classList.add("selected");this.shadowRoot.getElementById("move").style.opacity=.5;this.shadowRoot.getElementById("charge").style.opacity=.5;this.shadowRoot.getElementById("rest").style.opacity=1;this.shadowRoot.getElementById("fire").style.opacity=.5;this.shadowRoot.getElementById("take-action").style.opacity=1;this._selectedAction=_battleSim.rest}_fire(e){this._removeSelection();e.target.classList.add("selected");this.distanceElement.classList.remove("hidden");this.terrainContainer.classList.remove("hidden");this.targetElement.classList.remove("hidden");this.shadowRoot.getElementById("move").style.opacity=.5;this.shadowRoot.getElementById("charge").style.opacity=.5;this.shadowRoot.getElementById("rest").style.opacity=.5;this.shadowRoot.getElementById("fire").style.opacity=1;this.shadowRoot.getElementById("take-action").style.opacity=1;this._selectedAction=_battleSim.fire}stateChanged(state){this._actionMessages=[];if(state.battle.battles.length>state.battle.activeBattle){let activeBattle=state.battle.battles[state.battle.activeBattle];this._unit=new _battleSim.$unitDefault(activeBattle.units[activeBattle.activeUnit]);this._hasActiveBattle=!0}else{this._hasActiveBattle=!1}}}window.customElements.define("fight-view",FightView)});