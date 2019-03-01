import { html, css } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { classMap } from 'lit-html/directives/class-map.js';
import { PageViewElement } from './page-view-element.js';
import { createNewBattle, setActiveBattle, removeBattle, addSharedBattle } from '../actions/battle.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';
import { SharedStyles } from '../styles/shared-styles.js';
import { ButtonSharedStyles } from '../styles/button-shared-styles.js';
import BATTLE_TEMPLATES from '../game/battle-templates.js';
import RULES from '../game/rules.js';
import Battle from '../models/battle.js';
import { makeid } from '../utils/math-utils.js';
import { SHARED_BATTLE, LOCAL_BATTLE } from '../game.js';

class WarView extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      _battles: { type: Object },
      _selectableBattles: { type: Object },
      _sharedBattles: { type: Object },
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
      <section>
        <h3>Your battles</h3>
      </section>
      ${repeat(this._battles, battle => html`
        <section>
          <div class="${classMap({battle: true, active: battle.active})}" data-index="${battle.id}">
            <h4 class="${classMap({selectedBattle: battle.active})}">${battle.name}</h4>
            <pre>Created ${battle.createdMessage}</pre>
            ${battle.active ? html`
              <button disabled>Playing</button>
            ` : html`
              <button @click="${this._playBattle}">Play</button>
            `}
            <button @click="${this._removeBattle}">Remove</button>
            <button @click="${this._shareBattle}">Share</button>
          </div>
        </section>
      `)}
      <section>
        <h3>Shared Battles</h3>
      </section>
      ${repeat(this._sharedBattles, battle => html`
        <section>
          <h4>${battle.name}</h4>
          <div>
            ${battle.active ? html`
              <button disabled>Playing</button>
            ` : html`
              <button @click="${() => this._playSharedBattle(battle)}">Play</button>
            `}
            <button @click="${() => this._leaveSharedBattle(battle)}">Leave</button>
          </div>
          <p>Share this url: ${battle.url}</p>
        </section>
      `)}
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
          <battle-sim-alert warning>You must select a ruleset to play and a battle to fight.</battle-sim-alert>
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

  stateChanged(state) {
    this._sharedBattles = Object.keys(state.battle.sharedBattles).map(id =>
      new Battle(state.battle.sharedBattles[id], id, id === state.battle.activeBattle.id));

    this._battles = state.battle.battles.map((battle, index) =>
      new Battle(battle, index, index === state.battle.activeBattle.id));
  }

  _shareBattle(e) {
    let battleIndex = parseInt(e.target.closest('.battle').dataset.index);
    let battle = store.getState().battle.battles[battleIndex];
    battle.uuid = makeid();

    firebase.firestore().collection('apps/battlesim/battles')
    .add({ battle })
    .then(docRef => {
      let sharedBattleIds = JSON.parse(localStorage.getItem("sharedBattles")) || [];
      store.dispatch(removeBattle(battleIndex));
      localStorage.setItem("sharedBattles", JSON.stringify([...sharedBattleIds, docRef.id]));
      docRef.get().then(doc => store.dispatch(addSharedBattle(doc.id, doc.data().battle)));

      let battleModel = new Battle(battle, docRef.id);

      if (navigator.share) {
        navigator.share({
            title: battle.name,
            text: 'Share ' + battle.name + ' from battlesim.',
            url: battleModel.url,
        })
        .catch((error) => console.log('Error sharing', error));
      } else {
        alert("Share this url with a friend: " + battleModel.url);
      }
    });
  }

  _playSharedBattle(sharedBattle) {
    store.dispatch(setActiveBattle({
      type: SHARED_BATTLE,
      id: sharedBattle.id
    }));
  }

  _leaveSharedBattle(sharedBattle) {
    this._sharedBattles = this._sharedBattles.filter(battle => battle.id !== sharedBattle.id);
    localStorage.setItem("sharedBattles", JSON.stringify(this._sharedBattles.map(battle => battle.id)));
  }

  updateRuleset() {
    this._selectableBattles = Object.keys(BATTLE_TEMPLATES)
    .map(battleId => ({ battleTemplate: BATTLE_TEMPLATES[battleId], id: battleId}))
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
      this.shadowRoot.querySelector('battle-sim-alert').alert();
    }
  }

  _playBattle(e) {
    store.dispatch(setActiveBattle({
      type: LOCAL_BATTLE,
      id: parseInt(e.target.closest('.battle').dataset.index)
    }));
  }

  _removeBattle(e) {
    if (confirm('Are you sure you want to delete the battle?')) {
      store.dispatch(removeBattle(parseInt(e.target.closest('.battle').dataset.index)));
    }
  }
}

window.customElements.define('war-view', WarView);
