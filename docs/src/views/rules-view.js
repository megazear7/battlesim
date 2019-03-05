import { html, SharedStyles, $battleViewWrapperDefault as BattleViewWrapper, repeat } from '../components/battle-sim.js';

class RulesView extends BattleViewWrapper {
  static get styles() {
    return [SharedStyles];
  }

  battleViewRender() {
    return html`
      <section>
        <h3>Scenario Rules</h3>
        ${repeat(this._activeBattle.battleRules, ({
      heading,
      text,
      image
    }, index) => html`
          <h5>${index + 1} ${heading}</h5>
          <p>${text}</p>
          ${image ? html`<div><img src=${image}></img></div>` : ``}
        `)}
      </section>
      <section>
        <h3>${this._activeBattle.rulesetRules.name}</h3>
      </section>
      ${repeat(this._activeBattle.rulesetRules.sections, ({
      heading,
      text,
      subsections
    }, index) => html`
        <section>
          <h4>${index + 1} ${heading}</h4>
          <p>${text}</p>
          ${repeat(subsections, ({
      heading,
      text,
      image
    }, subIndex) => html`
            <h6>${index + 1}.${subIndex + 1} ${heading}</h6>
            <p>${text}</p>
            ${image ? html`<div><img src=${image}></img></div>` : ``}
          `)}
        </section>
      `)}
    `;
  }

}

window.customElements.define('rules-view', RulesView);