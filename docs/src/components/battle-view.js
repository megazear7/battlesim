define(["./battle-sim.js"],function(_battleSim){"use strict";class BattleView extends(0,_battleSim.connect)(_battleSim.store)(_battleSim.PageViewElement){static get properties(){return{_army0Units:{type:Object},_army1Units:{type:Object},_allUnitTemplates:{type:Object},_unitTemplates:{type:Object},_hasActiveBattle:{type:Boolean}}}static get styles(){return[_battleSim.SharedStyles,_battleSim.ButtonSharedStyles,_battleSim.css`
        #added-message {
          opacity: 0;
          display: none;
          color: green;
          transition: opacity 300ms;
        }
        h4 {
          margin-bottom: 0.5rem;
        }
        .unit {
          border-bottom: 1px solid black;
          padding-bottom: 1rem;
        }
        .unit:last-child {
          border-bottom: 0;
        }
        .unit:hover h5 {
          color: var(--app-primary-color);
        }
      `]}render(){return _battleSim.html`
      ${this._hasActiveBattle?_battleSim.html`
        ${(0,_battleSim.repeat)(this.armies,({name,units})=>_battleSim.html`
          <section>
            <h3>${name}</h3>
            ${(0,_battleSim.repeat)(units,({index,unit})=>_battleSim.html`
              <div class="unit" data-index="${index}">
                <h4 class="unit-name">${unit.name}</h4>
                <button class="btn-link remove-unit" @click="${this._remove}">Remove</button>
                <p>${unit.detailedStatus}</p>
                <p>${unit.desc}</p>
              </div>
            `)}
          </section>
        `)}
        <section>
          <h3>Add Unit</h3>
          <div>
            <select id="army" @change="${this._armyChanged}">
              <option value="0">${this._army0Name}</option>
              <option value="1">${this._army1Name}</option>
            </select>
            <select id="unit-template">
              <option>Select Unit To Add (Required)</option>
              ${(0,_battleSim.repeat)(this._unitTemplates,({id,unit})=>_battleSim.html`
                <option value="${id}">${unit.name}</option>
              `)}
            </select>
            <input id="name" type="text" placeholder="Optionally Change the Units Name"></input>
            <button @click="${this._add}">Add</button>
            <p class="error hidden">You must select a type of unit to add.</p>
            <p id="added-message">Unit Added!</p>
          </div>
        </section>
      `:_battleSim.html`
        <section>
          <p>No active battle. Go to the war tab and either select a battle or create a new battle.</p>
        </section>
      `}
    `}get armies(){return[{name:this._army0Name,units:this._army0Units},{name:this._army1Name,units:this._army1Units}]}get armyElement(){return this.shadowRoot.getElementById("army")}get army(){if(this.armyElement){return parseInt(this.armyElement.value)}else{return 0}}get unitTemplateElement(){return this.shadowRoot.getElementById("unit-template")}get unitTemplate(){return parseInt(this.unitTemplateElement.value)}_armyChanged(){this._unitTemplates=this._allUnitTemplates.filter(({unit})=>unit.army===this.army)}get name(){return this.shadowRoot.getElementById("name").value}get statsValid(){return!isNaN(this.unitTemplate)}_remove(e){let unit=e.target.closest(".unit"),name=unit.querySelector(".unit-name").innerText;if(confirm(`Are you sure you want to delete "${name}"?`)){_battleSim.store.dispatch((0,_battleSim.remove)(unit.dataset.index))}}_add(){if(this.statsValid){_battleSim.store.dispatch((0,_battleSim.add)(this.unitTemplate,this.name));this.shadowRoot.getElementById("army").value="0";this.shadowRoot.getElementById("name").value="";let addedMessage=this.shadowRoot.getElementById("added-message");addedMessage.style.opacity="1";addedMessage.style.display="block";setTimeout(()=>{addedMessage.style.opacity="0";addedMessage.style.display="none"},3e3)}else{this.shadowRoot.querySelector(".error").classList.remove("hidden");setTimeout(()=>{this.shadowRoot.querySelector(".error").classList.add("hidden")},3e3)}}stateChanged(state){if(state.battle.battles.length>state.battle.activeBattle){var activeBattle=state.battle.battles[state.battle.activeBattle];let units=activeBattle.units.map((unit,index)=>({index,unit:new _battleSim.$unitDefault(unit,index)}));this._army0Units=units.filter(({unit})=>0===unit.armyIndex);this._army1Units=units.filter(({unit})=>1===unit.armyIndex);this._army0Name=activeBattle.armies[0].name;this._army1Name=activeBattle.armies[1].name;this._allUnitTemplates=activeBattle.unitTemplates.map((unit,index)=>({id:index,unit}));this._unitTemplates=this._allUnitTemplates.filter(({unit})=>unit.army===this.army);this._hasActiveBattle=!0}else{this._hasActiveBattle=!1}}}window.customElements.define("battle-view",BattleView)});