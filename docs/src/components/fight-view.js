import { weightedRandomTowards, weightedAverage, SECONDS_IN_AN_MINUTE, prettyDateTime, MAX_STAT, YARDS_PER_INCH, SECONDS_PER_TURN, MINUTES_PER_TURN, ActingUnit, MORALE_SUCCESS, SLOPE_NONE as SLOPE_NONE$1, SLOPE_UP, SLOPE_DOWN, html, css, repeat, classMap, PageViewElement, connect, store, takeAction, SharedStyles, ButtonSharedStyles, $unitDefault as Unit, $encounterDefault as Encounter } from './battle-sim.js';

function getRadioVal(container, name) {
  var val; // get list of radio buttons with specified name

  var radios = container.querySelectorAll(`[name="${name}"]`); // loop through list of radio buttons

  for (var i = 0, len = radios.length; i < len; i++) {
    if (radios[i].checked) {
      // radio checked?
      val = radios[i].value; // if so, hold its value in val

      break; // and break out of for loop
    }
  }

  return val; // return value of checked radio or undefined if none checked
}

var domUtils = {
  getRadioVal: getRadioVal
};

class SoloUnit extends ActingUnit {
  constructor({
    unit,
    situation,
    armyLeadership = 0,
    status = MORALE_SUCCESS,
    mount = false,
    unmount = false,
    pace = 1,
    slope = SLOPE_NONE
  }) {
    super({
      unit,
      pace,
      environment: situation,
      armyLeadership
    });
    this.unit = unit;
    this.situation = situation;
    this.armyLeadership = armyLeadership;
    this.status = status;
    this.mount = mount;
    this.unmount = unmount;
    this.slope = slope;
    this.pace = pace;
    this.energyModRoll = weightedRandomTowards(0, 100, 30, 2);
    this.moraleModRoll = weightedRandomTowards(0, 100, 1, 2);
  }

  get energyGain() {
    return Math.min(MAX_STAT - this.unit.energy, this.maxEnergyRecovered);
  }

  get moraleGain() {
    return Math.min(MAX_STAT - this.unit.morale, this.maxMoraleRecovered);
  }

  get paceAdjustment() {
    return (1 - this.pace) * 100;
  }

  get maxMoraleRecovered() {
    return weightedAverage(this.paceAdjustment, this.moraleModRoll, 0);
  }

  get maxEnergyRecovered() {
    return weightedAverage(this.paceAdjustment, this.energyModRoll, this.situation.percentageOfATurnSpentResting);
  }

  updates(delay) {
    return {
      id: this.unit.id,
      changes: this.changes(delay)
    };
  }

  changes(delay) {
    let changes = [{
      prop: "energy",
      value: this.unit.energy + this.energyGain
    }, {
      prop: "morale",
      value: this.unit.morale + this.moraleGain
    }, {
      prop: 'nextAction',
      value: this.unit.nextAction + delay
    }];

    if (this.mount) {
      changes.push({
        prop: "isCurrentlyMounted",
        value: true
      });
    } else if (this.unmount) {
      changes.push({
        prop: "isCurrentlyMounted",
        value: false
      });
    }

    return changes;
  }

  get desc() {
    return `${this.situation.yardsTravelled > 0 ? this.moveDesc : ''} ${this.situation.yardsTravelled > 0 ? this.battlefieldMoveDesc : ''} ${this.energyGain > 0 && this.situation.minutesSpentResting > 0 ? this.energyRecoveredDesc : ''} ${this.moraleGain > 0 && this.situation.minutesSpentResting > 0 ? this.moraleRecoveredDesc : ''}`;
  }

  get battlefieldMoveDesc() {
    return `in ${Math.floor(this.situation.secondsSpentMoving / SECONDS_IN_AN_MINUTE)} minutes.`;
  }

  get moveDesc() {
    if (this.situation.distance === -1) {
      return `You move ${Math.floor(this.situation.yardsTravelled / YARDS_PER_INCH)} inches `;
    } else if (this.situation.yardsTravelled < this.situation.distanceInYards) {
      return `You could only move ${Math.floor(this.situation.yardsTravelled / YARDS_PER_INCH)} inches `;
    } else {
      return `You move the full ${Math.floor(this.situation.yardsTravelled / YARDS_PER_INCH)} inches `;
    }
  }

  get energyRecoveredDesc() {
    if (this.energyGain > 80) {
      return `In ${this.situation.minutesSpentResting} minutes they got back all of there energy.`;
    } else if (this.energyGain > 60) {
      return `In ${this.situation.minutesSpentResting} minutes they recovered almost all of their strength.`;
    } else if (this.energyGain > 40) {
      return `In ${this.situation.minutesSpentResting} minutes they made a great recovery. The rest was very helpful.`;
    } else if (this.energyGain > 20) {
      return `In ${this.situation.minutesSpentResting} minutes they recovered a lot of their strength`;
    } else if (this.energyGain > 15) {
      return `In ${this.situation.minutesSpentResting} minutes they recovered much of their strength`;
    } else if (this.energyGain > 9) {
      return `In ${this.situation.minutesSpentResting} minutes they recovered some of their strength`;
    } else if (this.energyGain > 6) {
      return `In ${this.situation.minutesSpentResting} minutes they recovered a bit of their strength.`;
    } else if (this.energyGain > 3) {
      return `In ${this.situation.minutesSpentResting} minutes they recovered a bit of their strength.`;
    } else {
      return `The rest was hardly worth it.`;
    }
  }

  get moraleRecoveredDesc() {
    if (this.moraleGain > 20) {
      return `They have been greatly encouraged.`;
    } else if (this.moraleGain > 10) {
      return `They have been encouraged.`;
    } else {
      return `They seem to be more willing to fight than before.`;
    }
  }

}

var soloUnit = {
  default: SoloUnit
};

class Situation {
  constructor({
    unit,
    armyLeadership = 0,
    movementTerrain = 0,
    mount = false,
    unmount = false,
    pace = 1,
    slope = SLOPE_NONE$1
  }) {
    this.movementTerrain = movementTerrain;
    this.slope = slope;
    this.soloUnit = new SoloUnit({
      unit: unit,
      situation: this,
      mount,
      unmount,
      pace,
      slope: this.slope
    });
  }

  rest(minutesSpent = MINUTES_PER_TURN) {
    this.distance = 0;
    this.secondsSpentMoving = 0;
    this.secondsSpentResting = minutesSpent * SECONDS_IN_AN_MINUTE;
    return this.actionResult;
  }

  move(distance) {
    this.distance = distance;
    this.secondsSpentMoving = this.yardsTravelled / this.soloUnit.speed;
    this.secondsSpentResting = 0;
    return this.actionResult;
  }

  get actionResult() {
    return {
      messages: [this.soloUnit.desc],
      updates: [this.soloUnit.updates(SECONDS_PER_TURN)]
    };
  }

  get maxYardsTravelled() {
    return this.secondsAvailableToMove * this.soloUnit.speed;
  }

  get secondsAvailableToMove() {
    return SECONDS_PER_TURN - this.soloUnit.unit.secondsToIssueOrder;
  }

  get yardsTravelled() {
    if (this.distance === -1) {
      return this.maxYardsTravelled;
    } else {
      return Math.min(this.distanceInYards, this.maxYardsTravelled);
    }
  }

  get distanceInYards() {
    return this.distance * YARDS_PER_INCH;
  }

  get totalSecondsSpent() {
    return this.secondsSpentMoving + this.secondsToIssueOrder;
  }

  get percentageOfATurnSpentMoving() {
    return this.secondsSpentMoving / SECONDS_PER_TURN * 100;
  }

  get percentageOfATurnSpentResting() {
    return this.secondsSpentResting / SECONDS_PER_TURN * 100;
  }

  get minutesSpentResting() {
    return this.secondsSpentResting / SECONDS_IN_AN_MINUTE;
  }

}

var situation = {
  default: Situation
};
const REST = 'REST';
const MOVE = 'MOVE';
const CHARGE = 'CHARGE';
const FIRE = 'FIRE';
const ACTIONS = [REST, MOVE, CHARGE, FIRE];
const NO_ACTION = 'NO_ACTION';
const TERRAIN_TYPE_MOVEMENT = 'movement-terrain';
const TERRAIN_TYPE_DEFENDER = 'defender-terrain';
const TERRAIN_TYPE_MELEE_COMBAT = 'melee-combat-terrain';
const TERRAIN_TYPE_RANGED_DEFENDER = 'ranged-defender-terrain';
const TERRAIN_TYPES = [TERRAIN_TYPE_MOVEMENT, TERRAIN_TYPE_DEFENDER, TERRAIN_TYPE_MELEE_COMBAT, TERRAIN_TYPE_RANGED_DEFENDER];

class FightView extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      _unit: {
        type: Object
      },
      _targetUnit: {
        type: Object
      },
      _hasActiveBattle: {
        type: Boolean
      },
      _actionMessages: {
        type: Array
      },
      _date: {
        type: Object
      },
      _chargeMessage: {
        type: String
      },
      _showDistance: {
        type: Boolean
      },
      _showRestTime: {
        type: Boolean
      },
      _showSeparation: {
        type: Boolean
      },
      _showTarget: {
        type: Boolean
      },
      _showHill: {
        type: Boolean
      },
      _showLeader: {
        type: Boolean
      },
      _showTerrain: {
        type: Boolean
      },
      _showResupply: {
        type: Boolean
      },
      _showMount: {
        type: Boolean
      },
      _showChargeMessage: {
        type: Boolean
      },
      _showEngagedAttackers: {
        type: Boolean
      },
      _showDoCombat: {
        type: Boolean
      },
      _showTakeAction: {
        type: Boolean
      },
      _showError: {
        type: Boolean
      },
      _showActionResult: {
        type: Boolean
      },
      _actionsDisabled: {
        type: Boolean
      }
    };
  }

  static get styles() {
    return [SharedStyles, ButtonSharedStyles, css`
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
          opacity: 0.5;
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
      `];
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
          <div class="${classMap({
      'has-selection': this._actionSelected
    })}">
            <button @click="${this._rest}" id="rest" ?disabled="${this._actionsDisabled}" class="${classMap({
      selected: this._selectedAction === REST
    })}">Rest</button>
            <button @click="${this._move}" id="move" ?disabled="${this._actionsDisabled}" class="${classMap({
      selected: this._selectedAction === MOVE
    })}">Move</button>
            <button @click="${this._charge}" id="charge" ?disabled="${this._actionsDisabled}" class="${classMap({
      selected: this._selectedAction === CHARGE
    })}">Charge</button>
            <button @click="${this._fire}" id="fire" ?disabled="${this._actionsDisabled}" class="${classMap({
      selected: this._selectedAction === FIRE
    })}">Fire</button>
          </div>
        </section>
        <section>
          <div class="options-container">
            <p class="${classMap({
      hidden: !this._showChargeMessage
    })}">${this._chargeMessage}</p>
            <input id="rest-time" class="${classMap({
      hidden: !this._showRestTime
    })}" type="number" placeholder="Minutes to rest" max="${MINUTES_PER_TURN}"></input>
            <input id="distance" class="${classMap({
      hidden: !this._showDistance
    })}" type="number" placeholder="Distance (Leave blank to move as far as possible)"></input>
            <input id="separation" class="${classMap({
      hidden: !this._showSeparation
    })}" type="number" placeholder="Distance (Required)"></input>
            <select id="target" class="${classMap({
      hidden: !this._showTarget
    })}" @change="${this._updateTarget}">
              <option value="">Select Target (Required)</option>
              ${repeat(this._unit.targets, target => html`
                <option value="${target.id}">${target.unit.name}</option>
              `)}
            </select>
            <div class="${classMap({
      hidden: !this._showEngagedAttackers && !this._showEngagedDefenders
    })}">
              <input id="engaged-attackers" class="${classMap({
      hidden: !this._showEngagedAttackers,
      full: this._showEngagedAttackers && !this._showEngagedDefenders,
      stands: true
    })}" type="number" placeholder="Attacking Stands"></input>
              <input id="engaged-defenders" class="${classMap({
      hidden: !this._showEngagedDefenders,
      stands: true
    })}" type="number" placeholder="Defending Stands"></input>
            </div>
            <button class="${classMap({
      hidden: !this._showDoCombat
    })}" @click="${this._doCombat}">Do Combat</button>
            <button class="${classMap({
      hidden: !this._showTakeAction
    })}" @click="${this._takeAction}">Take Action</button>
            <br>
            <div class="${classMap({
      "options-block": true,
      hidden: !this._showTerrain
    })}">
              ${repeat(this._typesOfTerrain, terrainType => html`
                <div id="${terrainType.id}" class="${classMap({
      hidden: !terrainType.show
    })}">
                  <h5 class="tooltip">
                    ${terrainType.name}
                    <span class="tooltiptext">${terrainType.description}</span>
                  </h5>
                  ${repeat(terrainType.terrain, ({
      terrain,
      index
    }) => html`
                    <div>
                      <input type="checkbox" id="${terrainType.id + index}" data-terrain-index="${index}"></input>
                      <label for="${terrainType.id + index}">
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
              <div class="${classMap({
      hidden: this.showPace
    })}">
                <radiogroup id="pace" class="${classMap({
      hidden: !this._showHill
    })}">
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
            <div class="${classMap({
      "options-block": true,
      hidden: !this._showHill && !this._showLeader
    })}">
              <radiogroup id="hill" class="${classMap({
      hidden: !this._showHill
    })}">
                <h5>Hills</h5>
                <input type="radio" name="hill" id="${SLOPE_UP}" value="${SLOPE_UP}">
                <label for="${SLOPE_UP}">Uphill</label>
                <br>
                <input type="radio" name="hill" id="${SLOPE_DOWN}" value="${SLOPE_DOWN}">
                <label for="${SLOPE_DOWN}">Downhill</label>
                <br>
                <input type="radio" name="hill" id="${SLOPE_NONE$1}" value="${SLOPE_NONE$1}">
                <label for="${SLOPE_NONE$1}">Neither</label>
                <br><br>
              </radiogroup>
              <h5>Leadership</h5>
              <div id="leadership">
                <radiogroup id="attacker-leader" class="${classMap({
      hidden: !this._showLeader
    })}">
                  <h6>${this._unit.name}</h6>
                  ${repeat(this._unit.army.leaders, (leader, index) => html`
                    <input type="radio" name="attacker-leader" id="${'attacker-leader-' + index}" value="${leader.leadership}">
                    <label for="${'attacker-leader-' + index}">${leader.shortname}</label>
                    <br>
                  `)}
                  ${this._targetUnit ? html`
                    <h6>${this._targetUnit.name}</h6>
                    ${repeat(this._targetUnit.army.leaders, (leader, index) => html`
                      <input type="radio" name="defender-leader" id="${'defender-leader-' + index}" value="${leader.leadership}">
                      <label for="${'defender-leader-' + index}">${leader.shortname}</label>
                      <br>
                    `)}
                  ` : ``}
                </radiogroup>
              </div>
            </div>
            <div id="resupply" class="${classMap({
      hidden: !this._showResupply
    })}">
              <h5>Supply</h5>
              <input type="checkbox" id="resupply-checkbox"></input>
              <label for="resupply-checkbox">Resupply</label>
            </div>
            <div class="${classMap({
      hidden: !this._showMount
    })}">
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
            <p class="${classMap({
      hidden: !this._showError,
      error: true
    })}">You must provide valid values for each required field.</p>
            <div class="${classMap({
      hidden: !this._showActionResult
    })}">
              ${repeat(this._actionMessages, message => html`<p>${message}</p>`)}
              <button @click="${this._progressToNextAction}">Next Action</button>
            </div>
          </div>
        </section>
      ` : html`
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
      this._date = new Date(this._activeBattle.startTime + this._activeBattle.second * 1000);
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
        let encounter = this._createEncounter();

        actionResult = encounter.fight();
        skipResults = this._selectedAction === CHARGE && !encounter.attackerReachedDefender;
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
    let defenderTerrain = this._selectedAction === CHARGE ? this._selectedTerrain(TERRAIN_TYPE_DEFENDER) : this._selectedTerrain(TERRAIN_TYPE_RANGED_DEFENDER);
    return new Encounter({
      attacker: this._unit,
      attackerTerrainDefense: 0,
      attackerArmyLeadership: this._activeArmyLeadership,
      attackerEngagedStands: this.engagedAttackers,
      defender: new Unit(this._activeBattle.units[this.target], this.target),
      defenderTerrainDefense: 0,
      defenderArmyLeadership: this._defenderArmyLeadership,
      // TODO Add option for defender leaders
      defenderEngagedStands: this.engagedDefenders,
      melee: this._selectedAction === CHARGE,
      separation: this.separation,
      attackerChargeTerrain: this._selectedTerrain(TERRAIN_TYPE_MOVEMENT),
      defenderTerrain: defenderTerrain,
      meleeCombatTerrain: this._selectedTerrain(TERRAIN_TYPE_MELEE_COMBAT),
      slope: this.slope
    });
  }

  _createSituation() {
    return new Situation({
      unit: this._unit,
      armyLeadership: this._activeArmyLeadership,
      movementTerrain: this._selectedTerrain(TERRAIN_TYPE_MOVEMENT),
      mount: this.mount,
      unmount: this.unmount,
      pace: this.pace,
      slope: this.slope
    });
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
    return [...this.get(typeId).querySelectorAll('input')].filter(input => input.checked).map(input => this._activeBattle.terrain[input.dataset.terrainIndex]);
  }

  _updateTarget() {
    if (this.target && !isNaN(this.target)) {
      this._targetUnit = new Unit(this._activeBattle.units[this.target], this.target);
    } else {
      this._targetUnit = null;
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
      return !isNaN(this.target);
    } else if (this._selectedAction === FIRE) {
      return !isNaN(this.target);
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
    return radioVal ? radioVal : SLOPE_NONE$1;
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
    return [{
      id: TERRAIN_TYPE_MOVEMENT,
      name: "Movement",
      description: "This is the terrain that applys to the movement or charge.",
      terrain: this._activeBattle.terrain.map((terrain, index) => ({
        terrain,
        index
      })),
      show: this._showTerrain && (this._selectedAction === CHARGE || this._selectedAction === MOVE)
    }, {
      id: TERRAIN_TYPE_DEFENDER,
      name: "Defender",
      description: "This is the terrain that the defender is defending.",
      terrain: this._activeBattle.terrain.map((terrain, index) => ({
        terrain,
        index
      })).filter(({
        terrain
      }) => terrain.defendable),
      show: this._showTerrain && this._selectedAction === CHARGE
    }, {
      id: TERRAIN_TYPE_MELEE_COMBAT,
      name: "Combat",
      description: "This is the terrain that the combat that is taking place.",
      terrain: this._activeBattle.terrain.map((terrain, index) => ({
        terrain,
        index
      })).filter(({
        terrain
      }) => terrain.areaTerrain),
      show: this._showTerrain && this._selectedAction === CHARGE
    }, {
      id: TERRAIN_TYPE_RANGED_DEFENDER,
      name: "Terrain",
      description: "This is the terrain that the defender recieves the benefit of.",
      terrain: this._activeBattle.terrain.map((terrain, index) => ({
        terrain,
        index
      })),
      show: this._showTerrain && this._selectedAction === FIRE
    }];
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
var fightView = {
  TERRAIN_TYPE_MOVEMENT: TERRAIN_TYPE_MOVEMENT,
  TERRAIN_TYPE_DEFENDER: TERRAIN_TYPE_DEFENDER,
  TERRAIN_TYPE_MELEE_COMBAT: TERRAIN_TYPE_MELEE_COMBAT,
  TERRAIN_TYPE_RANGED_DEFENDER: TERRAIN_TYPE_RANGED_DEFENDER,
  TERRAIN_TYPES: TERRAIN_TYPES
};
export { fightView as $fightView, domUtils as $domUtils, situation as $situation, soloUnit as $soloUnit, TERRAIN_TYPE_MOVEMENT, TERRAIN_TYPE_DEFENDER, TERRAIN_TYPE_MELEE_COMBAT, TERRAIN_TYPE_RANGED_DEFENDER, TERRAIN_TYPES, getRadioVal, Situation as $situationDefault, SoloUnit as $soloUnitDefault };