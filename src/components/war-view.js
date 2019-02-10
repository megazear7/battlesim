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
      _battles: { type: Object },
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
        <p>TODO: List battles and make them selectable. Upon selecting a battle it becomes the active battle and the other three views reference it for the battle overview, the fighting and taking actions, and the rules.</p>
        <div>
          ${repeat(this._battles, ({battle, index}) => html`
            <div class="battle" data-index="${index}">
              ${battle.name}
              <button class="btn-link" @click="${this._playBattle}">Play</button>
            </div>
          `)}
        </div>
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

  _playBattle() {
    // TODO
  }

  stateChanged(state) {
    this._battles = state.battle.battles.map((battle, index) => ({ battle, index }));
  }
}

window.customElements.define('war-view', WarView);
