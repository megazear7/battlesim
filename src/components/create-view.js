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

import { add } from '../actions/battle.js';

import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { store } from '../store.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';
import { ButtonSharedStyles } from './button-shared-styles.js';

class CreateView extends connect(store)(PageViewElement) {
  static get styles() {
    return [
      SharedStyles,
      ButtonSharedStyles
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
        </div>
      </section>
    `;
  }

  get army() {
    return this.shadowRoot.getElementById('army').value;
  }

  get name() {
    return this.shadowRoot.getElementById('name').value;
  }

  get hp() {
    return this.shadowRoot.getElementById('hp').value;
  }

  get speed() {
    return this.shadowRoot.getElementById('speed').value;
  }

  get energy() {
    return this.shadowRoot.getElementById('energy').value;
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

  _add() {
    store.dispatch(add(this.stats));
  }
}

window.customElements.define('create-view', CreateView);
