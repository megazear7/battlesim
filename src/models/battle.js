import {
  STAT_DESCRIPTION,
  STRENGTH_MESSAGE_DESCRIPTIVE,
  CASUALTY_MESSAGE_DESCRIPTIVE,
  NO_PLAYER_TURNS,
  ACTION_TYPE_UNIT,
  ACTION_TYPE_ARMY,
  ACTION_TYPE_EVENT,
  ARMY_BOTH } from '../game.js';
import UNITS from '../game/units.js';
import SCENARIOS from '../game/scenarios.js';
import RULESETS from '../game/rules.js';
import Unit from './unit.js';
import BattleDeviceStorage from './battle-device-storage.js';
import { prettyDateTime, prettyTime, SECONDS_IN_AN_HOUR, MILLISECONDS_PER_SECOND } from '../utils/math-utils.js';

export default class Battle {
  constructor({
    name,
    uuid,
    ruleset,
    second = 0,
    startTime,
    connectedDevices = [],
    messages = [ ],
    events = [ ],
    useAmmo = false,
    terrain,
    unitTemplates,
    rules,
    createdAt,
    deadliness = 1,
    turnDuration = SECONDS_IN_AN_HOUR,
    playerTurnDuration = NO_PLAYER_TURNS,
    strengthReporting = STRENGTH_MESSAGE_DESCRIPTIVE,
    casualtyReporting = CASUALTY_MESSAGE_DESCRIPTIVE,
    statReporting = STAT_DESCRIPTION,
    usesPoints = false,
    activeArmy = 0,
    actionLog = [ ],
    turnStarted = 0,
    armies = [ ],
    units = [ ],
    activeAction = { },
  }, id, active = false) {
    this.name = name;
    this.uuid = uuid;
    this.ruleset = ruleset;
    this.second = second;
    this.startTime = startTime;
    this.connectedDevices = connectedDevices;
    this.messages = messages;
    this.events = events;
    this.useAmmo = useAmmo;
    this.terrain = terrain;
    this.unitTemplates = unitTemplates;
    this.rules = rules;
    this.deadliness = deadliness;
    this.turnDuration = turnDuration;
    this.playerTurnDuration = playerTurnDuration;
    this.strengthReporting = strengthReporting;
    this.casualtyReporting = casualtyReporting;
    this.statReporting = statReporting;
    this.usesPoints = usesPoints;
    this.activeArmy = activeArmy;
    this.actionLog = actionLog;
    this.turnStarted = turnStarted;
    this.units = units;
    this.unitModels = units.map((unit, index) => new Unit(unit, index, this));
    this.activeAction = activeAction;
    this.createdAt = createdAt;
    this.armies = armies;
    this.id = id;
    this.active = active;
  }

  get playingArmy() {
    const battlesimDeviceId = BattleDeviceStorage.id;
    const foundArmy = this.connectedDevices.find(device => device.id === battlesimDeviceId);
    const army = foundArmy !== undefined ? foundArmy.army : ARMY_BOTH;
    return army !== undefined ? army : ARMY_BOTH;
  }

  get prettyUrl() {
    return window.location.host + '/shared/' + this.uuid;
  }

  get url() {
    return window.location.origin + '/shared/' + this.uuid;
  }

  get createdDate() {
    return new Date(this.createdAt);
  }

  get playingArmyIsActive() {
    if (this.activeAction.type === ACTION_TYPE_ARMY) {
      return this.playingArmy === ARMY_BOTH || this.playingArmy === this.activeAction.index;
    } else if (this.activeAction.type === ACTION_TYPE_UNIT) {
      return this.playingArmy === ARMY_BOTH || this.playingArmy === this.activeUnit.armyIndex;
    } else {
      return true;
    }
  }

  get createdMessage() {
    let createdDate = this.createdDate;
    return createdDate.getMonth()+1 + '/' + createdDate.getDate() + '/' + createdDate.getFullYear();
  }

  get currentTime() {
    return new Date(this.startTime + (this.second * MILLISECONDS_PER_SECOND));
  }

  get currentTimeMessage() {
    return prettyDateTime(this.currentTime);
  }

  get shortTimeMessage() {
    return prettyTime(this.currentTime);
  }

  get unitIsActing() {
    return this.activeAction.type === ACTION_TYPE_UNIT;
  }

  get armyIsActing() {
    return this.activeAction.type === ACTION_TYPE_ARMY;
  }

  get activeUnit() {
    return this.unitModels[this.activeAction.index];
  }

  get activeArmyModel() {
    return this.armies[this.activeUnit.armyIndex];
  }

  get armyTakingAction() {
    return this.armies[this.activeAction.index];
  }

  get occuringEvent() {
    return this.events[this.activeAction.index];
  }

  get eventIsOccurring() {
    return this.activeAction.type === ACTION_TYPE_EVENT;
  }

  get army0Units() {
    return this.unitModels.filter(unit => unit.armyIndex === 0);
  }

  get army1Units() {
    return this.unitModels.filter(unit => unit.armyIndex === 1);
  }

  get army0() {
    return this.armies[0];
  }

  get army1() {
    return this.armies[1];
  }

  get allUnitTemplates() {
    return UNITS[this.unitTemplates].map((unit, index) => ({ id: index, unit }));
  }

  get battleRules() {
    return SCENARIOS[this.rules];
  }

  get rulesetRules() {
    return RULESETS[this.ruleset];
  }

  unitTemplatesFor(army) {
    return this.allUnitTemplates.filter(({unit}) => unit.army === army);
  }

  unitsByActivation(numberOfUnits = 0) {
    let allUnits = this.army0Units.concat(this.army1Units);
    return allUnits
      .sort((unitA, unitB) => unitA.timeUntilNextMove - unitB.timeUntilNextMove)
      .slice(1, numberOfUnits > 0 ? numberOfUnits + 1 : allUnits.length);
  }

  get unitsByArmy() {
    return [
      {
        name: this.army0.name,
        units: this.army0Units,
      },
      {
        name: this.army1.name,
        units: this.army1Units,
      }
    ];
  }
}
