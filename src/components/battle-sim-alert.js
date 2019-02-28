import { LitElement, html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

class BattleSimAlert extends LitElement {
  static get properties() {
    return {
      success: { type: Boolean },
      warning: { type: Boolean },
      error: { type: Boolean },
      hidden: { type: Boolean },
    };
  }

  static get styles() {
    return [
      css`
        slot {
          display: block;
          font-weight: 600;
          font-size: 1rem;
          margin: 1rem 0;
        }

        slot.hidden {
          display: none;
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

  constructor() {
    super();
    this.hidden = true;
  }

  render() {
    return html`
      <slot class="${classMap({success: this.success, warning: this.warning, error: this.error, hidden: this.hidden})}"></slot>
    `;
  }

  alert() {
    this.hidden = false;
    setTimeout(() => this.hidden = true, 3000);
  }
}

window.customElements.define('battle-sim-alert', BattleSimAlert);
