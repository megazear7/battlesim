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
      _chargeMessage: { type: String },
    };
  }

  static get styles() {
    return [
      SharedStyles,
      ButtonSharedStyles,
      css`
        input.stands {
          width: calc(50% - 3px);
          box-sizing: border-box;
        }
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
        #hill, #leader {
          width: calc(50% - 3px);
          box-sizing: border-box;
          display: inline-block;
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
            <input id="separation" class="hidden" type="number" placeholder="Distance (Required)"></input>
            <select id="target" class="hidden">
              <option value="">Select Target (Required)</option>
              ${repeat(this._unit.targets, target => html`
                <option value="${target.id}">${target.unit.name}</option>
              `)}
            </select>
            <br>
            <br>
            <div id="hill" class="hidden">
              <radiogroup>
                <input type="radio" name="hill" id="${SLOPE_UP}" value="${SLOPE_UP}">
                <label for="${SLOPE_UP}">Uphill</label>
                <br>
                <input type="radio" name="hill" id="${SLOPE_DOWN}" value="${SLOPE_DOWN}">
                <label for="${SLOPE_DOWN}">Downhill</label>
                <br>
                <input type="radio" name="hill" id="${SLOPE_NONE}" value="${SLOPE_NONE}">
                <label for="${SLOPE_NONE}">Neither</label>
                <br><br>
              </radiogroup>
            </div>
            <div id="leader" class="hidden">
              <radiogroup>
                <input type="radio" name="leader" id="general" value="general">
                <label for="general">General</label>
                <br>
                <input type="radio" name="leader" id="subcommander" value="subcommander">
                <label for="subcommander">Subcommander</label>
                <br>
                <input type="radio" name="leader" id="neither" value="neither">
                <label for="neither">Neither</label>
                <br><br>
              </radiogroup>
            </div>
            <div id="terrain" class="hidden">
              <input type="checkbox" id="terrain-checkbox"></input>
              <label for="terrain-checkbox">Difficult Terrain</label>
            </div>
            <div id="resupply" class="hidden">
              <input type="checkbox" id="resupply-checkbox"></input>
              <label for="resupply-checkbox">Resupply</label>
            </div>
            <p id="charge-message" class="hidden">${this._chargeMessage}</p>
            <input id="engaged-attackers" class="hidden stands" type="number" placeholder="Attacking Stands"></input>
            <input id="engaged-defenders" class="hidden stands" type="number" placeholder="Defending Stands"></input>
          <div>
          <div id="do-combat" class="hidden">
            <button @click="${this._doCombat}">Do Combat</button>
          </div>
          <div id="take-action" class="hidden">
            <button @click="${this._takeAction}">Take Action</button>
          </div>
          <p class="error hidden">You must provide valid values for each required field.</p>
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

  _progressToNextAction() {
    store.dispatch(takeAction(this._actionUpdates));
    this._actionUpdate = {};
    this.shadowRoot.getElementById('actions').style.display = 'block';
    this.shadowRoot.getElementById('take-action').style.display = 'block';
    this.shadowRoot.getElementById('action-result').style.display = 'none';
    this._actionMessageElement.innerText = '';
  }

  _doCombat() {
    if (this.validSituation) {
      this._hideInputs();
      let encounter = this._createEncounter();

      this._chargeMessage = encounter.chargeMessage;
      this.chargeMessageElement.classList.remove('hidden');

      if (encounter.attackerReachedDefender) {
        this.engagedAttackingElement.classList.remove('hidden');
        this.engagedDefendingElement.classList.remove('hidden');
      }

      this.shadowRoot.getElementById('take-action').classList.remove('hidden');
    } else {
      this._showError();
    }
  }

  _takeAction() {
    if (this.validSituation) {
      let actionResult;
      let skipResults = false;
      if (this._selectedAction === REST || this._selectedAction === MOVE) {
        let sitation = this._createSituation();
        actionResult = this._selectedAction === REST ? sitation.rest() : sitation.move(this.distance)
      } else {
        let encounter = this._createEncounter();
        actionResult = encounter.fight();
        skipResults = this._selectedAction === CHARGE && ! encounter.attackerReachedDefender;
      }

      this._actionMessages = actionResult.messages;
      this._actionUpdates = actionResult.updates;

      this._removeSelection();
      this.shadowRoot.getElementById('move').style.opacity = 1;
      this.shadowRoot.getElementById('charge').style.opacity = 1;
      this.shadowRoot.getElementById('rest').style.opacity = 1;
      this.shadowRoot.getElementById('fire').style.opacity = 1;
      this.distanceElement.value = '';
      this.separationElement.value = '';
      this.engagedAttackingElement.value = '';
      this.engagedDefendingElement.value = '';
      this.hillContainer.querySelectorAll('input').forEach(input => input.checked = false);
      this.leaderContainer.querySelectorAll('input').forEach(input => input.checked = false);
      this.terrainContainer.querySelector('input').checked = false;
      this.resupplyContainer.querySelector('input').checked = false;
      this.targetElement.value = '';
      this.shadowRoot.getElementById('take-action').style.display = 'none';
      this.shadowRoot.getElementById('actions').style.display = 'none';

      if (skipResults) {
        this._removeSelection();
        this._progressToNextAction();
      } else {
        this.shadowRoot.getElementById('action-result').style.display = 'block';
      }
    } else {
      this._showError();
    }
  }

  _createEncounter() {
    return new Encounter({
      attacker: this._unit,
      attackerTerrainDefense: 0,
      attackerArmyLeadership: 0,
      attackerEngagedStands: this.engagedAttackers,
      defender: new Unit(this._activeBattle.units[this.target], this.target),
      defenderTerrainDefense: 0,
      defenderArmyLeadership: 0,
      defenderEngagedStands: this.engagedDefenders,
      melee: this._selectedAction === CHARGE,
      separation: this.separation,
      terrain: this.terrainModifier,
      slope: this.slope });
  }

  _createSituation() {
    return new Situation({
          unit: this._unit,
          armyLeadership: 0,
          terrain: this.terrainModifier,
          slope: this.slope });
  }

  _showError() {
    this.errorElement.classList.remove('hidden');
    setTimeout(() => {
      this.errorElement.classList.add('hidden');
    }, 3000);
  }

  _removeSelection() {
    [...this.shadowRoot.querySelectorAll('button')]
    .forEach(button => button.classList.remove('selected'));
    this._hideInputs();
  }

  _hideInputs() {
    this.distanceElement.classList.add('hidden');
    this.separationElement.classList.add('hidden');
    this.engagedAttackingElement.classList.add('hidden');
    this.engagedDefendingElement.classList.add('hidden');
    this.hillContainer.classList.add('hidden');
    this.leaderContainer.classList.add('hidden');
    this.terrainContainer.classList.add('hidden');
    this.resupplyContainer.classList.add('hidden');
    this.targetElement.classList.add('hidden');
    this.chargeMessageElement.classList.add('hidden');
    this.shadowRoot.getElementById('do-combat').classList.add('hidden');
    this.shadowRoot.getElementById('take-action').classList.add('hidden');
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
    this.shadowRoot.getElementById('take-action').classList.remove('hidden');
    this._selectedAction = MOVE;
  }

  _charge(e) {
    this._removeSelection();
    e.target.classList.add('selected');
    this.separationElement.classList.remove('hidden');
    this.hillContainer.classList.remove('hidden');
    this.leaderContainer.classList.remove('hidden');
    this.terrainContainer.classList.remove('hidden');
    this.targetElement.classList.remove('hidden');
    this.shadowRoot.getElementById('move').style.opacity = 0.5;
    this.shadowRoot.getElementById('charge').style.opacity = 1;
    this.shadowRoot.getElementById('rest').style.opacity = 0.5;
    this.shadowRoot.getElementById('fire').style.opacity = 0.5;
    this.shadowRoot.getElementById('do-combat').classList.remove('hidden');
    this._selectedAction = CHARGE;
  }

  _rest(e) {
    this._removeSelection();
    e.target.classList.add('selected');
    this.shadowRoot.getElementById('move').style.opacity = 0.5;
    this.shadowRoot.getElementById('charge').style.opacity = 0.5;
    this.shadowRoot.getElementById('rest').style.opacity = 1;
    this.shadowRoot.getElementById('fire').style.opacity = 0.5;
    this.shadowRoot.getElementById('take-action').classList.remove('hidden');
    this.resupplyContainer.classList.remove('hidden');
    this._selectedAction = REST;
  }

  _fire(e) {
    this._removeSelection();
    e.target.classList.add('selected');
    this.separationElement.classList.remove('hidden');
    this.hillContainer.classList.remove('hidden');
    this.leaderContainer.classList.remove('hidden');
    this.terrainContainer.classList.remove('hidden');
    this.targetElement.classList.remove('hidden');
    this.engagedAttackingElement.classList.remove('hidden');
    this.engagedDefendingElement.classList.remove('hidden');
    this.shadowRoot.getElementById('move').style.opacity = 0.5;
    this.shadowRoot.getElementById('charge').style.opacity = 0.5;
    this.shadowRoot.getElementById('rest').style.opacity = 0.5;
    this.shadowRoot.getElementById('fire').style.opacity = 1;
    this.shadowRoot.getElementById('take-action').classList.remove('hidden');
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

  get distanceElement() {
    return this.shadowRoot.getElementById('distance');
  }

  get separationElement() {
    return this.shadowRoot.getElementById('separation');
  }

  get chargeMessageElement() {
    return this.shadowRoot.getElementById('charge-message');
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

  get resupplyContainer() {
    return this.shadowRoot.getElementById('resupply');
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

  get resupply() {
    return this.resupplyContainer.querySelector('input').checked;
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
}

window.customElements.define('fight-view', FightView);
