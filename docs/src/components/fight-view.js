define(["./battle-sim.js"],function(_battleSim){"use strict";_battleSim.store.addReducers({battle:_battleSim.$battleDefault});class FightView extends(0,_battleSim.connect)(_battleSim.store)(_battleSim.PageViewElement){static get properties(){return{_targets:{type:Object},_army:{type:Object},_activeUnit:{type:Object}}}static get styles(){return[_battleSim.SharedStyles,_battleSim.ButtonSharedStyles,_battleSim.css`
        #unit {
          text-align: center;
          font-size: 2rem;
        }
        #army {
          text-align: center;
          color: var(--app-muted-text-color);
        }
      `]}render(){return _battleSim.html`
      <section>
        <div>
          <div id="unit">${this._activeUnit.name}</div>
          <div id="army">Army: ${this._army.name}</div>
        </div>
        <p>TODO Show unit status textual description. This would be information
        such as the moral and health of the unit. If they are visibly exhausted
        or slow moving. If they have taken casualties, etc...</p>
        <p>TODO Show unit description. This would be information that would
        not change over the course of the game such as how experience the unit
        is, what kind of training they have, what king of weaponry they have, if
        they are mounted, skirmishers, line troops, artillary, etc..</p>
      </section>
      <section>
        <div>
          <button @click="${this._rest}" id="rest">Rest</button>
          <button @click="${this._move}" id="move">Move</button>
          <button @click="${this._charge}" id="charge">Charge</button>
          <button @click="${this._fire}" id="fire">Fire</button>
        </div>
      </section>
      <section>
        <div>
          <input id="distance" class="hidden" type="number" placeholder="Distance"></input>
          <select id="target" class="hidden">
            <option>Select Target</option>
            ${(0,_battleSim.repeat)(this._targets,target=>_battleSim.html`
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
          <p>TODO After they take the action explain the result. Explain if any follow up actions
          are needed such as a retreate or picking up a unit before switching to the next unit.
          Provide a "done" button to move to next unit.<p>
        </div>
      </section>
    `}get distanceElement(){return this.shadowRoot.getElementById("distance")}get uphillContainer(){return this.shadowRoot.getElementById("uphill")}get terrainContainer(){return this.shadowRoot.getElementById("terrain")}get targetElement(){return this.shadowRoot.getElementById("target")}get errorElement(){return this.shadowRoot.querySelector(".error")}get distance(){return parseInt(this.distanceElement.value)}get uphill(){return"on"===this.uphillContainer.querySelector("input").value}get terrain(){return"on"===this.terrainContainer.querySelector("input").value}get target(){return parseInt(this.targetElement.value)}get situation(){return{distance:this.distance,uphill:this.uphill,terrain:this.terrain,target:this.target}}get validSituation(){if(this._selectedAction===_battleSim.rest){return!0}else if(this._selectedAction===_battleSim.move){return 0<this.distance}else if(this._selectedAction===_battleSim.charge){return 0<this.distance&&!isNaN(this.target)}else if(this._selectedAction===_battleSim.fire){return 0<this.distance&&!isNaN(this.target)}else{return!1}}_takeAction(){if(this.validSituation){this._removeSelection();this.shadowRoot.getElementById("move").style.opacity=1;this.shadowRoot.getElementById("charge").style.opacity=1;this.shadowRoot.getElementById("rest").style.opacity=1;this.shadowRoot.getElementById("fire").style.opacity=1;this.shadowRoot.getElementById("take-action").style.opacity=0;this.distanceElement.value="";this.uphillContainer.querySelector("input").checked=!1;this.terrainContainer.querySelector("input").checked=!1;this.targetElement.value="";_battleSim.store.dispatch(this._selectedAction(this.situation))}else{this.errorElement.style.opacity="1";this.errorElement.style.display="block";setTimeout(()=>{this.errorElement.style.opacity="0";this.errorElement.style.display="none"},3e3)}}_removeSelection(){[...this.shadowRoot.querySelectorAll("button")].forEach(button=>button.classList.remove("selected"));this.distanceElement.classList.add("hidden");this.uphillContainer.classList.add("hidden");this.terrainContainer.classList.add("hidden");this.targetElement.classList.add("hidden")}_move(e){this._removeSelection();e.target.classList.add("selected");this.distanceElement.classList.remove("hidden");this.uphillContainer.classList.remove("hidden");this.terrainContainer.classList.remove("hidden");this.shadowRoot.getElementById("move").style.opacity=1;this.shadowRoot.getElementById("charge").style.opacity=.5;this.shadowRoot.getElementById("rest").style.opacity=.5;this.shadowRoot.getElementById("fire").style.opacity=.5;this.shadowRoot.getElementById("take-action").style.opacity=1;this._selectedAction=_battleSim.move}_charge(e){this._removeSelection();e.target.classList.add("selected");this.distanceElement.classList.remove("hidden");this.uphillContainer.classList.remove("hidden");this.terrainContainer.classList.remove("hidden");this.targetElement.classList.remove("hidden");this.shadowRoot.getElementById("move").style.opacity=.5;this.shadowRoot.getElementById("charge").style.opacity=1;this.shadowRoot.getElementById("rest").style.opacity=.5;this.shadowRoot.getElementById("fire").style.opacity=.5;this.shadowRoot.getElementById("take-action").style.opacity=1;this._selectedAction=_battleSim.charge}_rest(e){this._removeSelection();e.target.classList.add("selected");this.shadowRoot.getElementById("move").style.opacity=.5;this.shadowRoot.getElementById("charge").style.opacity=.5;this.shadowRoot.getElementById("rest").style.opacity=1;this.shadowRoot.getElementById("fire").style.opacity=.5;this.shadowRoot.getElementById("take-action").style.opacity=1;this._selectedAction=_battleSim.rest}_fire(e){this._removeSelection();e.target.classList.add("selected");this.distanceElement.classList.remove("hidden");this.terrainContainer.classList.remove("hidden");this.targetElement.classList.remove("hidden");this.shadowRoot.getElementById("move").style.opacity=.5;this.shadowRoot.getElementById("charge").style.opacity=.5;this.shadowRoot.getElementById("rest").style.opacity=.5;this.shadowRoot.getElementById("fire").style.opacity=1;this.shadowRoot.getElementById("take-action").style.opacity=1;this._selectedAction=_battleSim.fire}stateChanged(state){var activeBattle=state.battle.battles[state.battle.activeBattle];this._activeUnit=activeBattle.units[activeBattle.activeUnit];this._targets=activeBattle.units.filter(unit=>unit.army!==this._activeUnit.army).map((unit,index)=>({id:index,unit:unit}));this._army=activeBattle.armies[this._activeUnit.army]}}window.customElements.define("fight-view",FightView)});