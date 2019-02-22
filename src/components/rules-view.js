import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { SharedStyles } from './shared-styles.js';
import RULESETS from '../game/rules.js';
import { repeat } from 'lit-html/directives/repeat';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';

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
      SharedStyles
    ];
  }

  render() {
    return html`
      ${this._hasActiveBattle ? html`
        <section>
          <h3>Scenario Rules</h3>
          ${repeat(this._battleRules, ({heading, text}, index) => html`
            <h5>${index+1} ${heading}</h5>
            <p>${text}</p>
          `)}
        </section>
        <section>
          <h3>${this._ruleset.name}</h3>
        </section>
        ${repeat(this._ruleset.sections, ({heading, text, subsections}, index) => html`
          <section>
            <h4>${index+1} ${heading}</h4>
            <p>${text}</p>
            ${repeat(subsections, ({heading, text}, subIndex) => html`
              <h6>${index+1}.${subIndex+1} ${heading}</h6>
              <p>${text}</p>
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
      let activeBattle = state.battle.battles[state.battle.activeBattle];
      this._battleRules = activeBattle.rules;
      console.log(RULESETS);
      this._ruleset= RULESETS[activeBattle.ruleset];
      console.log(this._ruleset);
      this._hasActiveBattle = true;
    } else {
      this._hasActiveBattle = false;
    }
  }
}

window.customElements.define('rules-view', RulesView);
