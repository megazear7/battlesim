import { LitElement, html, css } from 'lit-element';
import { SharedStyles } from '../styles/shared-styles.js';
import { ButtonSharedStyles } from '../styles/button-shared-styles.js';
import { repeat } from 'lit-html/directives/repeat';
import { ARMY_BOTH } from '../game.js';

class ArmyAction extends LitElement {
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
      <h2>${this.battle.armyTakingAction.armyActionTitle}</h2>
      <div class="muted centered">Army: ${this.battle.armyTakingAction.name}</div>
      <div class="muted centered">${this.battle.currentTimeMessage}</div>
      ${repeat(this.battle.armyTakingAction.messages, message => html`<p>${message}</p>`)}
      <div>
        ${this.battle.playingArmyIsActive ? html`
          <button-tray>
            <button @click="${this.done}">Next Action</button>
          </button-tray>
        ` : ''}
      </div>
    `;
  }

  done() {
    this.dispatchEvent(new Event("done"));
  }
}

window.customElements.define('army-action', ArmyAction);
