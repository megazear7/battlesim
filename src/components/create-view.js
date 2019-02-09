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

import { add, remove } from '../actions/battle.js';

import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { store } from '../store.js';

import battle from '../reducers/battle.js';
store.addReducers({
  battle
});

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';
import { ButtonSharedStyles } from './button-shared-styles.js';

class CreateView extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      _army0Units: { type: Object },
      _army1Units: { type: Object },
    };
  }

  static get styles() {
    return [
      SharedStyles,
      ButtonSharedStyles,
      css`
        #added-message {
          opacity: 0;
          color: green;
          transition: opacity 300ms;
        }
        #error-message {
          opacity: 0;
          color: red;
          transition: opacity 300ms;
        }
      `
    ];
  }

  render() {
    return html`
      <section>
        <h2>Add Unit</h2>
        <div>
          <select id="army">
            <option value="0">Brittish</option>
            <option value="1">Americans</option>
          </select>
          <br>
          <input id="name" type="text" placeholder="Name"></input>
          <br>
          <input id="hp" type="number" placeholder="HP"></input>
          <br>
          <input id="speed" type="number" placeholder="Speed"></input>
          <br>
          <input id="energy" type="number" placeholder="Energy"></input>
          <br>
          <button @click="${this._add}">Add</button>
          <br>
          <p id="added-message">Unit Added!</p>
          <p id="error-message">All fields need valid input.</p>
        </div>
      </section>
      <section>
        <div>
          ${repeat(this._army0Units, ({index, unit}) => html`
            <div class="unit" data-index="${index}">
              ${unit.name}
              <button @click="${this._remove}">Remove</button>
            </div>
          `)}
        </div>
      </section>
      <section>
        <div>
          ${repeat(this._army1Units, ({index, unit}) => html`
            <div class="unit" data-index="${index}">
              ${unit.name}
              <button @click="${this._remove}">Remove</button>
            </div>
          `)}
        </div>
      </section>
    `;
  }

  get army() {
    return parseInt(this.shadowRoot.getElementById('army').value);
  }

  get name() {
    return this.shadowRoot.getElementById('name').value;
  }

  get hp() {
    return parseInt(this.shadowRoot.getElementById('hp').value);
  }

  get speed() {
    return parseInt(this.shadowRoot.getElementById('speed').value);
  }

  get energy() {
    return parseInt(this.shadowRoot.getElementById('energy').value);
  }

  get stats() {
    return {
      army: this.army,
      name: this.name,
      hp: this.hp,
      speed: this.speed,
      energy: this.energy
    };
  }

  get statsValid() {
    let stats = this.stats;
    return typeof stats.army !== 'undefined' &&
      stats.name.length > 0 &&
      stats.hp > 0 &&
      stats.speed > 0 &&
      stats.energy > 0;
  }

  _remove(e) {
    store.dispatch(remove(e.target.closest('.unit').dataset.index));
  }

  _add() {
    if (this.statsValid) {
      store.dispatch(add(this.stats));
      this.shadowRoot.getElementById('army').value = '0';
      this.shadowRoot.getElementById('name').value = '';
      this.shadowRoot.getElementById('hp').value = '';
      this.shadowRoot.getElementById('speed').value = '';
      this.shadowRoot.getElementById('energy').value = '';
      this.shadowRoot.getElementById('added-message').style.opacity = '1';
      setTimeout(() => this.shadowRoot.getElementById('added-message').style.opacity = '0', 3000);
    } else {
      this.shadowRoot.getElementById('error-message').style.opacity = '1';
      setTimeout(() => this.shadowRoot.getElementById('error-message').style.opacity = '0', 3000);
    }
  }

  stateChanged(state) {
    let units = state.battle.units.map((unit, index) => ({ index, unit }));
    this._army0Units = units.filter(({unit}) => unit.army === 0);
    this._army1Units = units.filter(({unit}) => unit.army === 1);
  }
}

window.customElements.define('create-view', CreateView);
