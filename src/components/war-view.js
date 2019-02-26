import { html, css } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { classMap } from 'lit-html/directives/class-map.js';
import { PageViewElement } from './page-view-element.js';
import { createNewBattle, setActiveBattle, removeBattle } from '../actions/battle.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';
import { SharedStyles } from './shared-styles.js';
import { ButtonSharedStyles } from './button-shared-styles.js';
import BATTLE_TEMPLATES from '../game/battle-templates.js';
import RULES from '../game/rules.js';

class WarView extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      _battles: { type: Object },
      _selectableBattles: { type: Object },
    };
  }

  static get styles() {
    return [
      SharedStyles,
      ButtonSharedStyles,
      css`
        .selectedBattle {
          color: var(--app-primary-color);
        }
      `
    ];
  }

  render() {
    return html`
      ${repeat(this._battles, ({battle, index, active, createdAt}) => html`
        <section>
          <div class="${classMap({battle: true, active: active})}" data-index="${index}">
            <h3 class="${classMap({selectedBattle: active})}">${battle.name}</h3>
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
      `: ``}
      <section>
        <div>
          <select id="rulesets" @change="${this.updateRuleset}">
            <option value="">Select a ruleset</option>
            ${repeat(this.rulesets, ({ruleset, id}) => html`
              <option value="${id}">${ruleset.name}</option>
            `)}
          </select>
          <select id="battle-template">
            <option value="">Select a battle</option>
            ${repeat(this._selectableBattles, ({battleTemplate, id}) => html`
              <option value="${id}">${battleTemplate.name}</option>
            `)}
          </select>
          <button @click="${this._create}">Create</button>
          <p class="error hidden">You must select a ruleset to play and a battle to fight.</p>
          <input id="name" type="text" placeholder="Battle name"></input>
          <input id="army1-name" type="text" placeholder="First army name"></input>
          <input id="army2-name" type="text" placeholder="Second army name"></input>
        </div>
      </section>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this._selectableBattles = [];
  }

  updateRuleset() {
    this._selectableBattles = BATTLE_TEMPLATES
    .map((battle, index) => ({ battleTemplate: battle, id: index}))
    .filter(battle => battle.battleTemplate.ruleset === this.selectedRuleset);
  }

  get rulesets() {
    return Object.keys(RULES).map(rulesetId => ({ ruleset: RULES[rulesetId], id: rulesetId }));
  }

  get rulesetsElement() {
    return this.shadowRoot.getElementById('rulesets');
  }

  get selectedRuleset() {
    return this.rulesetsElement.value;
  }

  set selectedRuleset(value) {
    this.rulesetsElement.value = value;
  }

  get newBattleTemplateElement() {
    return this.shadowRoot.getElementById('battle-template');
  }

  get newBattleTemplate() {
    return this.newBattleTemplateElement.value
  }

  set newBattleTemplate(value) {
    this.newBattleTemplateElement.value = value;
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

  set newBattleArmy1Name(value) {
    this.newBattleArmy1NameElement.value = value;
  }

  set newBattleArmy2Name(value) {
    this.newBattleArmy2NameElement.value = value;
  }

  get battleStats() {
    return {
      templateIndex: this.newBattleTemplate,
      name: this.newBattleName,
      army1Name: this.newBattleArmy1Name,
      army2Name: this.newBattleArmy2Name,
    };
  }

  get createBattleFormValid() {
    return this.selectedRuleset && this.newBattleTemplate;
  }

  _create() {
    if (this.createBattleFormValid) {
      store.dispatch(createNewBattle(this.battleStats));
      this.selectedRuleset = '';
      this.newBattleTemplate = '';
      this.newBattleName = '';
      this.newBattleArmy1Name = '';
      this.newBattleArmy2Name = '';
    } else {
      this.shadowRoot.querySelector('.error').classList.remove('hidden');
      setTimeout(() => {
        this.shadowRoot.querySelector('.error').classList.add('hidden');
      }, 3000);
    }
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
        createdAt: createdAt.getMonth()+1 + '/' + createdAt.getDate() + '/' + createdAt.getFullYear()
      };
    });
  }
}

window.customElements.define('war-view', WarView);
