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
import { getRadioVal } from '../dom-utils.js';
import {
  SLOPE_UP,
  SLOPE_DOWN,
  SLOPE_NONE } from '../terrain.js';
import Encounter from '../encounter.js';
import Situation from '../situation.js';

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
          <div id="input-container">
            <input id="distance" class="hidden" type="number" placeholder="Distance (Leave blank to move as far as possible)"></input>
            <input id="separation" class="hidden" type="number" placeholder="Distance to enemy unit"></input>
            <input id="engaged-attackers" class="hidden" type="number" placeholder="Engaged Attacking Stands (Leave blank for all)"></input>
            <input id="engaged-defenders" class="hidden" type="number" placeholder="Engaged Defending Stands (Leave blank for all)"></input>
            <select id="target" class="hidden">
              <option value="">Select Target</option>
              ${repeat(this._unit.targets, target => html`
                <option value="${target.id}">${target.unit.name}</option>
              `)}
            </select>
            <br>
            <br>
            <div id="hill" class="hidden">
              <radiogroup>
                <input type="radio" name="hill" value="${SLOPE_UP}"> Uphill<br>
                <input type="radio" name="hill" value="${SLOPE_DOWN}"> Downhill<br>
                <input type="radio" name="hill" value="${SLOPE_NONE}"> Neither<br><br>
              </radiogroup>
            </div>
            <div id="leader" class="hidden">
              <radiogroup>
                <input type="radio" name="leader" value="general"> General<br>
                <input type="radio" name="leader" value="subcommander"> Subcommander<br>
                <input type="radio" name="leader" value="neither"> None<br><br>
              </radiogroup>
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

  get separationElement() {
    return this.shadowRoot.getElementById('separation');
  }

  get engagedAttackingElement() {
    return this.shadowRoot.getElementById('engaged-attackers');
  }

  get engagedDefendingElement() {
    return this.shadowRoot.getElementById('engaged-defenders');
  }

  get hillContainer() {
    return this.shadowRoot.getElementById('hill');
  }

  get leaderContainer() {
    return this.shadowRoot.getElementById('leader');
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
    return parseInt(this.distanceElement.value === '' ? -1 : this.distanceElement.value);
  }

  get separation() {
    return parseInt(this.separationElement.value ? this.separationElement.value : 0);
  }

  get engagedAttackers() {
    return parseInt(this.engagedAttackingElement.value === '' ? 0 : this.engagedAttackingElement.value);
  }

  get engagedDefenders() {
    return parseInt(this.engagedDefendingElement.value === '' ? 0 : this.engagedDefendingElement.value);
  }

  get slope() {
    const radioVal = getRadioVal(this.shadowRoot.getElementById('input-container'), 'hill');
    return radioVal ? radioVal : SLOPE_NONE;
  }

  get generalNearby() {
    return getRadioVal(this.shadowRoot.getElementById('input-container'), 'leader') === 'general';
  }

  get subcommanderNearby() {
    return getRadioVal(this.shadowRoot.getElementById('input-container'), 'leader') === 'subcommander';
  }

  get terrain() {
    return this.terrainContainer.querySelector('input').checked;
  }

  get target() {
    return parseInt(this.targetElement.value);
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
      return ! isNaN(this.target)
    } else if (this._selectedAction === FIRE) {
      return ! isNaN(this.target)
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
      if (this._selectedAction === REST || this._selectedAction === MOVE) {
        let sitation = new Situation({
          unit: this._unit,
          armyLeadership: 0,
          terrain: this.terrainModifier,
          slope: this.slope });

        actionResult = this._selectedAction === REST ? sitation.rest() : sitation.move(this.distance)
      } else {
        // FIRE or CHARGE
        let defendingUnit = new Unit(this._activeBattle.units[this.target], this.target);
        let encounter = new Encounter({
          attacker: this._unit,
          attackerTerrainDefense: 0,
          attackerArmyLeadership: 0,
          attackerEngagedStands: this.engagedAttackers,
          defender: defendingUnit,
          defenderTerrainDefense: 0,
          defenderArmyLeadership: 0,
          defenderEngagedStands: this.engagedAttackers,
          melee: this._selectedAction === CHARGE,
          separation: this.separation,
          terrain: this.terrainModifier,
          slope: this.slope });

        actionResult = encounter.fight();
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
      this.separationElement.value = '';
      this.engagedAttackingElement.value = '';
      this.engagedDefendingElement.value = '';
      this.hillContainer.querySelectorAll('input').forEach(input => input.checked = false);
      this.leaderContainer.querySelectorAll('input').forEach(input => input.checked = false);
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
    this.separationElement.classList.add('hidden');
    this.engagedAttackingElement.classList.add('hidden');
    this.engagedDefendingElement.classList.add('hidden');
    this.hillContainer.classList.add('hidden');
    this.leaderContainer.classList.add('hidden');
    this.terrainContainer.classList.add('hidden');
    this.targetElement.classList.add('hidden');
  }

  _move(e) {
    this._removeSelection();
    e.target.classList.add('selected');
    this.distanceElement.classList.remove('hidden');
    this.hillContainer.classList.remove('hidden');
    this.leaderContainer.classList.remove('hidden');
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
    this.separationElement.classList.remove('hidden');
    this.engagedAttackingElement.classList.remove('hidden');
    this.engagedDefendingElement.classList.remove('hidden');
    this.hillContainer.classList.remove('hidden');
    this.leaderContainer.classList.remove('hidden');
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
    this.separationElement.classList.remove('hidden');
    this.engagedAttackingElement.classList.remove('hidden');
    this.engagedDefendingElement.classList.remove('hidden');
    this.hillContainer.classList.remove('hidden');
    this.leaderContainer.classList.remove('hidden');
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
      this._activeBattle = state.battle.battles[state.battle.activeBattle];
      this._unit = new Unit(this._activeBattle.units[this._activeBattle.activeUnit], this._activeBattle.activeUnit);
      this._date = new Date(this._activeBattle.startTime + (this._activeBattle.second * 1000));
      this._hasActiveBattle = true;
    } else {
      this._hasActiveBattle = false;
    }
  }
}

window.customElements.define('fight-view', FightView);
