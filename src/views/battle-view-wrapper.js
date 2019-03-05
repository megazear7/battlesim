import { LitElement, html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';
import { SHARED_BATTLE, LOCAL_BATTLE } from '../game.js';
import Battle from '../models/battle.js';

export default class BattleViewWrapper extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      _activeBattle: { type: Object },
      _battleIsShared: { type: Boolean },
    }
  }

  render() {
    return html`
      ${this._activeBattle ? html`
        ${this.battleViewRender()}
      `: html`
        ${this._battleIsShared ? html`
          <section>
            <p>Loading battle...</p>
          </section>
        `: html`
          <section>
            <p>No active battle. Go to the war tab and either select a battle or create a new battle.</p>
          </section>
        `}
      `}
    `;
  }

  stateChanged(state) {
    this._actionMessages = [];
    if (state.battle.activeBattle.type === LOCAL_BATTLE) {
      this._battleIsShared = false;
      if (state.battle.battles.length > state.battle.activeBattle.id) {
        this._activeBattle = new Battle(state.battle.battles[state.battle.activeBattle.id], state.battle.activeBattle.id);
      }
    } else if (state.battle.activeBattle.type === SHARED_BATTLE) {
      this._battleIsShared = true;
      this._activeBattle = Object.keys(state.battle.sharedBattles).indexOf(state.battle.activeBattle.id) >= 0
        ? new Battle(state.battle.sharedBattles[state.battle.activeBattle.id], state.battle.activeBattle.id)
        : undefined;
      this._unitTemplates = this._activeBattle ? this._activeBattle.unitTemplatesFor(0) : [ ];
    }
  }
}
