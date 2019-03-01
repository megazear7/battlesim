import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { SharedStyles } from '../styles/shared-styles.js';
import { repeat } from 'lit-html/directives/repeat';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';
import Battle from '../models/battle.js';
import { SHARED_BATTLE, LOCAL_BATTLE } from '../game.js';

class RulesView extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      _activeBattle: { type: Object },
    };
  }

  static get styles() {
    return [
      SharedStyles,
      css`
        img {
          max-width: 100%;
        }
      `
    ];
  }

  render() {
    return html`
      ${this._activeBattle ? html`
        <section>
          <h3>Scenario Rules</h3>
          ${repeat(this._activeBattle.battleRules, ({heading, text, image}, index) => html`
            <h5>${index+1} ${heading}</h5>
            <p>${text}</p>
            ${image ? html`<div><img src=${image}></img></div>` : ``}
          `)}
        </section>
        <section>
          <h3>${this._activeBattle.rulesetRules.name}</h3>
        </section>
        ${repeat(this._activeBattle.rulesetRules.sections, ({heading, text, subsections}, index) => html`
          <section>
            <h4>${index+1} ${heading}</h4>
            <p>${text}</p>
            ${repeat(subsections, ({heading, text, image}, subIndex) => html`
              <h6>${index+1}.${subIndex+1} ${heading}</h6>
              <p>${text}</p>
              ${image ? html`<div><img src=${image}></img></div>` : ``}
            `)}
          </section>
        `)}
      `:html`
        <section>
          <p>No active battle. Go to the war tab and either select a battle or create a new battle.</p>
        </section>
      `}
    `;
  }

  stateChanged(state) {
    if (state.battle.activeBattle.type === LOCAL_BATTLE) {
      if (state.battle.battles.length > state.battle.activeBattle.id) {
        this._activeBattle = new Battle(state.battle.battles[state.battle.activeBattle.id], state.battle.activeBattle.id);
      }
    } else if (state.battle.activeBattle.type === SHARED_BATTLE) {
      this._activeBattle = Object.keys(state.battle.sharedBattles).indexOf(state.battle.activeBattle.id) >= 0
        ? new Battle(state.battle.sharedBattles[state.battle.activeBattle.id], state.battle.activeBattle.id)
        : undefined;
      this._unitTemplates = this._activeBattle ? this._activeBattle.unitTemplatesFor(0) : [ ];
    }
  }
}

window.customElements.define('rules-view', RulesView);
