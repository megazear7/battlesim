import { html, css } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { PageViewElement } from './page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';
import { takeAction } from '../actions/battle.js';
import { SharedStyles } from './shared-styles.js';
import { ButtonSharedStyles } from './button-shared-styles.js';
import Unit from '../unit.js';
import { prettyDateTime } from '../math-utils.js';

const REST = 'REST';
const MOVE = 'MOVE';
const CHARGE = 'CHARGE';
const FIRE = 'FIRE';

class FightView extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      _unit: { type: Object },
      _hasActiveBattle: { type: Boolean },
      _actionMessages: { type: Array },
      _date: { type: Object },
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
        #time-of-day {
          text-align: center;
          color: var(--app-muted-text-color);
        }
        #action-result {
          display: none;
        }
        h6 {
          margin-bottom: 0;
        }
      `
    ];
  }

  render() {
    return html`
      ${this._hasActiveBattle ? html`
        <section>
          <div>
            <div id="unit">${this._unit.name}</div>
            <div id="army">Army: ${this._unit.army.name}</div>
            <div id="time-of-day">${prettyDateTime(this._date)}</div>
          </div>
          <h6>Unit Status</h6>
          <p>${this._unit.detailedStatus}</p>

          <h6>Unit Description</h6>
          <p>${this._unit.desc}</p>
        </section>
        <section>
          <div id="actions">
            <button @click="${this._rest}" id="rest">Rest</button>
            <button @click="${this._move}" id="move">Move</button>
            <button @click="${this._charge}" id="charge">Charge</button>
            <button @click="${this._fire}" id="fire">Fire</button>
          </div>
        </section>
        <section>
          <div>
            <input id="distance" class="hidden" type="number" placeholder="Distance (Leave blank to move as far as possible)"></input>
            <select id="target" class="hidden">
              <option>Select Target</option>
              ${repeat(this._unit.targets, target => html`
                <option value="${target.id}">${target.unit.name}</option>
              `)}
            </select>
            <div id="uphill" class="hidden">
              <input type="checkbox" id="uphill-checkbox"></input>
              <label for="uphill-checkbox">Uphill</label>
            </div>
            <div id="terrain" class="hidden">
              <input type="checkbox" id="terrain-checkbox"></input>
              <label for="terrain-checkbox">Difficult Terrain</label>
            </div>
          <div>
          <div id="take-action" style="opacity: 0;">
            <button @click="${this._takeAction}">Take Action</button>
            <p class="error hidden">You must provide valid values for each field</p>
          </div>
          <div id="action-result">
            ${repeat(this._actionMessages, message => html`
              <p>${message}</p>
            `)}
            <p id="action-message"></p>
            <button @click="${this._progressToNextAction}">Next Action</button>
          </div>
        </section>
      `:html`
        <section>
          <p>No active battle. Go to the war tab and either select a battle or create a new battle.</p>
        </section>
      `}
    `;
  }

  get distanceElement() {
    return this.shadowRoot.getElementById('distance');
  }

  get uphillContainer() {
    return this.shadowRoot.getElementById('uphill');
  }

  get terrainContainer() {
    return this.shadowRoot.getElementById('terrain');
  }

  get targetElement() {
    return this.shadowRoot.getElementById('target');
  }

  get errorElement() {
    return this.shadowRoot.querySelector('.error');
  }

  get distance() {
    return parseInt(this.distanceElement.value === '' ? 0 : this.distanceElement.value);
  }

  get uphill() {
    return this.uphillContainer.querySelector('input').checked;
  }

  get terrain() {
    return this.terrainContainer.querySelector('input').checked;
  }

  get target() {
    return parseInt(this.targetElement.value);
  }

  get situation() {
    return {
      distance: this.distance,
      uphill: this.uphill,
      terrain: this.terrain,
      target: this.target
    }
  }

  get terrainModifier() {
    if (this.uphill && this.terrain) {
      return 60;
    } else if (this.uphill) {
      return 40;
    } else if (this.terrain) {
      return 20;
    } else {
      return 0;
    }
  }

  get validSituation() {
    if (this._selectedAction === REST) {
      return true;
    } else if (this._selectedAction === MOVE) {
      return true;
    } else if (this._selectedAction === CHARGE) {
      return this.distance > 0 && ! isNaN(this.target)
    } else if (this._selectedAction === FIRE) {
      return this.distance > 0 && ! isNaN(this.target)
    } else {
      return false;
    }
  }

  get _actionMessageElement() {
    return this.shadowRoot.getElementById('action-message');
  }

  _progressToNextAction() {
    store.dispatch(takeAction(this._actionUpdates));
    this._actionUpdate = {};
    this.shadowRoot.getElementById('actions').style.display = 'block';
    this.shadowRoot.getElementById('take-action').style.display = 'block';
    this.shadowRoot.getElementById('action-result').style.display = 'none';
    this._actionMessageElement.innerText = '';
  }

  _takeAction() {
    if (this.validSituation) {
      let actionResult;
      if (this._selectedAction === REST) {
        actionResult = this._unit.rest();
      } else if (this._selectedAction === MOVE) {
        actionResult = this._unit.move(this.distance * 100, this.terrainModifier);
      } else if (this._selectedAction === CHARGE) {
        actionResult = this._unit.charge();
      } else if (this._selectedAction === FIRE) {
        actionResult = this._unit.fire();
      }
      this._actionMessages = actionResult.messages;
      this._actionUpdates = actionResult.updates;

      this._removeSelection();
      this.shadowRoot.getElementById('move').style.opacity = 1;
      this.shadowRoot.getElementById('charge').style.opacity = 1;
      this.shadowRoot.getElementById('rest').style.opacity = 1;
      this.shadowRoot.getElementById('fire').style.opacity = 1;
      this.shadowRoot.getElementById('take-action').style.opacity = 0;

      this.distanceElement.value = '';
      this.uphillContainer.querySelector('input').checked = false;
      this.terrainContainer.querySelector('input').checked = false;
      this.targetElement.value = '';

      this.shadowRoot.getElementById('take-action').style.display = 'none';
      this.shadowRoot.getElementById('actions').style.display = 'none';
      this.shadowRoot.getElementById('action-result').style.display = 'block';
    } else {
      this.errorElement.style.opacity = '1';
      this.errorElement.style.display = 'block';
      setTimeout(() => {
        this.errorElement.style.opacity = '0';
        this.errorElement.style.display = 'none';
      }, 3000);
    }
  }

  _removeSelection() {
    [...this.shadowRoot.querySelectorAll('button')]
    .forEach(button => button.classList.remove('selected'));
    this.distanceElement.classList.add('hidden');
    this.uphillContainer.classList.add('hidden');
    this.terrainContainer.classList.add('hidden');
    this.targetElement.classList.add('hidden');
  }

  _move(e) {
    this._removeSelection();
    e.target.classList.add('selected');
    this.distanceElement.classList.remove('hidden');
    this.uphillContainer.classList.remove('hidden');
    this.terrainContainer.classList.remove('hidden');
    this.shadowRoot.getElementById('move').style.opacity = 1;
    this.shadowRoot.getElementById('charge').style.opacity = 0.5;
    this.shadowRoot.getElementById('rest').style.opacity = 0.5;
    this.shadowRoot.getElementById('fire').style.opacity = 0.5;
    this.shadowRoot.getElementById('take-action').style.opacity = 1;
    this._selectedAction = MOVE;
  }

  _charge(e) {
    this._removeSelection();
    e.target.classList.add('selected');
    this.distanceElement.classList.remove('hidden');
    this.uphillContainer.classList.remove('hidden');
    this.terrainContainer.classList.remove('hidden');
    this.targetElement.classList.remove('hidden');
    this.shadowRoot.getElementById('move').style.opacity = 0.5;
    this.shadowRoot.getElementById('charge').style.opacity = 1;
    this.shadowRoot.getElementById('rest').style.opacity = 0.5;
    this.shadowRoot.getElementById('fire').style.opacity = 0.5;
    this.shadowRoot.getElementById('take-action').style.opacity = 1;
    this._selectedAction = CHARGE;
  }

  _rest(e) {
    this._removeSelection();
    e.target.classList.add('selected');
    this.shadowRoot.getElementById('move').style.opacity = 0.5;
    this.shadowRoot.getElementById('charge').style.opacity = 0.5;
    this.shadowRoot.getElementById('rest').style.opacity = 1;
    this.shadowRoot.getElementById('fire').style.opacity = 0.5;
    this.shadowRoot.getElementById('take-action').style.opacity = 1;
    this._selectedAction = REST;
  }

  _fire(e) {
    this._removeSelection();
    e.target.classList.add('selected');
    this.distanceElement.classList.remove('hidden');
    this.terrainContainer.classList.remove('hidden');
    this.targetElement.classList.remove('hidden');
    this.shadowRoot.getElementById('move').style.opacity = 0.5;
    this.shadowRoot.getElementById('charge').style.opacity = 0.5;
    this.shadowRoot.getElementById('rest').style.opacity = 0.5;
    this.shadowRoot.getElementById('fire').style.opacity = 1;
    this.shadowRoot.getElementById('take-action').style.opacity = 1;
    this._selectedAction = FIRE;
  }

  // This is called every time something is updated in the store.
  stateChanged(state) {
    this._actionMessages = [];
    if (state.battle.battles.length > state.battle.activeBattle) {
      let activeBattle = state.battle.battles[state.battle.activeBattle];
      this._unit = new Unit(activeBattle.units[activeBattle.activeUnit], activeBattle.activeUnit);
      this._date = new Date(activeBattle.startTime + (activeBattle.second * 1000));
      this._hasActiveBattle = true;
    } else {
      this._hasActiveBattle = false;
    }
  }
}

window.customElements.define('fight-view', FightView);
