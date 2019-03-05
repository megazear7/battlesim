import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { SharedStyles } from '../styles/shared-styles.js';
import BattleViewWrapper from './battle-view-wrapper.js';
import { repeat } from 'lit-html/directives/repeat';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';
import Battle from '../models/battle.js';
import { SHARED_BATTLE, LOCAL_BATTLE } from '../game.js';

class RulesView extends BattleViewWrapper {
  static get properties() {
    return {
      _battleIsShared: { type: Boolean },
      _activeBattle: { type: Object },
    };
  }

  static get styles() {
    return [
      SharedStyles,
    ];
  }

  battleViewRender() {
    return html`
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
    `;
  }
}

window.customElements.define('rules-view', RulesView);
