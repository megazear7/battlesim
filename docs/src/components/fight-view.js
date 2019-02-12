define(["./battle-sim.js"],function(_battleSim){"use strict";const REST="REST",MOVE="MOVE",CHARGE="CHARGE",FIRE="FIRE";class FightView extends(0,_battleSim.connect)(_battleSim.store)(_battleSim.PageViewElement){static get properties(){return{_unit:{type:Object},_hasActiveBattle:{type:Boolean},_actionMessages:{type:Array},_date:{type:Object}}}static get styles(){return[_battleSim.SharedStyles,_battleSim.ButtonSharedStyles,_battleSim.css`
        #unit {
          text-align: center;
          font-size: 2rem;
        }
        #army {
          text-align: center;
          color: var(--app-muted-text-color);
        }
        #time-of-day {
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
            <div id="time-of-day">${this.prettyDateTime}</div>
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
    `}get prettyDateTime(){var strArray=["January","February","March","April","May","June","July","August","September","October","November","December"],d=this._date.getDate(),m=strArray[this._date.getMonth()],y=this._date.getFullYear(),suf;if(1===d){suf="st"}else if(2===d){suf="nd"}else if(3===d){suf="rd"}else{suf="th"}var hour,hourSuf;if(12<=this._date.getHours()){hour=this._date.getHours()-12;hourSuf="pm"}else{hour=this._date.getHours();hourSuf="am"}var minutes=9<this._date.getMinutes()?""+this._date.getMinutes():"0"+this._date.getMinutes();return`${hour}:${minutes} ${hourSuf} on ${m} ${d}${suf}, ${y}`}get distanceElement(){return this.shadowRoot.getElementById("distance")}get uphillContainer(){return this.shadowRoot.getElementById("uphill")}get terrainContainer(){return this.shadowRoot.getElementById("terrain")}get targetElement(){return this.shadowRoot.getElementById("target")}get errorElement(){return this.shadowRoot.querySelector(".error")}get distance(){return parseInt(""===this.distanceElement.value?0:this.distanceElement.value)}get uphill(){return this.uphillContainer.querySelector("input").checked}get terrain(){return this.terrainContainer.querySelector("input").checked}get target(){return parseInt(this.targetElement.value)}get situation(){return{distance:this.distance,uphill:this.uphill,terrain:this.terrain,target:this.target}}get terrainModifier(){if(this.uphill&&this.terrain){return 60}else if(this.uphill){return 40}else if(this.terrain){return 20}else{return 0}}get validSituation(){if(this._selectedAction===REST){return!0}else if(this._selectedAction===MOVE){return!0}else if(this._selectedAction===CHARGE){return 0<this.distance&&!isNaN(this.target)}else if(this._selectedAction===FIRE){return 0<this.distance&&!isNaN(this.target)}else{return!1}}get _actionMessageElement(){return this.shadowRoot.getElementById("action-message")}_progressToNextAction(){_battleSim.store.dispatch((0,_battleSim.takeAction)(this._actionUpdates));this._actionUpdate={};this.shadowRoot.getElementById("actions").style.display="block";this.shadowRoot.getElementById("take-action").style.display="block";this.shadowRoot.getElementById("action-result").style.display="none";this._actionMessageElement.innerText=""}_takeAction(){if(this.validSituation){let actionResult;if(this._selectedAction===REST){actionResult=this._unit.rest()}else if(this._selectedAction===MOVE){actionResult=this._unit.move(100*this.distance,this.terrainModifier)}else if(this._selectedAction===CHARGE){actionResult=this._unit.charge()}else if(this._selectedAction===FIRE){actionResult=this._unit.fire()}this._actionMessages=actionResult.messages;this._actionUpdates=actionResult.updates;this._removeSelection();this.shadowRoot.getElementById("move").style.opacity=1;this.shadowRoot.getElementById("charge").style.opacity=1;this.shadowRoot.getElementById("rest").style.opacity=1;this.shadowRoot.getElementById("fire").style.opacity=1;this.shadowRoot.getElementById("take-action").style.opacity=0;this.distanceElement.value="";this.uphillContainer.querySelector("input").checked=!1;this.terrainContainer.querySelector("input").checked=!1;this.targetElement.value="";this.shadowRoot.getElementById("take-action").style.display="none";this.shadowRoot.getElementById("actions").style.display="none";this.shadowRoot.getElementById("action-result").style.display="block"}else{this.errorElement.style.opacity="1";this.errorElement.style.display="block";setTimeout(()=>{this.errorElement.style.opacity="0";this.errorElement.style.display="none"},3e3)}}_removeSelection(){[...this.shadowRoot.querySelectorAll("button")].forEach(button=>button.classList.remove("selected"));this.distanceElement.classList.add("hidden");this.uphillContainer.classList.add("hidden");this.terrainContainer.classList.add("hidden");this.targetElement.classList.add("hidden")}_move(e){this._removeSelection();e.target.classList.add("selected");this.distanceElement.classList.remove("hidden");this.uphillContainer.classList.remove("hidden");this.terrainContainer.classList.remove("hidden");this.shadowRoot.getElementById("move").style.opacity=1;this.shadowRoot.getElementById("charge").style.opacity=.5;this.shadowRoot.getElementById("rest").style.opacity=.5;this.shadowRoot.getElementById("fire").style.opacity=.5;this.shadowRoot.getElementById("take-action").style.opacity=1;this._selectedAction=MOVE}_charge(e){this._removeSelection();e.target.classList.add("selected");this.distanceElement.classList.remove("hidden");this.uphillContainer.classList.remove("hidden");this.terrainContainer.classList.remove("hidden");this.targetElement.classList.remove("hidden");this.shadowRoot.getElementById("move").style.opacity=.5;this.shadowRoot.getElementById("charge").style.opacity=1;this.shadowRoot.getElementById("rest").style.opacity=.5;this.shadowRoot.getElementById("fire").style.opacity=.5;this.shadowRoot.getElementById("take-action").style.opacity=1;this._selectedAction=CHARGE}_rest(e){this._removeSelection();e.target.classList.add("selected");this.shadowRoot.getElementById("move").style.opacity=.5;this.shadowRoot.getElementById("charge").style.opacity=.5;this.shadowRoot.getElementById("rest").style.opacity=1;this.shadowRoot.getElementById("fire").style.opacity=.5;this.shadowRoot.getElementById("take-action").style.opacity=1;this._selectedAction=REST}_fire(e){this._removeSelection();e.target.classList.add("selected");this.distanceElement.classList.remove("hidden");this.terrainContainer.classList.remove("hidden");this.targetElement.classList.remove("hidden");this.shadowRoot.getElementById("move").style.opacity=.5;this.shadowRoot.getElementById("charge").style.opacity=.5;this.shadowRoot.getElementById("rest").style.opacity=.5;this.shadowRoot.getElementById("fire").style.opacity=1;this.shadowRoot.getElementById("take-action").style.opacity=1;this._selectedAction=FIRE}stateChanged(state){this._actionMessages=[];if(state.battle.battles.length>state.battle.activeBattle){let activeBattle=state.battle.battles[state.battle.activeBattle];this._unit=new _battleSim.$unitDefault(activeBattle.units[activeBattle.activeUnit],activeBattle.activeUnit);this._date=new Date(activeBattle.startTime+1e3*activeBattle.second);this._hasActiveBattle=!0}else{this._hasActiveBattle=!1}}}window.customElements.define("fight-view",FightView)});