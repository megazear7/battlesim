import { html, css } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { classMap } from 'lit-html/directives/class-map.js';
import { PageViewElement } from './page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';
import { takeAction, takeArmyAction } from '../actions/battle.js';
import { SharedStyles } from './shared-styles.js';
import { ButtonSharedStyles } from './button-shared-styles.js';
import Unit from '../unit.js';
import { prettyDateTime } from '../math-utils.js';
import { getRadioVal } from '../dom-utils.js';
import { SLOPE_UP, SLOPE_DOWN, SLOPE_NONE } from '../terrain.js';
import Encounter from '../encounter.js';
import Situation from '../situation.js';
import { MINUTES_PER_TURN, ACTION_TYPE_UNIT, ACTION_TYPE_ARMY } from '../game.js';

const REST = 'REST';
const MOVE = 'MOVE';
const CHARGE = 'CHARGE';
const FIRE = 'FIRE';
const ACTIONS = [ REST, MOVE, CHARGE, FIRE ];
const NO_ACTION = 'NO_ACTION';

export const TERRAIN_TYPE_MOVEMENT = 'movement-terrain';
export const TERRAIN_TYPE_DEFENDER = 'defender-terrain';
export const TERRAIN_TYPE_MELEE_COMBAT = 'melee-combat-terrain';
export const TERRAIN_TYPE_RANGED_DEFENDER = 'ranged-defender-terrain';
export const TERRAIN_TYPES = [ TERRAIN_TYPE_MOVEMENT, TERRAIN_TYPE_DEFENDER, TERRAIN_TYPE_MELEE_COMBAT, TERRAIN_TYPE_RANGED_DEFENDER ];

class FightView extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      _unit: { type: Object },
      _targetUnit: { type: Object },
      _hasActiveBattle: { type: Boolean },
      _actionMessages: { type: Array },
      _date: { type: Object },
      _chargeMessage: { type: String },
      _showDistance: { type: Boolean },
      _showRestTime: { type: Boolean },
      _showSeparation: { type: Boolean },
      _showTarget: { type: Boolean },
      _showHill: { type: Boolean },
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
          padding: 0;
        }
        .unit-actions button {
          width: 25%;
          box-sizing: border-box;
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
        button.selected {
          opacity: 1;
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
      `
    ];
  }

  render() {
    return html`
      ${this._hasActiveBattle ? html`
        ${this._unit ? html`
          <section>
            <h2>${this._unit.name}</h2>
            <div class="muted centered">Army: ${this._unit.army.name}</div>
            <div class="muted centered">${prettyDateTime(this._date)}</div>
            <p>${this._unit.detailedStatus}</p>
            <hr>
            <p>${this._unit.desc}</p>
          </section>
          <section class="unit-actions">
            <div class="${classMap({'has-selection': this._actionSelected})}">
              <button @click="${this._rest}" id="rest" ?disabled="${this._actionsDisabled}" class="${classMap({selected: this._selectedAction === REST})}">Rest</button>
              <button @click="${this._move}" id="move" ?disabled="${this._actionsDisabled}" class="${classMap({selected: this._selectedAction === MOVE})}">Move</button>
              <button @click="${this._charge}" id="charge" ?disabled="${this._actionsDisabled}" class="${classMap({selected: this._selectedAction === CHARGE})}">Charge</button>
              <button @click="${this._fire}" id="fire" ?disabled="${this._actionsDisabled}" class="${classMap({selected: this._selectedAction === FIRE})}">Fire</button>
            </div>
          </section>
          <section>
            <div class="options-container">
              <p class="${classMap({hidden: ! this._showChargeMessage})}">${this._chargeMessage}</p>
              <input id="rest-time" class="${classMap({hidden: ! this._showRestTime})}" type="number" placeholder="Minutes to rest" max="${MINUTES_PER_TURN}"></input>
              <input id="distance" class="${classMap({hidden: ! this._showDistance})}" type="number" placeholder="Distance (Leave blank to move as far as possible)"></input>
              <input id="separation" class="${classMap({hidden: ! this._showSeparation})}" type="number" placeholder="Distance (Required)"></input>
              <select id="target" class="${classMap({hidden: ! this._showTarget})}" @change="${this._updateTarget}">
                <option value="">Select Target (Required)</option>
                ${repeat(this._unit.targets, target => html`
                  <option value="${target.id}">${target.unit.name}</option>
                `)}
              </select>
              <div class="${classMap({hidden: ! this._showEngagedAttackers && ! this._showEngagedDefenders})}">
                <input id="engaged-attackers" class="${classMap({hidden: ! this._showEngagedAttackers, full: this._showEngagedAttackers && ! this._showEngagedDefenders, stands: true})}" type="number" placeholder="Attacking Stands"></input>
                <input id="engaged-defenders" class="${classMap({hidden: ! this._showEngagedDefenders, stands: true})}" type="number" placeholder="Defending Stands"></input>
              </div>
              <button class="${classMap({hidden: ! this._showDoCombat})}" @click="${this._doCombat}">Do Combat</button>
              <button class="${classMap({hidden: ! this._showTakeAction})}" @click="${this._takeAction}">Take Action</button>
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
                  <radiogroup id="pace" class="${classMap({hidden: ! this._showHill})}">
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
                    <h6>${this._unit.name}</h6>
                    ${repeat(this._unit.army.leaders, (leader, index) => html`
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
                ${this._unit.isCurrentlyMounted ? html`
                  <div><small>${this._unit.name} is currently mounted</small></div>
                  <input type="checkbox" id="unmount"></input>
                  <label for="unmount">Unmount</label>
                ` : html`
                  <div><small>${this._unit.name} is currently unmounted</small></div>
                  <input type="checkbox" id="mount"></input>
                  <label for="mount">Mount</label>
                `}
              </div>
              <p class="${classMap({hidden: ! this._showError, error: true})}">You must provide valid values for each required field.</p>
              <div class="${classMap({hidden: ! this._showActionResult})}">
                ${repeat(this._actionMessages, message => html`<p>${message}</p>`)}
                <button @click="${this._progressToNextAction}">Next Action</button>
              </div>
            </div>
          </section>
        `:html`
          <section>
            <h2>${this._armyTakingAction.armyActionTitle}</h2>
            <div class="muted centered">Army: ${this._armyTakingAction.name}</div>
            <div class="muted centered">${prettyDateTime(this._date)}</div>
            <p>${this._armyTakingAction.armyActionDesc}</p>
            <div class="centered">
              <button @click="${this._takeArmyAction}">Next Action</button>
            </div>
          </section>
        `}
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
      this._activeBattle = state.battle.battles[state.battle.activeBattle];
      if (this._activeBattle.activeAction.type === ACTION_TYPE_UNIT) {
        this._unit = new Unit(this._activeBattle.units[this._activeBattle.activeAction.index], this._activeBattle.activeAction.index, this._activeBattle);
        this._armyTakingAction = null;
      } else if (this._activeBattle.activeAction.type === ACTION_TYPE_ARMY) {
        this._unit = null;
        this._armyTakingAction = this._activeBattle.armies[this._activeBattle.activeAction.index];
      }
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
      this._showEngagedAttackers = encounter.attackerReachedDefender;
      this._showEngagedDefenders = encounter.attackerReachedDefender;
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
        actionResult = this._selectedAction === REST ? situation.rest(this.restTime) : situation.move(this.distance);
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
    this._resetAction();
  }

  _takeArmyAction() {
    store.dispatch(takeArmyAction());
    this._resetAction();
  }

  _resetAction() {
    this._actionUpdates = [];
    this._showActionResult = false;
    this._actionsDisabled = false;
    window.scroll(0, 0);
  }

  _rest(e) {
    this._hideInputs();
    this._selectedAction = REST;
    this._showTakeAction = true;
    this._showRestTime = true;
    this._showResupply = true;
    this._showMount = this._unit.isMounted && this._unit.canUnmount;
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
    this._showEngagedAttackers = true;
    this._showTakeAction = true;
  }

  _createEncounter() {
    let defenderTerrain = this._selectedAction === CHARGE
      ? this._selectedTerrain(TERRAIN_TYPE_DEFENDER)
      : this._selectedTerrain(TERRAIN_TYPE_RANGED_DEFENDER);

    return new Encounter({
      attacker: this._unit,
      attackerTerrainDefense: 0,
      attackerArmyLeadership: this._activeArmyLeadership,
      attackerEngagedStands: this.engagedAttackers,
      defender: new Unit(this._activeBattle.units[this.target], this.target, this._activeBattle),
      defenderTerrainDefense: 0,
      defenderArmyLeadership: this._defenderArmyLeadership, // TODO Add option for defender leaders
      defenderEngagedStands: this.engagedDefenders,
      melee: this._selectedAction === CHARGE,
      separation: this.separation,
      attackerChargeTerrain: this._selectedTerrain(TERRAIN_TYPE_MOVEMENT),
      defenderTerrain: defenderTerrain,
      meleeCombatTerrain: this._selectedTerrain(TERRAIN_TYPE_MELEE_COMBAT),
      slope: this.slope });
  }

  _createSituation() {
    return new Situation({
          unit: this._unit,
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

  _blinkError() {
    this._showError = true;
    setTimeout(() => {
      this._showError = false;
    }, 3000);
  }

  _selectedTerrain(typeId) {
    return [...this.get(typeId).querySelectorAll('input')]
    .filter(input => input.checked)
    .map(input => this._activeBattle.terrain[input.dataset.terrainIndex]);
  }

  _updateTarget() {
    if (this.target && ! isNaN(this.target)) {
      this._targetUnit = new Unit(this._activeBattle.units[this.target], this.target);
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

  get _actionSelected() {
    return ACTIONS.indexOf(this._selectedAction) >= 0;
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
        terrain: this._activeBattle.terrain.map((terrain, index) => ({ terrain, index })),
        show: this._showTerrain && (this._selectedAction === CHARGE || this._selectedAction === MOVE)
      },
      {
        id: TERRAIN_TYPE_DEFENDER,
        name: "Defender",
        description: "This is the terrain that the defender is defending.",
        terrain: this._activeBattle.terrain.map((terrain, index) => ({ terrain, index })).filter(({terrain}) => terrain.defendable),
        show: this._showTerrain && this._selectedAction === CHARGE
      },
      {
        id: TERRAIN_TYPE_MELEE_COMBAT,
        name: "Combat",
        description: "This is the terrain that the combat that is taking place.",
        terrain: this._activeBattle.terrain.map((terrain, index) => ({ terrain, index })).filter(({terrain}) => terrain.areaTerrain),
        show: this._showTerrain &&  this._selectedAction === CHARGE
      },
      {
        id: TERRAIN_TYPE_RANGED_DEFENDER,
        name: "Terrain",
        description: "This is the terrain that the defender recieves the benefit of.",
        terrain: this._activeBattle.terrain.map((terrain, index) => ({ terrain, index })),
        show: this._showTerrain && this._selectedAction === FIRE
      },
    ];
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
