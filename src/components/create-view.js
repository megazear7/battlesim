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
        <h2>Create Battle</h2>
      </section>
      <section>
        <h2>Add Unit</h2>
        <div>
          <select id="target">
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
      <section>
        <div>
          <a href="/view2">Begin Battle</a>
        </div>
      </section>
    `;
  }

  get stats() {
    return {
      army: 0,
      name: "Test",
      hp: 100,
      speed: 50,
      energy: 100
    };
  }

  _add() {
    store.dispatch(add(this.stats));
  }
}

window.customElements.define('create-view', CreateView);
