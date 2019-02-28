import { html, css } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { classMap } from 'lit-html/directives/class-map.js';
import { PageViewElement } from './page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';
import { takeAction, takeArmyAction, finishEvent } from '../actions/battle.js';
import { SharedStyles } from '../styles/shared-styles.js';
import { ButtonSharedStyles } from '../styles/button-shared-styles.js';
import { getRadioVal } from '../utils/dom-utils.js';
import { SLOPE_UP, SLOPE_DOWN, SLOPE_NONE } from '../models/terrain.js';
import TERRAIN from '../game/terrain.js';
import Encounter from '../models/encounter.js';
import Situation from '../models/situation.js';
import Battle from '../models/battle.js';
import Unit from '../models/unit.js';
import { MINUTES_PER_TURN } from '../game.js';

export const REST = 'REST';
export const MOVE = 'MOVE';
export const CHARGE = 'CHARGE';
export const FIRE = 'FIRE';
export const ACTIONS = [ REST, MOVE, CHARGE, FIRE ];
export const NO_ACTION = 'NO_ACTION';

export const TERRAIN_TYPE_MOVEMENT = 'movement-terrain';
export const TERRAIN_TYPE_DEFENDER = 'defender-terrain';
export const TERRAIN_TYPE_MELEE_COMBAT = 'melee-combat-terrain';
export const TERRAIN_TYPE_RANGED_DEFENDER = 'ranged-defender-terrain';
export const TERRAIN_TYPES = [ TERRAIN_TYPE_MOVEMENT, TERRAIN_TYPE_DEFENDER, TERRAIN_TYPE_MELEE_COMBAT, TERRAIN_TYPE_RANGED_DEFENDER ];

class FightView extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      _targetUnit: { type: Object },
      _actionMessages: { type: Array },
      _chargeMessage: { type: String },
      _showDistance: { type: Boolean },
      _showRestTime: { type: Boolean },
      _showSeparation: { type: Boolean },
      _showTarget: { type: Boolean },
      _showHill: { type: Boolean },
      _showPace: { type: Boolean },
      _showLeader: { type: Boolean },
      _showTerrain: { type: Boolean },
      _showResupply: { type: Boolean },
      _showMount: { type: Boolean },
      _showChargeMessage: { type: Boolean },
      _showEngagedAttackers: { type: Boolean },
      _showDoCombat: { type: Boolean },
      _showTakeAction: { type: Boolean },
      _showError: { type: Boolean },
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
        input.stands {
          width: calc(50% - 0.5rem);
          box-sizing: border-box;
        }
        input.stands:nth-child(odd) {
          margin-right: 1rem;
        }
        .options-container {
          font-size: 0; /* This solves the side by side inline-block element issue but be careful it might introduce other problems. */
        }
        .options-block {
          font-size: 1rem;
          width: 50%;
          box-sizing: border-box;
          display: inline-block;
          vertical-align: top;
        }
        label {
          font-size: 1rem;
        }
        .full {
          width: 100% !important;
          margin-right: 0;
        }
        .has-selection button {
          opacity: 0.6;
        }
        .unit-actions {
          font-size: 0;
          padding-top: 0;
          padding-bottom: 0;
        }
        .unit-actions button {
          width: 25%;
          box-sizing: border-box;
          background-color: white;
          margin: 0;
          display: inline-block;
          padding: 1rem 0.25rem;
          font-size: 0.8rem;
          border-left: 1.5px solid var(--app-primary-color);
          border-right: 1.5px solid var(--app-primary-color);
        }
        .unit-actions button:first-child {
          border-left: 3px solid var(--app-primary-color);
        }
        .unit-actions button:last-child {
          border-right: 3px solid var(--app-primary-color);
        }
        .unit-actions button {
          opacity: 1;
        }
        .unit-actions button:hover {
          background-color: var(--app-primary-color);
        }
        .unit-actions button.selected {
          background-color: var(--app-primary-color);
        }
        .unit-actions button:disabled {
          border-color: grey;
        }
        .unit-actions button.selected {
          color: white;
          border-width: 3px 1.5px;
          border-style: solid;
          border-color: var(--app-primary-color);
        }
        .has-selection button:disabled:hover {
          background-color: white;
        }
        .tooltip {
          position: relative;
          display: inline-block;
        }
        .tooltip .tooltiptext {
          visibility: hidden;
          width: 10rem;
          background-color: var(--app-primary-color);
          color: var(--app-light-text-color);
          text-align: center;
          padding: 10px;
          border-radius: 6px;
          position: absolute;
          z-index: 1;
        }
        .tooltip:hover .tooltiptext {
          visibility: visible;
        }
        .take-action {
          margin-top: 0;
        }
        .do-combat {
          margin-top: 0;
        }
        #separation {
          width: calc(50% - 0.5rem);
          margin-right: 1rem;
        }
        #target {
          width: calc(50% - 0.5rem);
        }
      `
    ];
  }

  render() {
    return html`
      ${this._activeBattle ? html`
        ${this._activeBattle.unitIsActing ? html`
          <section>
            <h2>${this._activeBattle.activeUnit.name}</h2>
            <div class="muted centered">Army: ${this._activeBattle.activeUnit.army.name}</div>
            <div class="muted centered">${this._activeBattle.currentTimeMessage}</div>
            <p>${this._activeBattle.activeUnit.detailedStatus}</p>
            <hr>
            <p>${this._activeBattle.activeUnit.desc}</p>
          </section>
          <section class="unit-actions">
            <div class="${classMap({'has-selection': this._hasSelection})}">
              <button @click="${this._rest}" id="rest" ?disabled="${this._actionsDisabled}" class="${classMap({selected: this._selectedAction === REST})}">Rest</button>
              <button @click="${this._move}" id="move" ?disabled="${this._actionsDisabled}" class="${classMap({selected: this._selectedAction === MOVE})}">Move</button>
              <button @click="${this._charge}" id="charge" ?disabled="${this._actionsDisabled}" class="${classMap({selected: this._selectedAction === CHARGE})}">Charge</button>
              <button @click="${this._fire}" id="fire" ?disabled="${this._actionsDisabled}" class="${classMap({selected: this._selectedAction === FIRE})}">Fire</button>
            </div>
          </section>
          <section>
            <div class="options-container">
              <p class="${classMap({hidden: ! this._showChargeMessage})}">${this._chargeMessage}</p>
              <input id="separation" class="${classMap({hidden: ! this._showSeparation})}" type="number" placeholder="Distance"></input>
              <select id="target" class="${classMap({hidden: ! this._showTarget})}" @change="${this._updateTarget}">
                <option value="">Select Target</option>
                ${repeat(this._activeBattle.activeUnit.targets, target => html`
                  <option value="${target.id}">${target.unit.name}</option>
                `)}
              </select>
              <button class="${classMap({hidden: ! this._showDoCombat, 'do-combat': true})}" @click="${this._doCombat}">Do Combat</button>
              <button class="${classMap({hidden: ! this._showTakeAction, 'take-action': true})}" @click="${this._takeAction}">Take Action</button>
              <battle-sim-alert warning>You must provide a value for each field listed above the button</battle-sim-alert>
              <input id="distance" class="${classMap({hidden: ! this._showDistance})}" type="number" placeholder="Distance"></input>
              <input id="rest-time" class="${classMap({hidden: ! this._showRestTime})}" type="number" placeholder="Minutes to rest" max="${MINUTES_PER_TURN}"></input>
              <div class="${classMap({hidden: ! this._showEngagedAttackers && ! this._showEngagedDefenders})}">
                <input id="engaged-attackers" class="${classMap({hidden: ! this._showEngagedAttackers, full: this._showEngagedAttackers && ! this._showEngagedDefenders, stands: true})}" type="number" placeholder="Attacking Stands"></input>
                <input id="engaged-defenders" class="${classMap({hidden: ! this._showEngagedDefenders, stands: true})}" type="number" placeholder="Defending Stands"></input>
              </div>
              <br>
              <div class="${classMap({"options-block": true, hidden: ! this._showTerrain})}">
                ${repeat(this._typesOfTerrain, terrainType => html`
                  <div id="${terrainType.id}" class="${classMap({hidden: ! terrainType.show})}">
                    <h5 class="tooltip">
                      ${terrainType.name}
                      <span class="tooltiptext">${terrainType.description}</span>
                    </h5>
                    ${repeat(terrainType.terrain, ({terrain, index}) => html`
                      <div>
                        <input type="checkbox" id="${terrainType.id+index}" data-terrain-index="${index}"></input>
                        <label for="${terrainType.id+index}">
                          ${terrain.name}
                          <span class="tooltip">
                            ...
                            <span class="tooltiptext">${terrain.descripton}</span>
                          <span>
                        </label>
                      </div>
                    `)}
                  </div>
                `)}
                <div class="${classMap({hidden: this.showPace})}">
                  <radiogroup id="pace" class="${classMap({hidden: ! this._showPace})}">
                    <h5>Pace</h5>
                    <input type="radio" name="pace" id="pace-fast" value="1">
                    <label for="pace-fast">Fast</label>
                    <br>
                    <input type="radio" name="pace" id="pace-march" value="0.75" checked>
                    <label for="pace-march">March</label>
                    <br>
                    <input type="radio" name="pace" id="pace-rest" value="0.5">
                    <label for="pace-rest">Rest</label>
                    <br><br>
                  </radiogroup>
                </div>
              </div>
              <div class="${classMap({"options-block": true, hidden: ! this._showHill && ! this._showLeader})}">
                <radiogroup id="hill" class="${classMap({hidden: ! this._showHill})}">
                  <h5>Hills</h5>
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
                <h5>Leadership</h5>
                <div id="leadership">
                  <radiogroup id="attacker-leader" class="${classMap({hidden: ! this._showLeader})}">
                    <h6>${this._activeBattle.activeUnit.name}</h6>
                    ${repeat(this._activeBattle.activeUnit.army.leaders, (leader, index) => html`
                      <input type="radio" name="attacker-leader" id="${'attacker-leader-'+index}" value="${leader.leadership}">
                      <label for="${'attacker-leader-'+index}">${leader.shortname}</label>
                      <br>
                    `)}
                    ${this._targetUnit ? html`
                      <h6>${this._targetUnit.name}</h6>
                      ${repeat(this._targetUnit.army.leaders, (leader, index) => html`
                        <input type="radio" name="defender-leader" id="${'defender-leader-'+index}" value="${leader.leadership}">
                        <label for="${'defender-leader-'+index}">${leader.shortname}</label>
                        <br>
                      `)}
                    `: ``}
                  </radiogroup>
                </div>
              </div>
              <div id="resupply" class="${classMap({hidden: ! this._showResupply})}">
                <h5>Supply</h5>
                <input type="checkbox" id="resupply-checkbox"></input>
                <label for="resupply-checkbox">Resupply</label>
              </div>
              <div class="${classMap({hidden: ! this._showMount})}">
                <h5>Mounted Actions</h5>
                ${this._activeBattle.activeUnit.isCurrentlyMounted ? html`
                  <div><small>${this._activeBattle.activeUnit.name} is currently mounted</small></div>
                  <input type="checkbox" id="unmount"></input>
                  <label for="unmount">Unmount</label>
                ` : html`
                  <div><small>${this._activeBattle.activeUnit.name} is currently unmounted</small></div>
                  <input type="checkbox" id="mount"></input>
                  <label for="mount">Mount</label>
                `}
              </div>
              <div class="${classMap({hidden: ! this._showActionResult})}">
                ${repeat(this._actionMessages, message => html`<p>${message}</p>`)}
                <button @click="${this._progressToNextAction}">Next Action</button>
              </div>
            </div>
          </section>
        `: this._activeBattle.armyIsActing ? html`
            <section>
              <h2>${this._activeBattle.armyTakingAction.armyActionTitle}</h2>
              <div class="muted centered">Army: ${this._activeBattle.armyTakingAction.name}</div>
              <div class="muted centered">${this._activeBattle.currentTimeMessage}</div>
              ${repeat(this._activeBattle.armyTakingAction.messages, message => html`<p>${message}</p>`)}
              <div class="centered">
                <button @click="${this._takeArmyAction}">Next Action</button>
              </div>
            </section>
          ` : html`
            <section>
              <h2>${this._activeBattle.occuringEvent.title}</h2>
              <div class="muted centered">${this._activeBattle.currentTimeMessage}</div>
              ${repeat(this._activeBattle.occuringEvent.messages, message => html`<p>${message}</p>`)}
              ${this._activeBattle.occuringEvent.provideArmyOverview ? html`
                <p>${this._activeBattle.army0.name} has sustained ${this.army1Casualties} casualties.</p>
                <p>${this._activeBattle.army1.name} has sustained ${this.army2Casualties} casualties.</p>
              ` : ''}
            </section>
            <div class="centered">
              <button @click="${this._finishEvent}">Next Action</button>
            </div>
          `
        }
      `:html`
        <section>
          <p>No active battle. Go to the war tab and either select a battle or create a new battle.</p>
        </section>
      `}
    `;
  }

  constructor() {
    super()
    this._actionUpdates = [];
  }

  stateChanged(state) {
    this._actionMessages = [];
    if (state.battle.battles.length > state.battle.activeBattle) {
      this._activeBattle = new Battle(state.battle.battles[state.battle.activeBattle], state.battle.activeBattle);
    }
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
    this._showResupply = true;
    this._showMount = this._activeBattle.activeUnit.isMounted && this._activeBattle.activeUnit.canUnmount;
  }

  _move(e) {
    this._hideInputs();
    this._hasSelection = true;
    this._selectedAction = MOVE;
    this._showDistance = true;
    this._showHill = true;
    this._showPace = true;
    this._showLeader = true;
    this._showTerrain = true;
    this._showTakeAction = true;
  }

  _charge(e) {
    this._hideInputs();
    this._hasSelection = true;
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
    this._hasSelection = true;
    this._selectedAction = FIRE;
    this._showSeparation = true;
    this._showHill = true;
    this._showLeader = true;
    this._showTerrain = true;
    this._showTarget = true;
    this._showEngagedAttackers = true;
    this._showTakeAction = true;
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
      attackerChargeTerrain: this._selectedTerrain(TERRAIN_TYPE_MOVEMENT),
      defenderTerrain: this._defenderTerrain,
      meleeCombatTerrain: this._selectedTerrain(TERRAIN_TYPE_MELEE_COMBAT),
      slope: this.slope });
  }

  _createSituation() {
    return new Situation({
          unit: this._activeBattle.activeUnit,
          armyLeadership: this._activeArmyLeadership,
          movementTerrain: this._selectedTerrain(TERRAIN_TYPE_MOVEMENT),
          mount: this.mount,
          unmount: this.unmount,
          pace: this.pace,
          slope: this.slope });
  }

  _hideInputs() {
    this._showDistance = false;
    this._showRestTime = false;
    this._showSeparation = false;
    this._showEngagedAttackers = false;
    this._showEngagedDefenders = false;
    this._showHill = false;
    this._showPace = false;
    this._showLeader = false;
    this._showTerrain = false;
    this._showResupply = false;
    this._showMount = false;
    this._showTarget = false;
    this._showChargeMessage = false;
    this._showDoCombat = false;
    this._showTakeAction = false;
  }

  _resetInputs() {
    this.get('distance').value = '';
    this.get('rest-time').value = '';
    this.get('separation').value = '';
    this.get('engaged-attackers').value = '';
    this.get('engaged-defenders').value = '';
    if (this.get('pace-fast')) this.get('pace-fast').checked = false;
    if (this.get('pace-march')) this.get('pace-march').checked = true;
    if (this.get('pace-slow')) this.get('pace-slow').checked = false;
    this.get('hill').querySelectorAll('input').forEach(input => input.checked = false);
    this.get('leadership').querySelectorAll('input').forEach(input => input.checked = false);
    this.get('resupply').querySelector('input').checked = false;
    this.get('target').value = '';
    TERRAIN_TYPES.forEach(type => this.get(type).querySelectorAll('input').forEach(input => input.checked = false));
  }

  _selectedTerrain(typeId) {
    return [...this.get(typeId).querySelectorAll('input')]
    .filter(input => input.checked)
    .map(input => TERRAIN[this._activeBattle.terrain][input.dataset.terrainIndex]);
  }

  _updateTarget() {
    if (this.target && ! isNaN(this.target)) {
      this._targetUnit = this._activeBattle.unitModels[this.target];
    } else {
      this._targetUnit =  null;
    }
  }

  armyCasualties(army) {
    return this._activeBattle.units
    .filter(unit => unit.army === army)
    .reduce((casualties, unit) => casualties + (unit.fullStrength - unit.strength), 0);
  }

  get army1Casualties() {
    return this.armyCasualties(0);
  }

  get army2Casualties() {
    return this.armyCasualties(1);
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

  get slope() {
    const radioVal = getRadioVal(this.get('hill'), 'hill');
    return radioVal ? radioVal : SLOPE_NONE;
  }

  get pace() {
    if (this._selectedAction === REST) {
      return 0;
    } else {
      const radioVal = getRadioVal(this.get('pace'), 'pace');
      return radioVal ? parseFloat(radioVal) : 1;
    }
  }

  get _activeArmyLeadership() {
    return getRadioVal(this.get('leadership'), 'attacker-leader');
  }

  get _defenderArmyLeadership() {
    return getRadioVal(this.get('leadership'), 'defender-leader');
  }

  get _typesOfTerrain() {
    return [
      {
        id: TERRAIN_TYPE_MOVEMENT,
        name: "Movement",
        description: "This is the terrain that applys to the movement or charge.",
        terrain: TERRAIN[this._activeBattle.terrain].map((terrain, index) => ({ terrain, index })),
        show: this._showTerrain && (this._selectedAction === CHARGE || this._selectedAction === MOVE)
      },
      {
        id: TERRAIN_TYPE_DEFENDER,
        name: "Defender",
        description: "This is the terrain that the defender is defending.",
        terrain: TERRAIN[this._activeBattle.terrain].map((terrain, index) => ({ terrain, index })).filter(({terrain}) => terrain.defendable),
        show: this._showTerrain && this._selectedAction === CHARGE
      },
      {
        id: TERRAIN_TYPE_MELEE_COMBAT,
        name: "Combat",
        description: "This is the terrain that the combat that is taking place.",
        terrain: TERRAIN[this._activeBattle.terrain].map((terrain, index) => ({ terrain, index })).filter(({terrain}) => terrain.areaTerrain),
        show: this._showTerrain &&  this._selectedAction === CHARGE
      },
      {
        id: TERRAIN_TYPE_RANGED_DEFENDER,
        name: "Terrain",
        description: "This is the terrain that the defender recieves the benefit of.",
        terrain: TERRAIN[this._activeBattle.terrain].map((terrain, index) => ({ terrain, index })),
        show: this._showTerrain && this._selectedAction === FIRE
      },
    ];
  }

  get _defenderTerrain() {
    return this._selectedAction === CHARGE
      ? this._selectedTerrain(TERRAIN_TYPE_DEFENDER)
      : this._selectedTerrain(TERRAIN_TYPE_RANGED_DEFENDER);
  }

  get _environment() {
    return {
      resupply: this.resupply,
      mount: this.mount,
      unmount: this.unmount,
      defenderArmyLeadership: this._defenderArmyLeadership,
      activeArmyLeadership: this._activeArmyLeadership,
      pace: this.pace,
      slope: this.slope,
      engagedDefenders: this.engagedDefenders,
      engagedAttackers: this.engagedAttackers,
      separation: this.separation,
      restTime: this.restTime,
      distance: this.distance,
      selectedAction: this._selectedAction,
      target: this.target,
      defenderTerrain: this._defenderTerrain,
      attackerChargeTerrain: this._selectedTerrain(TERRAIN_TYPE_MOVEMENT),
      meleeCombatTerrain: this._selectedTerrain(TERRAIN_TYPE_MELEE_COMBAT),
    }
  }

  get resupply() {
    return this.get('resupply').querySelector('input').checked;
  }

  get mount() {
    return this.get('mount') && this.get('mount').checked;
  }

  get unmount() {
    return this.get('unmount') && this.get('unmount').checked;
  }

  get(id) {
    return this.shadowRoot.getElementById(id);
  }
}

window.customElements.define('fight-view', FightView);