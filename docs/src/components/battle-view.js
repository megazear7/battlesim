define(["./battle-sim.js"],function(_battleSim){"use strict";_battleSim.store.addReducers({battle:_battleSim.$battleDefault});class BattleView extends(0,_battleSim.connect)(_battleSim.store)(_battleSim.PageViewElement){static get properties(){return{_army0Units:{type:Object},_army1Units:{type:Object}}}static get styles(){return[_battleSim.SharedStyles,_battleSim.ButtonSharedStyles,_battleSim.css`
        #added-message {
          opacity: 0;
          display: none;
          color: green;
          transition: opacity 300ms;
        }
        #error {
          opacity: 0;
          color: red;
          transition: opacity 300ms;
        }
        h5 {
          margin-top: 0;
        }
        .unit {
          border-bottom: 1px solid black;
          padding: 1rem 0;
        }
        .unit:last-child {
          border-bottom: 0;
        }
        .unit:hover h5 {
          color: var(--app-primary-color);
        }
      `]}render(){return _battleSim.html`
      <section>
        <div>
          <h3>${this._army0Name}</h3>
          ${(0,_battleSim.repeat)(this._army0Units,({index,unit})=>_battleSim.html`
            <div class="unit" data-index="${index}">
              <h5 class="unit-name">${unit.name}</h5>
              <button class="btn-link remove-unit" @click="${this._remove}">Remove</button>
            </div>
          `)}
        </div>
      </section>
      <section>
        <div>
          <h3>${this._army1Name}</h3>
          ${(0,_battleSim.repeat)(this._army1Units,({index,unit})=>_battleSim.html`
            <div class="unit" data-index="${index}">
              <h5 class="unit-name">${unit.name}</h5>
              <button class="btn-link remove-unit" @click="${this._remove}">Remove</button>
            </div>
          `)}
        </div>
      </section>
      <section>
        <h2>Add Unit</h2>
        <div>
          <p>TODO Instead of giving the user stat fields to enter just allow them to
          select from a list of unit types that can be chosen based upon the chosen battle.</p>
          <select id="army">
            <option value="0">Brittish</option>
            <option value="1">Americans</option>
          </select>
          <br>
          <input id="name" type="text" placeholder="Name"></input>
          <br>
          <input id="hp" type="number" placeholder="HP"></input>
          <br>
          <input id="speed" type="number" placeholder="Speed"></input>
          <br>
          <input id="energy" type="number" placeholder="Energy"></input>
          <br>
          <button @click="${this._add}">Add</button>
          <p class="error">All fields need valid input.</p>
          <p id="added-message">Unit Added!</p>
        </div>
      </section>
    `}get army(){return parseInt(this.shadowRoot.getElementById("army").value)}get name(){return this.shadowRoot.getElementById("name").value}get hp(){return parseInt(this.shadowRoot.getElementById("hp").value)}get speed(){return parseInt(this.shadowRoot.getElementById("speed").value)}get energy(){return parseInt(this.shadowRoot.getElementById("energy").value)}get stats(){return{army:this.army,name:this.name,hp:this.hp,speed:this.speed,energy:this.energy}}get statsValid(){let stats=this.stats;return"undefined"!==typeof stats.army&&0<stats.name.length&&0<stats.hp&&0<stats.speed&&0<stats.energy}_remove(e){let unit=e.target.closest(".unit"),name=unit.querySelector(".unit-name").innerText;if(confirm(`Are you sure you want to delete "${name}"?`)){_battleSim.store.dispatch((0,_battleSim.remove)(unit.dataset.index))}}_add(){if(this.statsValid){_battleSim.store.dispatch((0,_battleSim.add)(this.stats));this.shadowRoot.getElementById("army").value="0";this.shadowRoot.getElementById("name").value="";this.shadowRoot.getElementById("hp").value="";this.shadowRoot.getElementById("speed").value="";this.shadowRoot.getElementById("energy").value="";let addedMessage=this.shadowRoot.getElementById("added-message");addedMessage.style.opacity="1";addedMessage.style.display="block";setTimeout(()=>{addedMessage.style.opacity="0";addedMessage.style.display="none"},3e3)}else{this.shadowRoot.querySelector(".error").style.opacity="1";this.shadowRoot.querySelector(".error").style.display="block";setTimeout(()=>{this.shadowRoot.querySelector(".error").style.opacity="0";this.shadowRoot.querySelector(".error").style.display="none"},3e3)}}stateChanged(state){var activeBattle=state.battle.battles[state.battle.activeBattle];let units=activeBattle.units.map((unit,index)=>({index,unit}));this._army0Units=units.filter(({unit})=>0===unit.army);this._army1Units=units.filter(({unit})=>1===unit.army);this._army0Name=activeBattle.armies[0].name;this._army1Name=activeBattle.armies[1].name}}window.customElements.define("battle-view",BattleView)});