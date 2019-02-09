define(["./battle-sim.js"],function(_battleSim){"use strict";_battleSim.store.addReducers({battle:_battleSim.$battleDefault});class FightView extends(0,_battleSim.connect)(_battleSim.store)(_battleSim.PageViewElement){static get properties(){return{_targets:{type:Object},_army:{type:Object},_activeUnit:{type:Object}}}static get styles(){return[_battleSim.SharedStyles,_battleSim.ButtonSharedStyles,_battleSim.css`
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
        </div>
        <p>Show unit status textual description.</p>
        <p>Show unit description. i.e. experience level, weaponry, etc...</p>
        <p>Dont show situational details until after the user selects an action.
          Upon selecting an action they are then given the fields that they need to input data for and given extra info such as how far they can move or fire, etc...
          After submitting the action they are told the result such as if any unit took casualties or if the unit refused etc...
          and if any follow up actions are needed such as retreats or remove a unit from  the board, etc...</p>
        <div>
          <button @click="${this._rest}">Rest</button>
          <button @click="${this._move}">Move</button>
          <button @click="${this._charge}">Charge</button>
          <button @click="${this._fire}">Fire</button>
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
        <div>
          <button @click="${this._takeAction}">Take Action</button>
        </div>

      </section>
    `}get distance(){return parseInt(this.shadowRoot.getElementById("distance").value)}get uphill(){return"on"===this.shadowRoot.getElementById("uphill").value}get terrain(){return"on"===this.shadowRoot.getElementById("terrain").value}get target(){return this.shadowRoot.getElementById("target").value}get situation(){return{distance:this.distance,uphill:this.uphill,terrain:this.terrain,target:this.target}}_takeAction(){}_move(){_battleSim.store.dispatch((0,_battleSim.move)(this.situation))}_charge(){_battleSim.store.dispatch((0,_battleSim.charge)(this.situation))}_rest(){_battleSim.store.dispatch((0,_battleSim.rest)())}_fire(){_battleSim.store.dispatch((0,_battleSim.fire)(this.situation))}stateChanged(state){this._activeUnit=state.battle.units[state.battle.activeUnit];this._targets=state.battle.units.filter(unit=>unit.army!==this._activeUnit.army).map((unit,index)=>({id:index,unit:unit}));this._army=state.battle.armies[this._activeUnit.army]}}window.customElements.define("fight-view",FightView)});