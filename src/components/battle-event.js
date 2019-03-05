import { LitElement, html, css } from 'lit-element';
import { SharedStyles } from '../styles/shared-styles.js';
import { ButtonSharedStyles } from '../styles/button-shared-styles.js';
import { repeat } from 'lit-html/directives/repeat';

class BattleEvent extends LitElement {
  static get properties() {
    return {
      battle: { type: Object }
    };
  }

  static get styles() {
    return [
      SharedStyles,
      ButtonSharedStyles,
      css`
        :host {
          display: block;
        }
      `
    ];
  }

  render() {
    return html`
      <h2>${this.battle.occuringEvent.title}</h2>
      <div class="muted centered">${this.battle.currentTimeMessage}</div>
      ${repeat(this.battle.occuringEvent.messages, message => html`<p>${message}</p>`)}
      ${this.battle.occuringEvent.provideArmyOverview ? html`
        <p>${this.battle.army0.name} has sustained ${this.army1Casualties} casualties.</p>
        <p>${this.battle.army1.name} has sustained ${this.army2Casualties} casualties.</p>
      ` : ''}
      <div>
        <button-tray>
          <button @click="${this.done}">Next Action</button>
        </button-tray>
      </div>
    `;
  }

  done() {
    this.dispatchEvent(new Event("done"));
  }

  armyCasualties(army) {
    return this.battle.units
    .filter(unit => unit.army === army)
    .reduce((casualties, unit) => casualties + (unit.fullStrength - unit.strength), 0);
  }

  get army1Casualties() {
    return this.armyCasualties(0);
  }

  get army2Casualties() {
    return this.armyCasualties(1);
  }
}

window.customElements.define('battle-event', BattleEvent);
