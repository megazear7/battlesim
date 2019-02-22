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
          <button @click="${this._create}">Create</button>
          <input id="name" type="text" placeholder="Optionally override battle name"></input>
          <input id="army1-name" type="text" placeholder="Optionally override army 1 name"></input>
          <input id="army2-name" type="text" placeholder="Optionally override army 2 name"></input>
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

  get newBattleArmy1NameElement() {
    return this.shadowRoot.getElementById('army1-name');
  }

  get newBattleArmy2NameElement() {
    return this.shadowRoot.getElementById('army2-name');
  }

  get newBattleName() {
    return this.newBattleNameElement.value;
  }

  get newBattleArmy1Name() {
    return this.newBattleArmy1NameElement.value;
  }

  get newBattleArmy2Name() {
    return this.newBattleArmy2NameElement.value;
  }

  set newBattleName(value) {
    this.newBattleNameElement.value = value;
  }

  get battleStats() {
    return {
      templateIndex: this.newBattleTemplate,
      name: this.newBattleName,
      army1Name: this.newBattleArmy1Name,
      army2Name: this.newBattleArmy2Name
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