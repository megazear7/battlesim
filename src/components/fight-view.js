import { html, css } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { PageViewElement } from './page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';
import { rest, move, charge, fire } from '../actions/battle.js';
import battle from '../reducers/battle.js';
import { SharedStyles } from './shared-styles.js';
import { ButtonSharedStyles } from './button-shared-styles.js';

store.addReducers({
  battle
});

class FightView extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      _targets: { type: Object },
      _army: { type: Object },
      _activeUnit: { type: Object }
    };
  }

  static get styles() {
    return [
      SharedStyles,
      ButtonSharedStyles,
      css`
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
      `
    ];
  }

  render() {
    return html`
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
            ${repeat(this._targets, target => html`
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
    `;
  }

  get distance() {
    return parseInt(this.shadowRoot.getElementById('distance').value);
  }

  get uphill() {
    return this.shadowRoot.getElementById('uphill').value === 'on';
  }

  get terrain() {
    return this.shadowRoot.getElementById('terrain').value === 'on';
  }

  get target() {
    return this.shadowRoot.getElementById('target').value;
  }

  get situation() {
    return {
      distance: this.distance,
      uphill: this.uphill,
      terrain: this.terrain,
      target: this.target
    }
  }

  _takeAction() {
    // TODO
  }

  _move() {
    store.dispatch(move(this.situation));
  }

  _charge() {
    store.dispatch(charge(this.situation));
  }

  _rest() {
    store.dispatch(rest());
  }

  _fire() {
    store.dispatch(fire(this.situation));
  }

  // This is called every time something is updated in the store.
  stateChanged(state) {
    let targets = state.battle.units.map((unit, index) => ({ id: index, unit: unit}));
    // This is a new array of units with everything but the active unit.
    this._targets = targets.slice(0, state.battle.activeUnit).concat(targets.slice(state.battle.activeUnit + 1, targets.length));
    this._activeUnit = state.battle.units[state.battle.activeUnit];
    this._army = state.battle.armies[this._activeUnit.army];
  }
}

window.customElements.define('fight-view', FightView);
