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
        #action-result {
          display: none;
        }
      `
    ];
  }

  render() {
    console.log(this._activeUnit);
    return html`
      <section>
        <div>
          <div id="unit">${this._activeUnit.name}</div>
          <div id="army">Army: ${this._army.name}</div>
        </div>
        <h6>Unit Status</h6>
        <p>TODO Generate a textual description of these stats</p>
        <p>${this._activeUnit.strength} Soldiers / ${this._activeUnit.morale}% Morale / ${this._activeUnit.energy}% Energy</p>

        <h6>Unit Description</h6>
        <p>TODO These stats are still being pulled in statically when the battle is created. We need to dynamically reference the weapons at all times instead of coping the data. Also update the experience and leadership to be textual descriptions.</p>
        <p>
          ${this._troopType}</div>
          <br>
          ${this._activeUnit.static.rangedWeapon.name} / ${this._activeUnit.static.meleeWeapon.name}
          <br>
          ${this._activeUnit.static.experience} experience / ${this._activeUnit.static.leadership} leadership
        </p>
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
          <input id="distance" class="hidden" type="number" placeholder="Distance"></input>
          <select id="target" class="hidden">
            <option>Select Target</option>
            ${repeat(this._targets, target => html`
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
          <p>TODO After they take the action explain the result. Maybe they could
          not move the full distance and got bogged down half way. Maybe they
          refuse to charge or are low on amunition.
          Explain the outcomes of any battles such as casualties or changes in morale
          or if any follow up actions are needed such as a retreate or
          picking up a destroyed unit.</p>
          <button @click="${this._progressToNextAction}">Next Action</button>
        </div>
      </section>
    `;
  }

  get _troopType() {
    return {
      0: "Foot troops",
      1: "Cavalry",
      2: "Artillery",
    }[this._activeUnit.static.troopType];
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
    return parseInt(this.distanceElement.value);
  }

  get uphill() {
    return this.uphillContainer.querySelector('input').value === 'on';
  }

  get terrain() {
    return this.terrainContainer.querySelector('input').value === 'on';
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

  get validSituation() {
    if (this._selectedAction === rest) {
      return true;
    } else if (this._selectedAction === move) {
      return this.distance > 0;
    } else if (this._selectedAction === charge) {
      return this.distance > 0 && ! isNaN(this.target)
    } else if (this._selectedAction === fire) {
      return this.distance > 0 && ! isNaN(this.target)
    } else {
      return false;
    }
  }

  _progressToNextAction() {
    store.dispatch(this._selectedAction(this.situation));
    this.shadowRoot.getElementById('actions').style.display = 'block';
    this.shadowRoot.getElementById('take-action').style.display = 'block';
    this.shadowRoot.getElementById('action-result').style.display = 'none';
  }

  _takeAction() {
    if (this.validSituation) {
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
    this._selectedAction = move;
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
    this._selectedAction = charge;
  }

  _rest(e) {
    this._removeSelection();
    e.target.classList.add('selected');
    this.shadowRoot.getElementById('move').style.opacity = 0.5;
    this.shadowRoot.getElementById('charge').style.opacity = 0.5;
    this.shadowRoot.getElementById('rest').style.opacity = 1;
    this.shadowRoot.getElementById('fire').style.opacity = 0.5;
    this.shadowRoot.getElementById('take-action').style.opacity = 1;
    this._selectedAction = rest;
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
