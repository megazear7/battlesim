import {
  STAT_DESCRIPTION,
  STRENGTH_MESSAGE_DESCRIPTIVE,
  CASUALTY_MESSAGE_DESCRIPTIVE,
  ACTION_TYPE_UNIT,
  NO_PLAYER_TURNS } from '../game.js';
import { SECONDS_IN_AN_HOUR } from '../math-utils.js';

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
    activeAction = { }
  }) {
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
    this.activeAction = activeAction;
    this.armies = armies;
  }
}
