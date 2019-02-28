import { LitElement, html, css } from 'lit-element';

class BattleSimAlert extends LitElement {
  static get properties() {
    return {
    };
  }

  static get styles() {
    return [
      css`
        :host {
          display: none;
          margin: 1rem 0;
          color: orange;
          font-weight: 600;
        }
      `
    ];
  }

  render() {
    return html`
      <slot></slot>
    `;
  }

  alert() {
    this.style.display = 'block';
    setTimeout(() => this.style.display = 'none', 3000);
  }
}

window.customElements.define('battle-sim-alert', BattleSimAlert);
