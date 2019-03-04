import { html, css } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { classMap } from 'lit-html/directives/class-map.js';
import { PageViewElement } from './page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';
import { takeAction, takeArmyAction, finishEvent } from '../actions/battle.js';
import { SharedStyles } from '../styles/shared-styles.js';
import { ButtonSharedStyles } from '../styles/button-shared-styles.js';
import { SLOPE_UP, SLOPE_DOWN, SLOPE_NONE } from '../models/terrain.js';
import TERRAIN from '../game/terrain.js';
import Encounter from '../models/encounter.js';
import Situation from '../models/situation.js';
import Battle from '../models/battle.js';
import Unit from '../models/unit.js';
import { MINUTES_PER_TURN, SHARED_BATTLE, LOCAL_BATTLE } from '../game.js';

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
      _battleIsShared: { type: Boolean },
      _activeBattle: { type: Object },
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
        battle-sim-selector {
          margin-bottom: 1rem;
        }
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

  render() {
    return html`
      ${this._activeBattle ? html`
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
              <div class="${classMap({hidden: ! this._showEngagedAttackers && ! this._showEngagedDefenders})}">
                <input id="engaged-attackers" class="${classMap({hidden: ! this._showEngagedAttackers, full: this._showEngagedAttackers && ! this._showEngagedDefenders, stands: true})}" type="number" placeholder="Attacking Stands"></input>
                <input id="engaged-defenders" class="${classMap({hidden: ! this._showEngagedDefenders, stands: true})}" type="number" placeholder="Defending Stands"></input>
              </div>
              <br>
              <div class="row">
                <div class="${classMap({hidden: ! this._showTerrain})}">
                  ${repeat(this._typesOfTerrain, terrainType => html`
                    <battle-sim-selector integer id="${terrainType.id}" class="${classMap({hidden: ! terrainType.show})}" title="${terrainType.name}">
                      ${repeat(terrainType.terrain, ({terrain, index}) => html`
                        <battle-sim-option value="${index}" details="${terrain.descripton}">${terrain.name}</battle-sim-option>
                      `)}
                    </battle-sim-selector>
                  `)}
                  <battle-sim-selector radio number id="pace" class="${classMap({hidden: ! this._showPace})}" title="Pace">
                      <battle-sim-option value="1">Fast</battle-sim-option>
                      <battle-sim-option value="0.75">March</battle-sim-option>
                      <battle-sim-option value="0.5">Rest</battle-sim-option>
                  </battle-sim-selector>
                </div>
                <div class="${classMap({hidden: ! this._showHill && ! this._showLeader})}">
                  <battle-sim-selector radio id="hill" none="${SLOPE_NONE}" class="${classMap({hidden: ! this._showHill})}" title="Hill">
                    <battle-sim-option value="${SLOPE_UP}">Uphill</battle-sim-option>
                    <battle-sim-option value="${SLOPE_DOWN}">Downhill</battle-sim-option>
                    <battle-sim-option value="${SLOPE_NONE}">Neither</battle-sim-option>
                  </battle-sim-selector>
                  <battle-sim-selector radio number id="attacker-leadership" class="${classMap({hidden: ! this._showLeader})}" title="Attacker Leaders">
                    ${repeat(this._activeBattle.activeUnit.army.leaders, (leader, index) => html`
                      <battle-sim-option value="${leader.leadership}">${leader.shortname}</battle-sim-option>
                    `)}
                  </battle-sim-selector>
                  ${this._targetUnit ? html`
                    <battle-sim-selector radio number id="defender-leadership" class="${classMap({hidden: ! this._showLeader})}" title="Attacker Leaders">
                      ${repeat(this._targetUnit.army.leaders, (leader, index) => html`
                        <battle-sim-option value="${leader.leadership}">${leader.shortname}</battle-sim-option>
                      `)}
                    </battle-sim-selector>
                  ` : ''}
                </div>
              </div>
              <battle-sim-selector id="resupply" radio class="${classMap({hidden: ! this._showResupply})}">
                <battle-sim-option>Resupply</battle-sim-option>
              </battle-sim-selector>
              <battle-sim-selector radio id="unmount" class="${classMap({hidden: ! this._showMount || this._activeBattle.activeUnit.isCurrentlyMounted})}">
                <battle-sim-option>Unmount</battle-sim-option>
              </battle-sim-selector>
              <battle-sim-selector radio id="mount" class="${classMap({hidden: ! this._showMount || ! this._activeBattle.activeUnit.isCurrentlyMounted})}">
                <battle-sim-option>Mount</battle-sim-option>
              </battle-sim-selector>
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
              <h2>${this._activeBattle.armyTakingAction.armyActionTitle}</h2>
              <div class="muted centered">Army: ${this._activeBattle.armyTakingAction.name}</div>
              <div class="muted centered">${this._activeBattle.currentTimeMessage}</div>
              ${repeat(this._activeBattle.armyTakingAction.messages, message => html`<p>${message}</p>`)}
              <div>
                <button-tray>
                  <button @click="${this._takeArmyAction}">Next Action</button>
                </button-tray>
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
            <div>
              <button-tray>
                <button @click="${this._finishEvent}">Next Action</button>
              </button-tray>
            </div>
          `
        }
      `:html`
        ${this._battleIsShared ? html`
          <section>
            <p>Loading battle...</p>
          </section>
        `: html`
          <section>
            <p>No active battle. Go to the war tab and either select a battle or create a new battle.</p>
          </section>
        `}
      `}
    `;
  }

  constructor() {
    super()
    this._actionUpdates = [];
  }

  stateChanged(state) {
    this._actionMessages = [];
    if (state.battle.activeBattle.type === LOCAL_BATTLE) {
      this._battleIsShared = false;
      if (state.battle.battles.length > state.battle.activeBattle.id) {
        this._activeBattle = new Battle(state.battle.battles[state.battle.activeBattle.id], state.battle.activeBattle.id);
      }
    } else if (state.battle.activeBattle.type === SHARED_BATTLE) {
      this._battleIsShared = true;
      this._activeBattle = Object.keys(state.battle.sharedBattles).indexOf(state.battle.activeBattle.id) >= 0
        ? new Battle(state.battle.sharedBattles[state.battle.activeBattle.id], state.battle.activeBattle.id)
        : undefined;
      this._unitTemplates = this._activeBattle ? this._activeBattle.unitTemplatesFor(0) : [ ];
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
    [...this.shadowRoot.querySelectorAll('battle-sim-option')].forEach(option => option.selected = false);
  }

  _selectedTerrain(typeId) {
    return this.get(typeId).value.map(index => TERRAIN[this._activeBattle.terrain][index]);
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
    return this.get('hill').value;
  }

  get pace() {
    if (this._selectedAction === REST) {
      return 0;
    } else {
      const pace = this.get('pace').value;
      return parseFloat(pace) ? pace && parseFloat(pace) : 1;
    }
  }

  get _activeArmyLeadership() {
    return this.get('attacker-leadership') && this.get('attacker-leadership').value;
  }

  get _defenderArmyLeadership() {
    return this.get('defender-leadership') && this.get('defender-leadership').value;
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
    return this.get('resupply').value
  }

  get mount() {
    return this.get('mount').value
  }

  get unmount() {
    return this.get('unmount').value
  }

  get(id) {
    return this.shadowRoot.getElementById(id);
  }
}

window.customElements.define('fight-view', FightView);
