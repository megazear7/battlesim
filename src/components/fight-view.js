import { html, css } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { classMap } from 'lit-html/directives/class-map.js';
import { PageViewElement } from './page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';
import { takeAction } from '../actions/battle.js';
import { SharedStyles } from './shared-styles.js';
import { ButtonSharedStyles } from './button-shared-styles.js';
import Unit from '../unit.js';
import { prettyDateTime } from '../math-utils.js';
import { getRadioVal } from '../dom-utils.js';
import { SLOPE_UP, SLOPE_DOWN, SLOPE_NONE } from '../terrain.js';
import Encounter from '../encounter.js';
import Situation from '../situation.js';

const REST = 'REST';
const MOVE = 'MOVE';
const CHARGE = 'CHARGE';
const FIRE = 'FIRE';
const ACTIONS = [ REST, MOVE, CHARGE, FIRE ];
const NO_ACTION = 'NO_ACTION';

class FightView extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      _unit: { type: Object },
      _hasActiveBattle: { type: Boolean },
      _actionMessages: { type: Array },
      _date: { type: Object },
      _chargeMessage: { type: String },
      _showDistance: { type: Boolean },
      _showSeparation: { type: Boolean },
      _showTarget: { type: Boolean },
      _showHill: { type: Boolean },
      _showLeader: { type: Boolean },
      _showTerrain: { type: Boolean },
      _showResupply: { type: Boolean },
      _showChargeMessage: { type: Boolean },
      _showEnagedStands: { type: Boolean },
      _showDoCombat: { type: Boolean },
      _showTakeAction: { type: Boolean },
      _showError: { type: Boolean },
      _showActionResult: { type: Boolean },
      _actionsDisabled: { type: Boolean },
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
        #hill, #leader {
          width: calc(50% - 3px);
          box-sizing: border-box;
          display: inline-block;
        }
        .has-selection button {
          opacity: 0.5;
        }
        button.selected {
          opacity: 1;
        }
      `
    ];
  }

  render() {
    return html`
      ${this._hasActiveBattle ? html`
        <section>
          <h2>${this._unit.name}</h2>
          <div class="muted centered">Army: ${this._unit.army.name}</div>
          <div class="muted centered">${prettyDateTime(this._date)}</div>
          <p>${this._unit.detailedStatus}</p>
          <hr>
          <p>${this._unit.desc}</p>
        </section>
        <section>
          <div class="${classMap({'has-selection': this._actionSelected})}">
            <button @click="${this._rest}" id="rest" ?disabled="${this._actionsDisabled}" class="${classMap({selected: this._selectedAction === REST})}">Rest</button>
            <button @click="${this._move}" id="move" ?disabled="${this._actionsDisabled}" class="${classMap({selected: this._selectedAction === MOVE})}">Move</button>
            <button @click="${this._charge}" id="charge" ?disabled="${this._actionsDisabled}" class="${classMap({selected: this._selectedAction === CHARGE})}">Charge</button>
            <button @click="${this._fire}" id="fire" ?disabled="${this._actionsDisabled}" class="${classMap({selected: this._selectedAction === FIRE})}">Fire</button>
          </div>
        </section>
        <section>
          <div>
            <input id="distance" class="${classMap({hidden: ! this._showDistance})}" type="number" placeholder="Distance (Leave blank to move as far as possible)"></input>
            <input id="separation" class="${classMap({hidden: ! this._showSeparation})}" type="number" placeholder="Distance (Required)"></input>
            <select id="target" class="${classMap({hidden: ! this._showTarget})}">
              <option value="">Select Target (Required)</option>
              ${repeat(this._unit.targets, target => html`
                <option value="${target.id}">${target.unit.name}</option>
              `)}
            </select>
            <radiogroup id="hill" class="${classMap({hidden: ! this._showHill})}">
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
            <radiogroup id="leader" class="${classMap({hidden: ! this._showLeader})}">
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
            <div id="terrain" class="${classMap({hidden: ! this._showTerrain})}">
              <input type="checkbox" id="terrain-checkbox"></input>
              <label for="terrain-checkbox">Difficult Terrain</label>
            </div>
            <div id="resupply" class="${classMap({hidden: ! this._showResupply})}">
              <input type="checkbox" id="resupply-checkbox"></input>
              <label for="resupply-checkbox">Resupply</label>
            </div>
            <p class="${classMap({hidden: ! this._showChargeMessage})}">${this._chargeMessage}</p>
            <input id="engaged-attackers" class="${classMap({hidden: ! this._showEnagedStands, stands: true})}" type="number" placeholder="Attacking Stands"></input>
            <input id="engaged-defenders" class="${classMap({hidden: ! this._showEnagedStands, stands: true})}" type="number" placeholder="Defending Stands"></input>
            <button class="${classMap({hidden: ! this._showDoCombat})}" @click="${this._doCombat}">Do Combat</button>
            <button class="${classMap({hidden: ! this._showTakeAction})}" @click="${this._takeAction}">Take Action</button>
            <p class="${classMap({hidden: ! this._showError, error: true})}">You must provide valid values for each required field.</p>
            <div class="${classMap({hidden: ! this._showActionResult})}">
              ${repeat(this._actionMessages, message => html`<p>${message}</p>`)}
              <button @click="${this._progressToNextAction}">Next Action</button>
            </div>
          <div>
        </section>
      `:html`
        <section>
          <p>No active battle. Go to the war tab and either select a battle or create a new battle.</p>
        </section>
      `}
    `;
  }

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

  _doCombat() {
    if (this._validSituation) {
      this._hideInputs();
      const encounter = this._createEncounter();
      this._chargeMessage = encounter.chargeMessage;
      this._showEnagedStands = encounter.attackerReachedDefender;
      this._actionsDisabled = true;
      this._showTakeAction = true;
      this._showChargeMessage = true;
    } else {
      this._blinkError();
    }
  }

  _takeAction() {
    if (this._validSituation) {
      let actionResult;
      let skipResults;
      if (this._selectedAction === REST || this._selectedAction === MOVE) {
        const situation = this._createSituation();
        actionResult = this._selectedAction === REST ? situation.rest() : situation.move(this.distance);
        skipResults = false;
      } else {
        let encounter = this._createEncounter()
        actionResult = encounter.fight();
        skipResults = this._selectedAction === CHARGE && ! encounter.attackerReachedDefender;
      }

      this._actionMessages = actionResult.messages;
      this._actionUpdates = actionResult.updates;
      this._hideInputs();
      this._resetInputs();
      this._selectedAction = NO_ACTION;
      this._actionsDisabled = true;
      this._showTakeAction = false;

      if (skipResults) {
        this._progressToNextAction();
      } else {
        this._showActionResult = true;
      }
    } else {
      this._blinkError();
    }
  }

  _progressToNextAction() {
    store.dispatch(takeAction(this._actionUpdates));
    this._actionUpdate = {};
    this._showActionResult = false;
    this._actionsDisabled = false;
  }

  _rest(e) {
    this._hideInputs();
    this._selectedAction = REST;
    this._showTakeAction = true;
    this._showResupply = true;
  }

  _move(e) {
    this._hideInputs();
    this._selectedAction = MOVE;
    this._showDistance = true;
    this._showHill = true;
    this._showLeader = true;
    this._showTerrain = true;
    this._showTakeAction = true;
  }

  _charge(e) {
    this._hideInputs();
    this._selectedAction = CHARGE;
    this._showSeparation = true;
    this._showHill = true;
    this._showLeader = true;
    this._showTerrain = true;
    this._showTarget = true;
    this._showDoCombat = true;
  }

  _fire(e) {
    this._hideInputs();
    this._selectedAction = FIRE;
    this._showSeparation = true;
    this._showHill = true;
    this._showLeader = true;
    this._showTerrain = true;
    this._showTarget = true;
    this._showEnagedStands = true;
    this._showTakeAction = true;
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
      terrain: this._terrainModifier,
      slope: this.slope });
  }

  _createSituation() {
    return new Situation({
          unit: this._unit,
          armyLeadership: 0,
          terrain: this._terrainModifier,
          slope: this.slope });
  }

  _hideInputs() {
    this._showDistance = false;
    this._showSeparation = false;
    this._showEnagedStands = false;
    this._showHill = false;
    this._showLeader = false;
    this._showTerrain = false;
    this._showResupply = false;
    this._showTarget = false;
    this._showChargeMessage = false;
    this._showDoCombat = false;
    this._showTakeAction = false;
  }

  _resetInputs() {
    this.get('distance').value = '';
    this.get('separation').value = '';
    this.get('engaged-attackers').value = '';
    this.get('engaged-defenders').value = '';
    this.get('hill').querySelectorAll('input').forEach(input => input.checked = false);
    this.get('leader').querySelectorAll('input').forEach(input => input.checked = false);
    this.get('terrain').querySelector('input').checked = false;
    this.get('resupply').querySelector('input').checked = false;
    this.get('target').value = '';
  }

  _blinkError() {
    this._showError = true;
    setTimeout(() => {
      this._showError = false;
    }, 3000);
  }

  get _actionSelected() {
    return ACTIONS.indexOf(this._selectedAction) >= 0;
  }

  get _terrainModifier() {
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

  get _validSituation() {
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

  get distance() {
    return parseInt(this.get('distance').value === '' ? -1 : this.get('distance').value);
  }

  get separation() {
    return parseInt(this.get('separation').value ? this.get('separation').value : 0);
  }

  get engagedAttackers() {
    return parseInt(this.get('engaged-attackers').value === '' ? 0 : this.get('engaged-attackers').value);
  }

  get engagedDefenders() {
    return parseInt(this.get('engaged-defenders').value === '' ? 0 : this.get('engaged-defenders').value);
  }

  get slope() {
    const radioVal = getRadioVal(this.get('hill'), 'hill');
    return radioVal ? radioVal : SLOPE_NONE;
  }

  get generalNearby() {
    return getRadioVal(this.get('leader'), 'leader') === 'general';
  }

  get subcommanderNearby() {
    return getRadioVal(this.get('leader'), 'leader') === 'subcommander';
  }

  get terrain() {
    return this.get('terrain').querySelector('input').checked;
  }

  get resupply() {
    return this.get('resupply').querySelector('input').checked;
  }

  get target() {
    return parseInt(this.get('target').value);
  }

  get(id) {
    return this.shadowRoot.getElementById(id);
  }
}

window.customElements.define('fight-view', FightView);
