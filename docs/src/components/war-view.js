import { html, css, repeat, classMap, PageViewElement, createNewBattle, setActiveBattle, removeBattle, connect, store, SharedStyles, ButtonSharedStyles, $battleTemplatesDefault as BATTLE_TEMPLATES } from './battle-sim.js';

class WarView extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      _battles: {
        type: Object
      }
    };
  }

  static get styles() {
    return [SharedStyles, ButtonSharedStyles, css`
        .selectedBattle {
          color: var(--app-primary-color);
        }
      `];
  }

  render() {
    return html`
      ${repeat(this._battles, ({
      battle,
      index,
      active,
      createdAt
    }) => html`
        <section>
          <div class="${classMap({
      battle: true,
      active: active
    })}" data-index="${index}">
            <h3 class="${classMap({
      selectedBattle: active
    })}">${battle.name}</h3>
            <pre>Created ${createdAt}</pre>
            ${active ? html`
              <button @click="${this._playBattle}" disabled>Playing</button>
            ` : html`
              <button @click="${this._playBattle}">Play</button>
            `}
            <button @click="${this._removeBattle}">Remove</button>
          </div>
        </section>
      `)}
      ${this._battles.length === 0 ? html`
        <section>
          <p>No battles exist. You can create one below.</p>
        </section>
      ` : ``}
      <section>
        <div>
          <select id="battle-template">
            ${repeat(BATTLE_TEMPLATES, (battleTemplate, index) => html`
              <option value="${index}">${battleTemplate.name}</option>
            `)}
          </select>
          <input id="name" type="text" placeholder="Optional: Provide a Different Name for the Battle"></input>
          <button @click="${this._create}">Create</button>
        </div>
      </section>
    `;
  }

  get newBattleTemplate() {
    return this.shadowRoot.getElementById('battle-template').value;
  }

  get newBattleNameElement() {
    return this.shadowRoot.getElementById('name');
  }

  get newBattleName() {
    return this.newBattleNameElement.value;
  }

  set newBattleName(value) {
    this.newBattleNameElement.value = value;
  }

  get battleStats() {
    return {
      name: this.newBattleName,
      templateIndex: this.newBattleTemplate
    };
  }

  _create() {
    store.dispatch(createNewBattle(this.battleStats));
    this.newBattleName = '';
  }

  _playBattle(e) {
    store.dispatch(setActiveBattle(parseInt(e.target.closest('.battle').dataset.index)));
  }

  _removeBattle(e) {
    if (confirm('Are you sure you want to delete the battle?')) {
      store.dispatch(removeBattle(parseInt(e.target.closest('.battle').dataset.index)));
    }
  }

  stateChanged(state) {
    this._battles = state.battle.battles.map((battle, index) => {
      let createdAt = new Date(battle.createdAt);
      return {
        battle,
        index,
        active: index === state.battle.activeBattle,
        createdAt: createdAt.getMonth() + 1 + '/' + createdAt.getDate() + '/' + createdAt.getFullYear()
      };
    });
  }

}

window.customElements.define('war-view', WarView);