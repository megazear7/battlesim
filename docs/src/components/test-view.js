import { html, PageViewElement, SharedStyles, ButtonSharedStyles, $unitDefault as Unit, attack, FRESH_UNION_BRIGADE, FRESH_CONFEDERATE_BRIGADE } from './battle-sim.js';
const SEPARATION = "4";
const TERRAIN_MODIFIER = 0;
const UPHILL = false;
const DOWNHILL = false;
const ENAGED_ATTACKERS = 0;
const ENAGED_DEFENDERS = 0;
const GENERAL = false;
const SUBCOMANDER = false;

class TestView extends PageViewElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return [SharedStyles, ButtonSharedStyles];
  }

  render() {
    var unionUnit = new Unit(FRESH_UNION_BRIGADE, 0);
    var confUnit = new Unit(FRESH_CONFEDERATE_BRIGADE, 1);
    var actionResult = unionUnit.fire(SEPARATION, TERRAIN_MODIFIER, UPHILL, DOWNHILL, ENAGED_ATTACKERS, ENAGED_DEFENDERS, GENERAL, SUBCOMANDER, confUnit);
    let runs = 1000;
    let casualties = 0;

    for (var i = 0; i < runs; i++) {
      casualties += attack(1000, 1, 50, 50, 50, 50, 50, 50);
    }

    console.log('Baseline: ', casualties / runs);
    casualties = 0;

    for (var i = 0; i < runs; i++) {
      casualties += attack(1000, 1, 200, 50, 50, 50, 50, 50);
    }

    console.log('Gun against armor: ', casualties / runs);
    casualties = 0;

    for (var i = 0; i < runs; i++) {
      casualties += attack(1000, 1, 200, 0, 50, 50, 50, 50);
    }

    console.log('Gun against clothes: ', casualties / runs);
    casualties = 0;

    for (var i = 0; i < runs; i++) {
      casualties += attack(50, 20, 500, 0, 50, 50, 50, 50);
    }

    console.log('Cannon against clothes: ', casualties / runs);
    casualties = 0;

    for (var i = 0; i < runs; i++) {
      casualties += attack(50, 20, 500, 50, 50, 50, 50, 50);
    }

    console.log('Cannon against armor: ', casualties / runs);
    return html`
      <section>
        <p>Hello, world</p>
      </section>
    `;
  }

}

window.customElements.define('test-view', TestView);