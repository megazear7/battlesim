import { LitElement, html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

class BattleSimOption extends LitElement {
  static get properties() {
    return {
      selected: { type: Boolean },
      details: { type: String},
    };
  }

  static get styles() {
    return [
      css`
        :host {
          outline: none;
          display: flex;
          flex-direction: row;
          box-sizing: border-box;
          line-height: 1.25rem;
          cursor: pointer;
          background-color: white;
          position: relative;
        }
        :host(:first-child) #box {
          border-top-width: 2px;
        }
        :host(:last-child) #box {
          border-bottom-width: 2px;
        }
        :host(:hover) {
          color: var(--app-primary-color);
        }
        :host(:focus) {
          color: var(--app-primary-color);
        }
        #box {
          box-sizing: border-box;
          width: 1.5rem;
          height: 1.5rem;
          font-size: 1.5rem;
          line-height: 1.5rem;
          margin-right: 0.5rem;
          background-color: white;
          color: var(--app-primary-color);
          text-align: center;
          border-style: solid;
          border-color: var(--app-primary-color);
          border-width: 1px 2px;
        }
        slot {
          box-sizing: border-box;
          height: 1.5rem;
          font-size: 1rem;
          line-height: 1rem;
          padding: calc(0.25rem + 1.5px) 0;
          display: block;
          flex-grow: 1;
          margin-right: 1rem;
        }
        #more {
          width: 2rem;
        }
        #more .tooltiptext {
          visibility: hidden;
          width: calc(100% - 10rem);
          overflow: hidden;
          top: 0px;
          right: 3rem;
          color: var(--app-dark-text-color);
          padding: 1rem;
          background-color: white;
          text-align: center;
          border: 3px solid var(--app-primary-color);
          position: absolute;
          z-index: 1;
        }
        #more:hover .tooltiptext {
          visibility: visible;
        }
      `
    ];
  }

  constructor() {
    super();

    this.selected = false;
    this.tabIndex = 0;
    this.onkeypress = (event) => {
      if (event.code == "Enter") {
        event.stopPropagation();
        this.toggle();
      }
    };
  }

  toggle() {
    this.selected = ! this.selected;
  }

  get value() {
    let trueValue = this.getAttribute('value') ? this.getAttribute('value') : true;
    let falseValue = this.getAttribute('unchecked-value') ? this.getAttribute('unchecked-value') : false;
    return this.selected ? trueValue : falseValue;
  }

  render() {
    return html`
      <div id="box">${this.selected ? html`&#10003;` : ''}</div>
      <slot></slot>
      ${this.details ? html`
        <div id="more">
          ...
          <div class="tooltiptext">${this.details}</div>
        </div>
      ` : ''}
    `;
  }
}

window.customElements.define('battle-sim-option', BattleSimOption);
