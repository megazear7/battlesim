define(["exports","./battle-sim.js"],function(_exports,_battleSim){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.getRadioVal=getRadioVal;_exports.$domUtils=void 0;function getRadioVal(container,name){for(var val,radios=container.querySelectorAll(`[name="${name}"]`),i=0,len=radios.length;i<len;i++){if(radios[i].checked){val=radios[i].value;break}}return val}var domUtils={getRadioVal:getRadioVal};_exports.$domUtils=domUtils;const REST="REST",MOVE="MOVE",CHARGE="CHARGE",FIRE="FIRE";class FightView extends(0,_battleSim.connect)(_battleSim.store)(_battleSim.PageViewElement){static get properties(){return{_unit:{type:Object},_hasActiveBattle:{type:Boolean},_actionMessages:{type:Array},_date:{type:Object}}}static get styles(){return[_battleSim.SharedStyles,_battleSim.ButtonSharedStyles,_battleSim.css`
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
            <div id="time-of-day">${(0,_battleSim.prettyDateTime)(this._date)}</div>
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
          <div id="input-container">
            <input id="distance" class="hidden" type="number" placeholder="Distance (Leave blank to move as far as possible)"></input>
            <input id="separation" class="hidden" type="number" placeholder="Distance to enemy unit"></input>
            <input id="engaged-attackers" class="hidden" type="number" placeholder="Engaged Attacking Stands (Leave blank for all)"></input>
            <input id="engaged-defenders" class="hidden" type="number" placeholder="Engaged Defending Stands (Leave blank for all)"></input>
            <select id="target" class="hidden">
              <option value="">Select Target</option>
              ${(0,_battleSim.repeat)(this._unit.targets,target=>_battleSim.html`
                <option value="${target.id}">${target.unit.name}</option>
              `)}
            </select>
            <br>
            <br>
            <div id="hill" class="hidden">
              <radiogroup>
                <input type="radio" name="hill" value="up"> Uphill<br>
                <input type="radio" name="hill" value="down"> Downhill<br>
                <input type="radio" name="hill" value="neither"> Neither<br><br>
              </radiogroup>
            </div>
            <div id="leader" class="hidden">
              <radiogroup>
                <input type="radio" name="leader" value="general"> General<br>
                <input type="radio" name="leader" value="subcommander"> Subcommander<br>
                <input type="radio" name="leader" value="neither"> None<br><br>
              </radiogroup>
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
              <p>${message}</p>
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
    `}get distanceElement(){return this.shadowRoot.getElementById("distance")}get separationElement(){return this.shadowRoot.getElementById("separation")}get engagedAttackingElement(){return this.shadowRoot.getElementById("engaged-attackers")}get engagedDefendingElement(){return this.shadowRoot.getElementById("engaged-defenders")}get hillContainer(){return this.shadowRoot.getElementById("hill")}get leaderContainer(){return this.shadowRoot.getElementById("leader")}get terrainContainer(){return this.shadowRoot.getElementById("terrain")}get targetElement(){return this.shadowRoot.getElementById("target")}get errorElement(){return this.shadowRoot.querySelector(".error")}get distance(){return parseInt(""===this.distanceElement.value?0:this.distanceElement.value)}get separation(){return parseInt(this.separationElement.value?this.separationElement.value:0)}get engagedAttackers(){return parseInt(""===this.engagedAttackingElement.value?0:this.engagedAttackingElement.value)}get engagedDefenders(){return parseInt(""===this.engagedDefendingElement.value?0:this.engagedDefendingElement.value)}get uphill(){return"up"===getRadioVal(this.shadowRoot.getElementById("input-container"),"hill")}get generalNearby(){return"general"===getRadioVal(this.shadowRoot.getElementById("input-container"),"leader")}get subcommanderNearby(){return"subcommander"===getRadioVal(this.shadowRoot.getElementById("input-container"),"leader")}get terrain(){return this.terrainContainer.querySelector("input").checked}get target(){return parseInt(this.targetElement.value)}get terrainModifier(){if(this.uphill&&this.terrain){return 60}else if(this.uphill){return 40}else if(this.terrain){return 20}else{return 0}}get validSituation(){if(this._selectedAction===REST){return!0}else if(this._selectedAction===MOVE){return!0}else if(this._selectedAction===CHARGE){return!isNaN(this.target)}else if(this._selectedAction===FIRE){return!isNaN(this.target)}else{return!1}}get _actionMessageElement(){return this.shadowRoot.getElementById("action-message")}_progressToNextAction(){_battleSim.store.dispatch((0,_battleSim.takeAction)(this._actionUpdates));this._actionUpdate={};this.shadowRoot.getElementById("actions").style.display="block";this.shadowRoot.getElementById("take-action").style.display="block";this.shadowRoot.getElementById("action-result").style.display="none";this._actionMessageElement.innerText=""}_takeAction(){if(this.validSituation){let actionResult;if(this._selectedAction===REST){actionResult=this._unit.rest()}else if(this._selectedAction===MOVE){actionResult=this._unit.move(100*this.distance,this.terrainModifier)}else if(this._selectedAction===CHARGE){let defender=new _battleSim.$unitDefault(this._activeBattle.units[this.target],this.target);actionResult=this._unit.charge(this.separation,this.terrainModifier,this.uphill,this.downhill,this.engagedAttackers,this.engagedDefenders,this.general,this.subcommander,defender)}else if(this._selectedAction===FIRE){let defender=new _battleSim.$unitDefault(this._activeBattle.units[this.target],this.target);actionResult=this._unit.fire(this.separation,this.terrainModifier,this.uphill,this.downhill,this.engagedAttackers,this.engagedDefenders,this.general,this.subcommander,defender)}this._actionMessages=actionResult.messages;this._actionUpdates=actionResult.updates;this._removeSelection();this.shadowRoot.getElementById("move").style.opacity=1;this.shadowRoot.getElementById("charge").style.opacity=1;this.shadowRoot.getElementById("rest").style.opacity=1;this.shadowRoot.getElementById("fire").style.opacity=1;this.shadowRoot.getElementById("take-action").style.opacity=0;this.distanceElement.value="";this.separationElement.value="";this.engagedAttackingElement.value="";this.engagedDefendingElement.value="";this.hillContainer.querySelectorAll("input").forEach(input=>input.checked=!1);this.leaderContainer.querySelectorAll("input").forEach(input=>input.checked=!1);this.terrainContainer.querySelector("input").checked=!1;this.targetElement.value="";this.shadowRoot.getElementById("take-action").style.display="none";this.shadowRoot.getElementById("actions").style.display="none";this.shadowRoot.getElementById("action-result").style.display="block"}else{this.errorElement.style.opacity="1";this.errorElement.style.display="block";setTimeout(()=>{this.errorElement.style.opacity="0";this.errorElement.style.display="none"},3e3)}}_removeSelection(){[...this.shadowRoot.querySelectorAll("button")].forEach(button=>button.classList.remove("selected"));this.distanceElement.classList.add("hidden");this.separationElement.classList.add("hidden");this.engagedAttackingElement.classList.add("hidden");this.engagedDefendingElement.classList.add("hidden");this.hillContainer.classList.add("hidden");this.leaderContainer.classList.add("hidden");this.terrainContainer.classList.add("hidden");this.targetElement.classList.add("hidden")}_move(e){this._removeSelection();e.target.classList.add("selected");this.distanceElement.classList.remove("hidden");this.hillContainer.classList.remove("hidden");this.leaderContainer.classList.remove("hidden");this.terrainContainer.classList.remove("hidden");this.shadowRoot.getElementById("move").style.opacity=1;this.shadowRoot.getElementById("charge").style.opacity=.5;this.shadowRoot.getElementById("rest").style.opacity=.5;this.shadowRoot.getElementById("fire").style.opacity=.5;this.shadowRoot.getElementById("take-action").style.opacity=1;this._selectedAction=MOVE}_charge(e){this._removeSelection();e.target.classList.add("selected");this.separationElement.classList.remove("hidden");this.engagedAttackingElement.classList.remove("hidden");this.engagedDefendingElement.classList.remove("hidden");this.hillContainer.classList.remove("hidden");this.leaderContainer.classList.remove("hidden");this.terrainContainer.classList.remove("hidden");this.targetElement.classList.remove("hidden");this.shadowRoot.getElementById("move").style.opacity=.5;this.shadowRoot.getElementById("charge").style.opacity=1;this.shadowRoot.getElementById("rest").style.opacity=.5;this.shadowRoot.getElementById("fire").style.opacity=.5;this.shadowRoot.getElementById("take-action").style.opacity=1;this._selectedAction=CHARGE}_rest(e){this._removeSelection();e.target.classList.add("selected");this.shadowRoot.getElementById("move").style.opacity=.5;this.shadowRoot.getElementById("charge").style.opacity=.5;this.shadowRoot.getElementById("rest").style.opacity=1;this.shadowRoot.getElementById("fire").style.opacity=.5;this.shadowRoot.getElementById("take-action").style.opacity=1;this._selectedAction=REST}_fire(e){this._removeSelection();e.target.classList.add("selected");this.separationElement.classList.remove("hidden");this.engagedAttackingElement.classList.remove("hidden");this.engagedDefendingElement.classList.remove("hidden");this.hillContainer.classList.remove("hidden");this.leaderContainer.classList.remove("hidden");this.terrainContainer.classList.remove("hidden");this.targetElement.classList.remove("hidden");this.shadowRoot.getElementById("move").style.opacity=.5;this.shadowRoot.getElementById("charge").style.opacity=.5;this.shadowRoot.getElementById("rest").style.opacity=.5;this.shadowRoot.getElementById("fire").style.opacity=1;this.shadowRoot.getElementById("take-action").style.opacity=1;this._selectedAction=FIRE}stateChanged(state){this._actionMessages=[];if(state.battle.battles.length>state.battle.activeBattle){this._activeBattle=state.battle.battles[state.battle.activeBattle];this._unit=new _battleSim.$unitDefault(this._activeBattle.units[this._activeBattle.activeUnit],this._activeBattle.activeUnit);this._date=new Date(this._activeBattle.startTime+1e3*this._activeBattle.second);this._hasActiveBattle=!0}else{this._hasActiveBattle=!1}}}window.customElements.define("fight-view",FightView)});