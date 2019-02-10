import { html, css } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { classMap } from 'lit-html/directives/class-map.js';
import { PageViewElement } from './page-view-element.js';
import { createBattle, setActiveBattle } from '../actions/battle.js';
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
      _battleTemplates: { type: Object },
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
      ${repeat(this._battles, ({battle, index, active}) => html`
        <section>
          <div class="${classMap({battle: true, active: active})}" data-index="${index}">
            ${battle.name}
            <br>
            ${! active ? html`
              <button class="btn-link" @click="${this._playBattle}">Play</button>
            ` : html`
              This is the active battle
            `}
          </div>
        </section>
      `)}
      <section>
        <div>
          Name:
          <input id="name" type="text" placeholder="Name the Battle"></input>
          <br>
          Battle:
          <select id="battle-template">
            ${repeat(this._battleTemplates, ({battleTemplate, index }) => html`
              <option value="${index}">${battleTemplate.name}</option>
            `)}
          </select>
          <br>
          <button @click="${this._create}">Create</button>
        </div>
      </section>
    `;
  }

  get newBattleTemplate() {
    return this.shadowRoot.getElementById('battle-template').value
  }

  get newBattleName() {
    return this.shadowRoot.getElementById('name').value
  }

  get battleStats() {
    return {
      name: this.newBattleName,
      templateIndex: this.newBattleTemplate
    };
  }

  _create() {
    store.dispatch(createBattle(this.battleStats));
  }

  _playBattle(e) {
    store.dispatch(setActiveBattle(parseInt(e.target.closest('.battle').dataset.index)));
  }

  stateChanged(state) {
    this._battles = state.battle.battles
      .map((battle, index) => ({ battle, index, active: index === state.battle.activeBattle }));
    this._battleTemplates = state.battle.battleTemplates
      .map((battleTemplate, index) => ({ battleTemplate, index }));
  }
}

window.customElements.define('war-view', WarView);
