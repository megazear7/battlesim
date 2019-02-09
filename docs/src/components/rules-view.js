define(["./battle-sim.js"],function(_battleSim){"use strict";class RulesView extends _battleSim.PageViewElement{static get properties(){return{}}static get styles(){return[_battleSim.SharedStyles]}render(){return _battleSim.html`
      <section>
        <h2>Rules</h2>
        <p>
          Here are the rules
        </p>
        <p>
          TODO show battle specific rules here.
        </p>
      </section>
    `}}window.customElements.define("rules-view",RulesView)});