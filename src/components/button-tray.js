import { LitElement, html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

class ButtonTray extends LitElement {
  static get properties() {
    return {
      _buttonCount: { type: Number },
    };
  }

  static get styles() {
    let buttonCount = this._buttonCount | 1;
    return [
      css`
        slot {
          --button-width: 100%;
          font-size: 0;
          padding-top: 0;
          padding-bottom: 0;
        }
        ::slotted(button) {
          width: var(--button-width);
          box-sizing: border-box;
          background-color: white;
          margin: 0;
          display: inline-block;
          padding: 1rem 0.25rem;
          font-size: 0.8rem;
          border-left: 1.5px solid var(--app-primary-color);
          border-right: 1.5px solid var(--app-primary-color);
        }
        ::slotted(button:first-child) {
          border-left: 3px solid var(--app-primary-color);
        }
        ::slotted(button:last-child) {
          border-right: 3px solid var(--app-primary-color);
        }
        ::slotted(button) {
          opacity: 1;
        }
        ::slotted(button:hover) {
          background-color: var(--app-primary-color);
        }
        ::slotted(button.selected) {
          background-color: var(--app-primary-color);
        }
        ::slotted(button:disabled) {
          border-color: grey;
        }
        ::slotted(button.selected) {
          color: white;
          border-width: 3px 1.5px;
          border-style: solid;
          border-color: var(--app-primary-color);
        }
      `
    ];
  }

  render() {
    return html`
      <slot></slot>
    `;
  }

  constructor() {
    super();
  }

  firstUpdated() {
    super.connectedCallback();
    this.setButtonWidths();
  }

  setButtonWidths() {
    this._buttonCount = this.querySelectorAll('button').length
    this._slot.style.setProperty('--button-width', `${100 / this._buttonCount}%`);
  }

  get _slot() {
    return this.shadowRoot.querySelector('slot');
  }
}

window.customElements.define('button-tray', ButtonTray);
