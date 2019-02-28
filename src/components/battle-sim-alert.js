import { LitElement, html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

class BattleSimAlert extends LitElement {
  static get properties() {
    return {
      success: { type: Boolean },
      warning: { type: Boolean },
      error: { type: Boolean },
    };
  }

  static get styles() {
    return [
      css`
        :host {
          display: none;
          margin: 1rem 0;
          font-weight: 600;
        }

        slot.success {
          color: green;
        }

        slot.warning {
          color: orange;
        }

        slot.error {
          color: red;
        }
      `
    ];
  }

  render() {
    return html`
      <slot class="${classMap({success: this.success, warning: this.warning, error: this.error})}"></slot>
    `;
  }

  alert() {
    this.style.display = 'block';
    setTimeout(() => this.style.display = 'none', 3000);
  }
}

window.customElements.define('battle-sim-alert', BattleSimAlert);
