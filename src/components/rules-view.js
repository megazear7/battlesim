import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { SharedStyles } from './shared-styles.js';
import RULESETS from '../game/rules.js';
import SCENARIOS from '../game/scenarios.js';
import { repeat } from 'lit-html/directives/repeat';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';
import Battle from '../models/battle.js';

class RulesView extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      _ruleset: { type: Object },
      _battleRules: { type: Object },
      _hasActiveBattle: { type: Boolean },
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
      ${this._hasActiveBattle ? html`
        <section>
          <h3>Scenario Rules</h3>
          ${repeat(this._battleRules, ({heading, text, image}, index) => html`
            <h5>${index+1} ${heading}</h5>
            <p>${text}</p>
            ${image ? html`<div><img src=${image}></img></div>` : ``}
          `)}
        </section>
        <section>
          <h3>${this._ruleset.name}</h3>
        </section>
        ${repeat(this._ruleset.sections, ({heading, text, subsections}, index) => html`
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
    if (state.battle.battles.length > state.battle.activeBattle) {
      let activeBattle = new Battle(state.battle.battles[state.battle.activeBattle], state.battle.activeBattle);
      this._battleRules = SCENARIOS[activeBattle.rules];
      this._ruleset= RULESETS[activeBattle.ruleset];
      this._hasActiveBattle = true;
    } else {
      this._hasActiveBattle = false;
    }
  }
}

window.customElements.define('rules-view', RulesView);
