/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html, css } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { PageViewElement } from './page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { store } from '../store.js';

// These are the actions needed by this element.
import { rest, move, charge, fire } from '../actions/battle.js';

// We are lazy loading its reducer.
import battle from '../reducers/battle.js';
store.addReducers({
  battle
});

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';
import { ButtonSharedStyles } from './button-shared-styles.js';

class BattleView extends connect(store)(PageViewElement) {
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
            ${repeat(this._targets, target => html`
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
    `;
  }

  get distance() {
    return this.shadowRoot.getElementById('distance').value;
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

window.customElements.define('battle-view', BattleView);
