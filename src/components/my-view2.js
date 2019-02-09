/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from 'lit-element';
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

class MyView2 extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      _activeUnit: { type: Object }
    };
  }

  static get styles() {
    return [
      SharedStyles
    ];
  }

  render() {
    return html`
      <section>
        <p>Hello</p>
        <div>
          <div>${this._activeUnit.name}</div>
          <div>HP: ${this._activeUnit.hp}</div>
          <div>Speed: ${this._activeUnit.speed}</div>
          <div>Energy: ${this._activeUnit.energy}</div>
          <input id="distance" type="number" placeholder="Distance"></input>
          <br>
          <button @click="${this._rest}">Rest</button>
          <br>
          <button @click="${this._move}">Move</button>
          <br>
          <button @click="${this._charge}">Charge</button>
          <br>
          <button @click="${this._fire}">Fire</button>
        </div>
      </section>
    `;
  }

  _move() {
    store.dispatch(move(this.shadowRoot.getElementById('distance').value));
  }

  _charge() {
    store.dispatch(charge(this.shadowRoot.getElementById('distance').value));
  }

  _rest() {
    store.dispatch(rest());
  }

  _fire() {
    store.dispatch(fire());
  }

  // This is called every time something is updated in the store.
  stateChanged(state) {
    this._activeUnit = state.battle.units[state.battle.activeUnit];
  }
}

window.customElements.define('my-view2', MyView2);
