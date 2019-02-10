import { html, css } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { PageViewElement } from './page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';
import { rest, move, charge, fire } from '../actions/battle.js';
import battle from '../reducers/battle.js';
import { SharedStyles } from './shared-styles.js';
import { ButtonSharedStyles } from './button-shared-styles.js';

store.addReducers({
  battle
});

class FightView extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      _targets: { type: Object },
      _army: { type: Object },
      _activeUnit: { type: Object }
    };
  }

  static get styles() {
    return [
      SharedStyles,
      ButtonSharedStyles,
      css`
        #unit {
          text-align: center;
          font-size: 2rem;
        }
        #army {
          text-align: center;
          color: var(--app-muted-text-color);
        }
      `
    ];
  }

  render() {
    return html`
      <section>
        <div>
          <div id="unit">${this._activeUnit.name}</div>
          <div id="army">Army: ${this._army.name}</div>
        </div>
        <p>TODO Show unit status textual description.</p>
        <p>TODO Show unit description. i.e. experience level, weaponry, etc...</p>
      </section>
      <section>
        <div>
          <button @click="${this._rest}" id="rest">Rest</button>
          <button @click="${this._move}" id="move">Move</button>
          <button @click="${this._charge}" id="charge">Charge</button>
          <button @click="${this._fire}" id="fire">Fire</button>
        </div>
      </section>
      <section>
        <div id="distance" class="hidden">
          Distance:
          <input type="number" placeholder="Distance"></input>
        </div>
        <div id="target" class="hidden">
          Target:
          <select>
            <option></option>
            ${repeat(this._targets, target => html`
              <option value="${target.id}">${target.unit.name}</option>
            `)}
          </select>
        </div>
        <div id="uphill" class="hidden">
          <input type="checkbox">Uphill</input>
        </div>
        <div id="terrain" class="hidden">
          <input type="checkbox">Difficult Terrain</input>
        </div>
        <div id="take-action" style="opacity: 0;">
          <button @click="${this._takeAction}">Take Action</button>
          <p>TODO After they take the action explain the result. Explain if any follow up actions
          are needed such as a retreate or picking up a unit before switching to the next unit.
          Provide a "done" button to move to next unit.<p>
        </div>
      </section>
    `;
  }

  get distanceContainer() {
    return this.shadowRoot.getElementById('distance');
  }

  get uphillContainer() {
    return this.shadowRoot.getElementById('uphill');
  }

  get terrainContainer() {
    return this.shadowRoot.getElementById('terrain');
  }

  get targetContainer() {
    return this.shadowRoot.getElementById('target');
  }

  get distance() {
    return parseInt(this.distanceContainer.querySelector('input').value);
  }

  get uphill() {
    return this.uphillContainer.querySelector('input').value === 'on';
  }

  get terrain() {
    return this.terrainContainer.querySelector('input').value === 'on';
  }

  get target() {
    return this.targetContainer.querySelector('select').value;
  }

  get situation() {
    return {
      distance: this.distance,
      uphill: this.uphill,
      terrain: this.terrain,
      target: this.target
    }
  }

  _takeAction() {
    this._removeSelection();
    this.shadowRoot.getElementById('move').style.opacity = 1;
    this.shadowRoot.getElementById('charge').style.opacity = 1;
    this.shadowRoot.getElementById('rest').style.opacity = 1;
    this.shadowRoot.getElementById('fire').style.opacity = 1;
    this.shadowRoot.getElementById('take-action').style.opacity = 0;
    store.dispatch(this._selectedAction(this.situation));
  }

  _removeSelection() {
    [...this.shadowRoot.querySelectorAll('button')]
    .forEach(button => button.classList.remove('selected'));
    this.distanceContainer.classList.add('hidden');
    this.uphillContainer.classList.add('hidden');
    this.terrainContainer.classList.add('hidden');
    this.targetContainer.classList.add('hidden');
  }

  _move(e) {
    this._removeSelection();
    e.target.classList.add('selected');
    this.distanceContainer.classList.remove('hidden');
    this.uphillContainer.classList.remove('hidden');
    this.terrainContainer.classList.remove('hidden');
    this.shadowRoot.getElementById('charge').style.opacity = 0;
    this.shadowRoot.getElementById('rest').style.opacity = 0;
    this.shadowRoot.getElementById('fire').style.opacity = 0;
    this.shadowRoot.getElementById('take-action').style.opacity = 1;
    this._selectedAction = move;
  }

  _charge(e) {
    this._removeSelection();
    e.target.classList.add('selected');
    this.distanceContainer.classList.remove('hidden');
    this.uphillContainer.classList.remove('hidden');
    this.terrainContainer.classList.remove('hidden');
    this.targetContainer.classList.remove('hidden');
    this.shadowRoot.getElementById('move').style.opacity = 0;
    this.shadowRoot.getElementById('rest').style.opacity = 0;
    this.shadowRoot.getElementById('fire').style.opacity = 0;
    this.shadowRoot.getElementById('take-action').style.opacity = 1;
    this._selectedAction = charge;
  }

  _rest(e) {
    this._removeSelection();
    e.target.classList.add('selected');
    this.shadowRoot.getElementById('move').style.opacity = 0;
    this.shadowRoot.getElementById('charge').style.opacity = 0;
    this.shadowRoot.getElementById('fire').style.opacity = 0;
    this.shadowRoot.getElementById('take-action').style.opacity = 1;
    this._selectedAction = rest;
  }

  _fire(e) {
    this._removeSelection();
    e.target.classList.add('selected');
    this.distanceContainer.classList.remove('hidden');
    this.terrainContainer.classList.remove('hidden');
    this.targetContainer.classList.remove('hidden');
    this.shadowRoot.getElementById('move').style.opacity = 0;
    this.shadowRoot.getElementById('charge').style.opacity = 0;
    this.shadowRoot.getElementById('rest').style.opacity = 0;
    this.shadowRoot.getElementById('take-action').style.opacity = 1;
    this._selectedAction = fire;
  }

  // This is called every time something is updated in the store.
  stateChanged(state) {
    var activeBattle = state.battle.battles[state.battle.activeBattle];
    this._activeUnit = activeBattle.units[activeBattle.activeUnit];
    this._targets = activeBattle.units
      .filter(unit => unit.army !== this._activeUnit.army)
      .map((unit, index) => ({ id: index, unit: unit}));
    this._army = activeBattle.armies[this._activeUnit.army];
  }
}

window.customElements.define('fight-view', FightView);
