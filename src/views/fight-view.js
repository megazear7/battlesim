import { html, css } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { classMap } from 'lit-html/directives/class-map.js';
import BattleViewWrapper from './battle-view-wrapper.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';
import { takeAction, takeArmyAction, finishEvent } from '../actions/battle.js';
import { SharedStyles } from '../styles/shared-styles.js';
import { ButtonSharedStyles } from '../styles/button-shared-styles.js';
import Encounter from '../models/encounter.js';
import Situation from '../models/situation.js';
import Battle from '../models/battle.js';
import Unit from '../models/unit.js';
import { MINUTES_PER_TURN, REST, MOVE, CHARGE, FIRE, NO_ACTION } from '../game.js';
import { TERRAIN_TYPE_MOVEMENT, TERRAIN_TYPE_MELEE_COMBAT } from '../components/fight-selectors.js';

class FightView extends BattleViewWrapper {
  static get properties() {
    return {
      _targetUnit: { type: Object },
      _actionMessages: { type: Array },
      _chargeMessage: { type: String },
      _showDistance: { type: Boolean },
      _showRestTime: { type: Boolean },
      _showSeparation: { type: Boolean },
      _showTarget: { type: Boolean },
      _showChargeMessage: { type: Boolean },
      _showEngagedAttackers: { type: Boolean },
      _showDoCombat: { type: Boolean },
      _showTakeAction: { type: Boolean },
      _showActionResult: { type: Boolean },
      _actionsDisabled: { type: Boolean },
      _hasSelection: { type: Boolean },
    };
  }

  static get styles() {
    return [
      SharedStyles,
      ButtonSharedStyles,
      css`
        .unit-actions button {
          margin-bottom: 0;
        }
        [has-selection] button {
          opacity: 0.6;
        }
        [has-selection] button.selected {
          opacity: 1;
        }
      `
    ];
  }

  battleViewRender() {
    return html`
      ${this._activeBattle.unitIsActing ? html`
        <section>
          <h2>${this._activeBattle.activeUnit.name}</h2>
          <div class="muted centered">Army: ${this._activeBattle.activeArmyModel.name}</div>
          <div class="muted centered">${this._activeBattle.currentTimeMessage}</div>
          <p>${this._activeBattle.activeUnit.detailedStatus}</p>
          <hr>
          <p>${this._activeBattle.activeUnit.desc}</p>
        </section>
        <section>
          <div class="unit-actions">
            <button-tray ?has-selection="${this._hasSelection}">
              <button @click="${this._rest}" id="rest" ?disabled="${this._actionsDisabled}" class="${classMap({selected: this._selectedAction === REST})}">Rest</button>
              <button @click="${this._move}" id="move" ?disabled="${this._actionsDisabled}" class="${classMap({selected: this._selectedAction === MOVE})}">Move</button>
              <button @click="${this._charge}" id="charge" ?disabled="${this._actionsDisabled}" class="${classMap({selected: this._selectedAction === CHARGE})}">Charge</button>
              <button @click="${this._fire}" id="fire" ?disabled="${this._actionsDisabled}" class="${classMap({selected: this._selectedAction === FIRE})}">Fire</button>
            </button-tray>
          </div>
        </section>
        <section>
          <div>
            <p class="${classMap({hidden: ! this._showChargeMessage})}">${this._chargeMessage}</p>
            <div class="row">
              <input id="separation" class="${classMap({hidden: ! this._showSeparation})}" type="number" placeholder="Distance"></input>
              <select id="target" class="${classMap({hidden: ! this._showTarget})}" @change="${this._updateTarget}">
                <option value="">Select Target</option>
                ${repeat(this._activeBattle.activeUnit.targets, target => html`
                  <option value="${target.id}">${target.unit.name}</option>
                `)}
              </select>
            </div>
            <button-tray class="${classMap({hidden: ! this._showDoCombat})}">
              <button @click="${this._doCombat}">Do Combat</button>
            </button-tray>
            <button-tray class="${classMap({hidden: ! this._showTakeAction})}">
              <button @click="${this._takeAction}">Take Action</button>
            </button-tray>
            <battle-sim-alert warning>You must provide a value for each field listed above the button</battle-sim-alert>
            <input id="distance" class="${classMap({hidden: ! this._showDistance})}" type="number" placeholder="Distance"></input>
            <input id="rest-time" class="${classMap({hidden: ! this._showRestTime})}" type="number" placeholder="Minutes to rest" max="${MINUTES_PER_TURN}"></input>
            <div class="${classMap({'row': true, hidden: ! this._showEngagedAttackers && ! this._showEngagedDefenders})}">
              <input id="engaged-attackers" class="${classMap({hidden: ! this._showEngagedAttackers, full: this._showEngagedAttackers && ! this._showEngagedDefenders, stands: true})}" type="number" placeholder="Attacking Stands"></input>
              <input id="engaged-defenders" class="${classMap({hidden: ! this._showEngagedDefenders, stands: true})}" type="number" placeholder="Defending Stands"></input>
            </div>
            <fight-selectors .battle="${this._activeBattle}" action="${this._selectedAction}"></fight-selectors>
            <div class="${classMap({hidden: ! this._showActionResult})}">
              ${repeat(this._actionMessages, message => html`<p>${message}</p>`)}
              <button-tray>
                <button @click="${this._progressToNextAction}">Next Action</button>
              </button-tray>
            </div>
          </div>
        </section>
      `: this._activeBattle.armyIsActing ? html`
          <section>
            <army-action .battle="${this._activeBattle}" @done="${this._takeArmyAction}"></army-action>
          </section>
        ` : html`
          <section>
            <battle-event .battle="${this._activeBattle}" @done="${this._finishEvent}"></battle-event>
          </section>
        `
      }
    `;
  }

  constructor() {
    super();
    this._actionUpdates = [];
  }

  _doCombat() {
    if (this._validSituation) {
      this._hideInputs();
      const encounter = this._createEncounter();
      this._chargeMessage = encounter.chargeMessage;
      this._showEngagedAttackers = encounter.attackerReachedDefender;
      this._showEngagedDefenders = encounter.attackerReachedDefender;
      this._actionsDisabled = true;
      this._showTakeAction = true;
      this._showChargeMessage = true;
    } else {
      this.shadowRoot.querySelector('battle-sim-alert').alert();
    }
  }

  _takeAction() {
    if (this._validSituation) {
      let actionResult;
      let skipResults;
      if (this._selectedAction === REST || this._selectedAction === MOVE) {
        const situation = this._createSituation();
        actionResult = this._selectedAction === REST ? situation.rest(this.restTime) : situation.move(this.distance);
        skipResults = false;
      } else {
        let encounter = this._createEncounter()
        actionResult = encounter.fight();
        skipResults = this._selectedAction === CHARGE && ! encounter.attackerReachedDefender;
      }

      this._actionMessages = actionResult.messages;
      this._actionUpdates = actionResult.updates;
      this._savedEnvironment = this._environment;
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
      this.shadowRoot.querySelector('battle-sim-alert').alert();
    }
  }

  _progressToNextAction() {
    store.dispatch(takeAction(this._actionUpdates, this._actionMessages, this._savedEnvironment));
    this._resetAction();
  }

  _takeArmyAction() {
    store.dispatch(takeArmyAction());
    this._resetAction();
  }

  _finishEvent() {
    store.dispatch(finishEvent());
    this._resetAction();
  }

  _resetAction() {
    this._hasSelection = false;
    this._actionUpdates = [];
    this._showActionResult = false;
    this._actionsDisabled = false;
    window.scroll(0, 0);
  }

  _rest(e) {
    this._hideInputs();
    this._hasSelection = true;
    this._selectedAction = REST;
    this._showTakeAction = true;
    this._showRestTime = true;
    this._fightSelectors.showResupply = true;
    this._fightSelectors.showMount = this._activeBattle.activeUnit.isMounted && this._activeBattle.activeUnit.canUnmount;
  }

  _move(e) {
    this._hideInputs();
    this._hasSelection = true;
    this._selectedAction = MOVE;
    this._showDistance = true;
    this._showTakeAction = true;
    this._fightSelectors.showHill = true;
    this._fightSelectors.showPace = true;
    this._fightSelectors.showLeader = true;
    this._fightSelectors.showTerrain = true;
  }

  _charge(e) {
    this._hideInputs();
    this._hasSelection = true;
    this._selectedAction = CHARGE;
    this._showSeparation = true;
    this._showTarget = true;
    this._showDoCombat = true;
    this._fightSelectors.showHill = true;
    this._fightSelectors.showLeader = true;
    this._fightSelectors.showTerrain = true;
  }

  _fire(e) {
    this._hideInputs();
    this._hasSelection = true;
    this._selectedAction = FIRE;
    this._showSeparation = true;
    this._showTarget = true;
    this._showEngagedAttackers = true;
    this._showTakeAction = true;
    this._fightSelectors.showHill = true;
    this._fightSelectors.showLeader = true;
    this._fightSelectors.showTerrain = true;
  }

  _createEncounter() {
    return new Encounter({
      attacker: this._activeBattle.activeUnit,
      attackerArmyLeadership: this._activeArmyLeadership,
      attackerEngagedStands: this.engagedAttackers,
      defender: this._activeBattle.unitModels[this.target],
      defenderArmyLeadership: this._defenderArmyLeadership,
      defenderEngagedStands: this.engagedDefenders,
      melee: this._selectedAction === CHARGE,
      separation: this.separation,
      attackerChargeTerrain: this._fightSelectors._selectedTerrain(TERRAIN_TYPE_MOVEMENT),
      defenderTerrain: this._fightSelectors._defenderTerrain,
      meleeCombatTerrain: this._fightSelectors._selectedTerrain(TERRAIN_TYPE_MELEE_COMBAT),
      slope: this._fightSelectors.slope });
  }

  _createSituation() {
    return new Situation({
      unit: this._activeBattle.activeUnit,
      armyLeadership: this._activeArmyLeadership,
      movementTerrain: this._fightSelectors._selectedTerrain(TERRAIN_TYPE_MOVEMENT),
      mount: this._fightSelectors.mount,
      unmount: this._fightSelectors.unmount,
      pace: this._fightSelectors.pace,
      slope: this._fightSelectors.slope });
  }

  _hideInputs() {
    this._showDistance = false;
    this._showRestTime = false;
    this._showSeparation = false;
    this._showEngagedAttackers = false;
    this._showEngagedDefenders = false;
    this._showTarget = false;
    this._showChargeMessage = false;
    this._showDoCombat = false;
    this._showTakeAction = false;
    this._fightSelectors.hide();
  }

  _resetInputs() {
    this.get('distance').value = '';
    this.get('rest-time').value = '';
    this.get('separation').value = '';
    this.get('engaged-attackers').value = '';
    this.get('engaged-defenders').value = '';
    this.get('target').value = '';
    this._fightSelectors.reset();
    [...this.shadowRoot.querySelectorAll('battle-sim-option')].forEach(option => option.selected = false);
  }

  _updateTarget() {
    if (this.target && ! isNaN(this.target)) {
      this._targetUnit = this._activeBattle.unitModels[this.target];
    } else {
      this._targetUnit =  null;
    }
  }

  get target() {
    if (this.get('target')) {
      return parseInt(this.get('target').value);
    } else {
      return null;
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

  get restTime() {
    return Math.min(parseInt(this.get('rest-time').value === '' ? MINUTES_PER_TURN : this.get('rest-time').value), MINUTES_PER_TURN);
  }

  get separation() {
    return parseInt(this.get('separation').value ? this.get('separation').value : 0);
  }

  get engagedAttackers() {
    return parseInt(this.get('engaged-attackers').value === '' ? -1 : this.get('engaged-attackers').value);
  }

  get engagedDefenders() {
    if (this._selectedAction === CHARGE) {
      return parseInt(this.get('engaged-defenders').value === '' ? -1 : this.get('engaged-defenders').value);
    } else {
      return 0;
    }
  }

  get _activeArmyLeadership() {
    return this.get('attacker-leadership') && this.get('attacker-leadership').value;
  }

  get _defenderArmyLeadership() {
    return this.get('defender-leadership') && this.get('defender-leadership').value;
  }

  get _environment() {
    return {
      resupply: this._fightSelectors.resupply,
      mount: this._fightSelectors.mount,
      unmount: this._fightSelectors.unmount,
      defenderArmyLeadership: this._defenderArmyLeadership,
      activeArmyLeadership: this._activeArmyLeadership,
      pace: this._fightSelectors.pace,
      slope: this._fightSelectors.slope,
      engagedDefenders: this.engagedDefenders,
      engagedAttackers: this.engagedAttackers,
      separation: this.separation,
      restTime: this.restTime,
      distance: this.distance,
      selectedAction: this._selectedAction,
      target: this.target,
      defenderTerrain: this._fightSelectors._defenderTerrain,
      attackerChargeTerrain: this._fightSelectors._selectedTerrain(TERRAIN_TYPE_MOVEMENT),
      meleeCombatTerrain: this._fightSelectors._selectedTerrain(TERRAIN_TYPE_MELEE_COMBAT),
    }
  }

  get _fightSelectors() {
    return this.shadowRoot.querySelector('fight-selectors');
  }

  get(id) {
    return this.shadowRoot.getElementById(id);
  }
}

window.customElements.define('fight-view', FightView);
