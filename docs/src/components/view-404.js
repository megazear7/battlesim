define(["./battle-sim.js"],function(_battleSim){"use strict";class View404 extends _battleSim.PageViewElement{static get styles(){return[_battleSim.SharedStyles]}render(){return _battleSim.html`
      <section>
        <h2>Oops! You hit a 404</h2>
        <p>
          The page you're looking for doesn't seem to exist. Head back
          <a href="/">home</a> and try again?
        </p>
      </section>
    `}}window.customElements.define("view-404",View404)});