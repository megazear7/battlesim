import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { SharedStyles } from './shared-styles.js';
import RULESETS from '../rulesets.js';
import { repeat } from 'lit-html/directives/repeat';
import battle from '../reducers/battle.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';

store.addReducers({
  battle
});

class RulesView extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      _ruleset: { type: Object },
      _battleRules: { type: Object },
    };
  }

  static get styles() {
    return [
      SharedStyles
    ];
  }

  render() {
    return html`
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
          <h4>${index+1} ${heading}</h3>
          <p>${text}</p>
          ${repeat(subsections, ({heading, text}, subIndex) => html`
            <h6>${index+1}.${subIndex+1} ${heading}</h5>
            <p>${text}</p>
          `)}
        </section>
      `)}
    `;
  }

  stateChanged(state) {
    let activeBattle = state.battle.battles[state.battle.activeBattle];
    this._battleRules = activeBattle.rules;
    this._ruleset= RULESETS[activeBattle.ruleset];
  }
}

window.customElements.define('rules-view', RulesView);
