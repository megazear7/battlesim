import { html, css } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { PageViewElement } from './page-view-element.js';
import { add, remove } from '../actions/battle.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';
import battle from '../reducers/battle.js';
import { SharedStyles } from './shared-styles.js';
import { ButtonSharedStyles } from './button-shared-styles.js';

store.addReducers({
  battle
});

class WarView extends connect(store)(PageViewElement) {
  static get properties() {
    return {
    };
  }

  static get styles() {
    return [
      SharedStyles,
      ButtonSharedStyles,
      css`
      `
    ];
  }

  render() {
    return html`
      <section>
        <p>You will be able to create new battles and select a battle to play from here</p>
        <p>TODO: List battles</p>
      </section>
      <section>
        <div>
          Name:
          <input id="name" type="text" placeholder="Name the Battle"></input>
          <br>
          Battle:
          <select id="target">
            <option value="0">Generic Revolutionary War</option>
            <option value="1">Bunker Hill</option>
            <option value="2">Chelsea Creek</option>
            <option value="3">Battle of Saint-Pierre</option>
          </select>
          <br>
          <button @click="${this._create}">Create</button>
        </div>
      </section>
    `;
  }

  _create() {
    // TODO
  }

  stateChanged(state) {
    // TODO
  }
}

window.customElements.define('war-view', WarView);
