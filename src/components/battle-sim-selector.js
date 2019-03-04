import { LitElement, html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

class BattleSimSelector extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      radio: { type: Boolean },
      number: { type: Boolean },
      integer: { type: Boolean },
      none: { type: String },
    };
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
        }
        div {
          font-size: 1.125rem;
        }
      `
    ];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    this.optionElements.forEach(clickedOption => {
      clickedOption.onclick = () => {
        if (this.radio) {
          this.optionElements.forEach(option => {
            if (option !== clickedOption) {
              option.selected = false;
            }
          });
          clickedOption.toggle();
        } else {
          clickedOption.toggle();
        }
      };
    });
  }

  get optionElements() {
    return [...this.querySelectorAll('battle-sim-option')];
  }

  get value() {
    if (this.radio) {
      if (this._values.length > 0) {
        return this._valueFor(this._values[0]);
      } else {
        return this._noValue;
      }
    } else {
      return this._values;
    }
  }

  get _values() {
    return [...this.querySelectorAll('battle-sim-option')]
      .map(option => option.value)
      .filter(option => option !== false)
      .map(val => this._valueFor(val));
  }

  _valueFor(val) {
    if (this.number) {
      return parseFloat(val);
    } else if (this.integer) {
      return parseInt(val);
    } else {
      return val;
    }
  }

  get _noValue() {
    if (typeof this.none !== 'undefined') {
      return this._valueFor(this.none);
    } else if ((this.number || this.integer) && this.radio) {
      return 0;
    } else if (this.radio) {
      return false;
    } else {
      return [];
    }
  }

  render() {
    return html`
      <div>${this.title}</div>
      <slot></slot>
    `;
  }
}

window.customElements.define('battle-sim-selector', BattleSimSelector);
