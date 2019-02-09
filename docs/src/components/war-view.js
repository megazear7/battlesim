define(["./battle-sim.js"],function(_battleSim){"use strict";_battleSim.store.addReducers({battle:_battleSim.$battleDefault});class WarView extends(0,_battleSim.connect)(_battleSim.store)(_battleSim.PageViewElement){static get properties(){return{}}static get styles(){return[_battleSim.SharedStyles,_battleSim.ButtonSharedStyles,_battleSim.css`
      `]}render(){return _battleSim.html`
      <section>
        <p>You will be able to create new battles and select a battle to play from here</p>
        <p>TODO: List battles and make them selectable. Upon selecting a battle it becomes the active battle and the other three views reference it for the battle overview, the fighting and taking actions, and the rules.</p>
      </section>
      <section>
        <div>
          Name:
          <input id="name" type="text" placeholder="Name the Battle"></input>
          <br>
          Battle:
          <select id="target">
            <option value="0">Generic Revolutionary War</option>
            <option value="1">Bunker Hill</option>
            <option value="2">Chelsea Creek</option>
            <option value="3">Battle of Saint-Pierre</option>
          </select>
          <br>
          <button @click="${this._create}">Create</button>
        </div>
      </section>
    `}_create(){}stateChanged(state){}}window.customElements.define("war-view",WarView)});