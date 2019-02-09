define(["./battle-sim.js"],function(_battleSim){"use strict";_battleSim.store.addReducers({battle:_battleSim.$battleDefault});class BattleView extends(0,_battleSim.connect)(_battleSim.store)(_battleSim.PageViewElement){static get properties(){return{_targets:{type:Object},_army:{type:Object},_activeUnit:{type:Object}}}static get styles(){return[_battleSim.SharedStyles,_battleSim.ButtonSharedStyles,_battleSim.css`
        #unit {
          text-align: center;
          font-size: 2rem;
        }
        #army {
          text-align: center;
          color: var(--app-muted-text-color);
        }
        #situation {
          margin-top: 1rem;
        }
      `]}render(){return _battleSim.html`
      <section>
        <div>
          <div id="unit">${this._activeUnit.name}</div>
          <div id="army">Army: ${this._army.name}</div>
          <div>HP: ${this._activeUnit.hp}</div>
          <div>Speed: ${this._activeUnit.speed}</div>
          <div>Energy: ${this._activeUnit.energy}</div>
        </div>
        <div id="situation">
          Distance:
          <input id="distance" type="number" placeholder="Distance"></input>
          <br>
          Target:
          <select id="target">
            <option></option>
            ${(0,_battleSim.repeat)(this._targets,target=>_battleSim.html`
              <option value="${target.id}">${target.unit.name}</option>
            `)}
          </select>
          <br>
          <input id="uphill" type="checkbox">Uphill</input>
          <br>
          <input id="terrain" type="checkbox">Difficult Terrain</input>
        </div>
        <div>
          <button @click="${this._rest}">Rest</button>
          <button @click="${this._move}">Move</button>
          <button @click="${this._charge}">Charge</button>
          <button @click="${this._fire}">Fire</button>
        </div>
      </section>
    `}get distance(){return parseInt(this.shadowRoot.getElementById("distance").value)}get uphill(){return"on"===this.shadowRoot.getElementById("uphill").value}get terrain(){return"on"===this.shadowRoot.getElementById("terrain").value}get target(){return this.shadowRoot.getElementById("target").value}get situation(){return{distance:this.distance,uphill:this.uphill,terrain:this.terrain,target:this.target}}_move(){_battleSim.store.dispatch((0,_battleSim.move)(this.situation))}_charge(){_battleSim.store.dispatch((0,_battleSim.charge)(this.situation))}_rest(){_battleSim.store.dispatch((0,_battleSim.rest)())}_fire(){_battleSim.store.dispatch((0,_battleSim.fire)(this.situation))}stateChanged(state){let targets=state.battle.units.map((unit,index)=>({id:index,unit:unit}));this._targets=targets.slice(0,state.battle.activeUnit).concat(targets.slice(state.battle.activeUnit+1,targets.length));this._activeUnit=state.battle.units[state.battle.activeUnit];this._army=state.battle.armies[this._activeUnit.army]}}window.customElements.define("battle-view",BattleView)});