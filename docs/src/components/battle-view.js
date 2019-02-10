define(["./battle-sim.js"],function(_battleSim){"use strict";_battleSim.store.addReducers({battle:_battleSim.$battleDefault});class BattleView extends(0,_battleSim.connect)(_battleSim.store)(_battleSim.PageViewElement){static get properties(){return{_army0Units:{type:Object},_army1Units:{type:Object}}}static get styles(){return[_battleSim.SharedStyles,_battleSim.ButtonSharedStyles,_battleSim.css`
        #added-message {
          opacity: 0;
          color: green;
          transition: opacity 300ms;
        }
        #error-message {
          opacity: 0;
          color: red;
          transition: opacity 300ms;
        }
        .remove-unit {
          float: right;
        }
      `]}render(){return _battleSim.html`
      <section>
        <div>
          <h3>${this._army0Name}</h3>
          <hr>
          ${(0,_battleSim.repeat)(this._army0Units,({index,unit})=>_battleSim.html`
            <div class="unit" data-index="${index}">
              ${unit.name}
              <button class="btn-link remove-unit" @click="${this._remove}">Remove</button>
              <hr>
            </div>
          `)}
        </div>
      </section>
      <section>
        <div>
          <h3>${this._army1Name}</h3>
          <hr>
          ${(0,_battleSim.repeat)(this._army1Units,({index,unit})=>_battleSim.html`
            <div class="unit" data-index="${index}">
              ${unit.name}
              <button class="btn-link remove-unit" @click="${this._remove}">Remove</button>
              <hr>
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
          <br>
          <p id="added-message">Unit Added!</p>
          <p id="error-message">All fields need valid input.</p>
        </div>
      </section>
    `}get army(){return parseInt(this.shadowRoot.getElementById("army").value)}get name(){return this.shadowRoot.getElementById("name").value}get hp(){return parseInt(this.shadowRoot.getElementById("hp").value)}get speed(){return parseInt(this.shadowRoot.getElementById("speed").value)}get energy(){return parseInt(this.shadowRoot.getElementById("energy").value)}get stats(){return{army:this.army,name:this.name,hp:this.hp,speed:this.speed,energy:this.energy}}get statsValid(){let stats=this.stats;return"undefined"!==typeof stats.army&&0<stats.name.length&&0<stats.hp&&0<stats.speed&&0<stats.energy}_remove(e){_battleSim.store.dispatch((0,_battleSim.remove)(e.target.closest(".unit").dataset.index))}_add(){if(this.statsValid){_battleSim.store.dispatch((0,_battleSim.add)(this.stats));this.shadowRoot.getElementById("army").value="0";this.shadowRoot.getElementById("name").value="";this.shadowRoot.getElementById("hp").value="";this.shadowRoot.getElementById("speed").value="";this.shadowRoot.getElementById("energy").value="";this.shadowRoot.getElementById("added-message").style.opacity="1";setTimeout(()=>this.shadowRoot.getElementById("added-message").style.opacity="0",3e3)}else{this.shadowRoot.getElementById("error-message").style.opacity="1";setTimeout(()=>this.shadowRoot.getElementById("error-message").style.opacity="0",3e3)}}stateChanged(state){var activeBattle=state.battle.battles[state.battle.activeBattle];let units=activeBattle.units.map((unit,index)=>({index,unit}));this._army0Units=units.filter(({unit})=>0===unit.army);this._army1Units=units.filter(({unit})=>1===unit.army);this._army0Name=activeBattle.armies[0].name;this._army1Name=activeBattle.armies[1].name}}window.customElements.define("battle-view",BattleView)});