import {
  STAT_DESCRIPTION,
  STRENGTH_MESSAGE_DESCRIPTIVE,
  CASUALTY_MESSAGE_DESCRIPTIVE,
  NO_PLAYER_TURNS,
  ACTION_TYPE_UNIT,
  ACTION_TYPE_ARMY,
  ACTION_TYPE_EVENT } from '../game.js';
import UNITS from '../game/units.js';
import Unit from './unit.js';
import { prettyDateTime, SECONDS_IN_AN_HOUR, MILLISECONDS_PER_SECOND } from '../utils/math-utils.js';

export default class Battle {
  constructor({
    name,
    ruleset,
    second = 0,
    startTime,
    events = [ ],
    terrain,
    unitTemplates,
    rules,
    createdAt,
    deadliness = 1, // TODO
    turnDuration = SECONDS_IN_AN_HOUR, // TODO
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
    this.ruleset = ruleset;
    this.second = second;
    this.startTime = startTime;
    this.events = events ;
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

  get createdDate() {
    return new Date(this.createdAt);
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

  get unitIsActing() {
    return this.activeAction.type === ACTION_TYPE_UNIT;
  }

  get armyIsActing() {
    return this.activeAction.type === ACTION_TYPE_ARMY;
  }

  get activeUnit() {
    return this.unitModels[this.activeAction.index];
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

  unitTemplatesFor(army) {
    return this.allUnitTemplates.filter(({unit}) => unit.army === army);
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
