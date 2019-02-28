import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { SharedStyles } from '../styles/shared-styles.js';
import { repeat } from 'lit-html/directives/repeat';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';
import Battle from '../models/battle.js';

class SharedView extends connect(store)(PageViewElement) {
  static get properties() {
    return {
    };
  }

  static get styles() {
    return [
      SharedStyles,
      css`
      `
    ];
  }

  render() {
    return html`
      <section>
        <p>Shared View</p>
      </section>
    `;
  }

  stateChanged(state) {
  }
}

window.customElements.define('shared-view', SharedView);
