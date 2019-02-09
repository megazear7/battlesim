define(["./battle-sim.js"],function(_battleSim){"use strict";class CreateView extends _battleSim.PageViewElement{static get styles(){return[_battleSim.SharedStyles]}render(){return _battleSim.html`
      <section>
        <h2>Create Battle</h2>
      </section>
      <section>
        <h2>Add Unit</h2>
      </section>
      <section>
        <div>
          <a href="/view2">Begin Battle</a>
        </div>
      </section>
    `}}window.customElements.define("create-view",CreateView)});