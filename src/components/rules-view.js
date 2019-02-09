/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { SharedStyles } from './shared-styles.js';

class RulesView extends PageViewElement {
  static get properties() {
    return {
    };
  }

  static get styles() {
    return [
      SharedStyles
    ];
  }

  render() {
    return html`
      <section>
        <h2>Rules</h2>
        <p>
          Here are the rules
        </p>
        <p>
          TODO show battle specific rules here. Each battle should have a corresponding ruleset.
          The ruleset associated with the active battle should be shown here.
        </p>
      </section>
    `;
  }
}

window.customElements.define('rules-view', RulesView);
