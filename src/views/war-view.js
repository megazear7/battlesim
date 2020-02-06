import { html, css } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { classMap } from 'lit-html/directives/class-map.js';
import { PageViewElement } from './page-view-element.js';
import { createNewBattle, setActiveBattle, removeBattle, addSharedBattle, playArmy, removeSharedBattle, updateDisplayName } from '../actions/battle.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';
import { SharedStyles } from '../styles/shared-styles.js';
import { ButtonSharedStyles } from '../styles/button-shared-styles.js';
import BATTLE_TEMPLATES from '../game/battle-templates.js';
import RULES from '../game/rules.js';
import Battle from '../models/battle.js';
import { makeid } from '../utils/math-utils.js';
import { SHARED_BATTLE, LOCAL_BATTLE, ARMY_0, ARMY_1, ARMY_BOTH, STAT_TYPES, CASUALTY_MESSAGE_DESCRIPTIVE, STRENGTH_MESSAGE_DESCRIPTIVE } from '../game.js';
import BattleDeviceStorage from '../models/battle-device-storage.js';
import SharedBattleStorage from '../models/shared-battle-storage.js';

class WarView extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      _battles: { type: Object },
      _selectableBattles: { type: Object },
      _sharedBattles: { type: Object },
      _displayName: { type: String },
    };
  }

  static get styles() {
    return [
      SharedStyles,
      ButtonSharedStyles,
      css`
        button.playing {
          background-color: var(--app-primary-color);
          border-color: var(--app-primary-color);
          color: var(--app-light-text-color);
        }

        button.playing:hover {
          background-color: var(--app-primary-color);
          border-color: var(--app-primary-color);
          color: var(--app-light-text-color);
        }
        .play {
          font-size: 0.8rem;
        }
      `
    ];
  }

  render() {
    return html`
      <section>
        <h2>Private Battles</h2>
        ${repeat(this._battles, battle => html`
          <div class="${classMap({battle: true, active: battle.active})}" data-index="${battle.id}">
            <h3>${battle.name}</h3>
            <pre>Created ${battle.createdMessage}</pre>
            <button-tray>
              ${battle.active ? html`
                <button disabled class="playing">Playing</button>
              ` : html`
                <button @click="${e => this._playBattle(parseInt(e.target.closest('.battle').dataset.index))}">Play</button>
              `}
              <button @click="${this._removeBattle}">Delete</button>
              <button @click="${this._makeBattleShared}">Publish</button>
            </button-tray>
          </div>
        `)}
        ${this._battles.length === 0 ? html`
          <p>You have no private battles. Create one below.</p>
        ` : ''}
      </section>
      <section>
        <h2>Shared Battles</h2>
        <div>
          <label for="display-name">Display Name</label>
          <input type="text" id="display-name" @change="${e => this._updateDisplayName(e.target.value)}" placeholder="Leave blank to remain anonymous" value="${this._displayName}"></input>
        </div>
        ${repeat(this._sharedBattles, battle => html`
          <div class="shared-battle">
            <h3>${battle.name}</h3>
            <p class="battle-url">${battle.prettyUrl}</p>
            <button-tray>
              ${battle.active ? html`
                <button disabled class="playing">Playing</button>
              ` : html`
                <button @click="${() => this._playSharedBattle(battle)}">Play</button>
              `}
              <button @click="${() => this._leaveSharedBattle(battle)}">Leave</button>
              <button @click="${e => this._shareBattle(e.target, battle)}">Share</button>
            </button-tray>
            <span class="play">Play:</span>
            <button @click="${() => this._playArmy(battle, ARMY_0)}" class="${classMap({'btn-link': true, 'active-link': battle.playingArmy === ARMY_0})}">${battle.army0.name}</button>
            <button @click="${() => this._playArmy(battle, ARMY_1)}" class="${classMap({'btn-link': true, 'active-link': battle.playingArmy === ARMY_1})}">${battle.army1.name}</button>
            <button @click="${() => this._playArmy(battle, ARMY_BOTH)}" class="${classMap({'btn-link': true, 'active-link': battle.playingArmy === ARMY_BOTH})}">Both armies</button>
          </div>
        `)}
        ${this._sharedBattles.length === 0 ? html`
          <p>You have not joined any shared battles. You can join a shared battle by publishing a private battle or if someone else shares a battle with you.</p>
        ` : ''}
      </section>
      <section>
        <div>
          <h2>Create Battle</h2>
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
          <button-tray>
            <button @click="${this._create}">Create</button>
          </button-tray>
          <battle-sim-alert warning>You must select a ruleset to play and a battle to fight.</battle-sim-alert>
          <input id="battle-name" type="text" placeholder="Battle name"></input>
          <input id="army1-name" type="text" placeholder="First army name"></input>
          <input id="army2-name" type="text" placeholder="Second army name"></input>
          <select id="stat-type">
            <option value="">How would you like unit status's reported?</option>
            ${repeat(STAT_TYPES, statType => html`
              <option value="${statType.id}">${statType.name}</option>
            `)}
          </select>
          <select id="casualty-reporting">
            <option value="">How would you like casualties reported?</option>
            <option value="${CASUALTY_MESSAGE_DESCRIPTIVE}">Descriptive casualties</option>
            <option value="1">Exact casualties</option>
            <option value="10">Casualties rounded to nearest 10</option>
            <option value="100">Casualties rounded to nearest 100</option>
          </select>
          <select id="strength-reporting">
            <option value="">How would you like unit strength reported?</option>
            <option value="${STRENGTH_MESSAGE_DESCRIPTIVE}">Descriptive unit strength</option>
            <option value="1">Exact unit strength</option>
            <option value="10">Unit strength rounded to nearest 10</option>
            <option value="100">Unit strength rounded to nearest 100</option>
          </select>
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

    this._displayName = state.battle.battlesimDevice.displayName;
  }

  _playArmy(battle, army) {
    store.dispatch(playArmy(battle.id, army));
  }

  _alertShare(button, battle) {
    var text = button.closest('.shared-battle').querySelector('.battle-url');
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(text);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    alert(`Battle url copied! Share it with your friends.\n\n${battle.prettyUrl}`);
  }

  _updateDisplayName(displayName) {
    store.dispatch(updateDisplayName(displayName));
  }

  _shareBattle(button, battle) {
    try {
      if (navigator.share !== undefined) {
        navigator.share({
            title: battle.name,
            text: `${battle.name}\nPlay Battlesim by clicking this link`,
            url: battle.url,
        })
        .catch(e => {
          console.error(e);
          this._alertShare(button, battle)
        });
      } else {
        this._alertShare(button, battle);
      }
    } catch(e) {
      console.error(e);
      alert(`Share this battle url with your friends!\n\n${battle.prettyUrl}`);
    }
  }

  _makeBattleShared(e) {
    if (confirm('Are you sure you want to publish this battle?')) {
      let battleIndex = parseInt(e.target.closest('.battle').dataset.index);
      let battle = store.getState().battle.battles[battleIndex];
      battle.uuid = makeid();
      battle.connectedDevices = [];
      battle.connectedDevices.push(BattleDeviceStorage.get);

      firebase.firestore().collection('apps/battlesim/battles')
      .add({ battle })
      .then(docRef => {
        store.dispatch(removeBattle(battleIndex));
        SharedBattleStorage.add({ id: docRef.id });
        docRef.get().then(doc => store.dispatch(addSharedBattle(doc.id, doc.data().battle)));

        let battleModel = new Battle(battle, docRef.id);
        this._playSharedBattle(battleModel);
      });
    }
  }

  _playSharedBattle(sharedBattle) {
    store.dispatch(setActiveBattle({
      type: SHARED_BATTLE,
      id: sharedBattle.id
    }));
  }

  _leaveSharedBattle(sharedBattle) {
    store.dispatch(removeSharedBattle(sharedBattle.id));
  }

  updateRuleset() {
    this._selectableBattles = Object.keys(BATTLE_TEMPLATES)
    .map(battleId => ({ battleTemplate: BATTLE_TEMPLATES[battleId], id: battleId}))
    .filter(battle => battle.battleTemplate.ruleset === this.selectedRuleset);
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

  _playBattle(localBattleId) {
    store.dispatch(setActiveBattle({
      type: LOCAL_BATTLE,
      id: localBattleId
    }));
  }

  _removeBattle(e) {
    if (confirm('Are you sure you want to delete the battle?')) {
      store.dispatch(removeBattle(parseInt(e.target.closest('.battle').dataset.index)));
    }
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
    return this.shadowRoot.getElementById('battle-name');
  }

  get newBattleArmy1NameElement() {
    return this.shadowRoot.getElementById('army1-name');
  }

  get newBattleArmy2NameElement() {
    return this.shadowRoot.getElementById('army2-name');
  }

  get newBattleStatTypeElement() {
    return this.shadowRoot.getElementById('stat-type');
  }

  get newBattleCasualtyReportingElement() {
    return this.shadowRoot.getElementById('casualty-reporting');
  }

  get newBattleStrengthReportingElement() {
    return this.shadowRoot.getElementById('strength-reporting');
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

  get newBattleStatType() {
    return this.newBattleStatTypeElement.value;
  }

  get newBattleCasualtyReporting() {
    return this.newBattleCasualtyReportingElement.value;
  }

  get newBattleStrengthReporting() {
    return this.newBattleStrengthReportingElement.value;
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
      statType: this.newBattleStatType,
      casualtyReporting: this.newBattleCasualtyReporting,
      strengthReporting: this.newBattleStrengthReporting,
    };
  }

  get createBattleFormValid() {
    return this.selectedRuleset && this.newBattleTemplate;
  }
}

window.customElements.define('war-view', WarView);
