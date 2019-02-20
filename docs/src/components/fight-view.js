define(["exports", "./battle-sim.js"], function (_exports, _battleSim) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getRadioVal = getRadioVal;
  _exports.$soloUnitDefault = _exports.$situationDefault = _exports.TERRAIN_TYPES = _exports.TERRAIN_TYPE_RANGED_DEFENDER = _exports.TERRAIN_TYPE_MELEE_COMBAT = _exports.TERRAIN_TYPE_DEFENDER = _exports.TERRAIN_TYPE_MOVEMENT = _exports.$soloUnit = _exports.$situation = _exports.$domUtils = _exports.$fightView = void 0;

  function _templateObject13_b00456d034ff11e98da2ddcf125ddb9c() {
    var data = babelHelpers.taggedTemplateLiteral(["\n        input.stands {\n          width: calc(50% - 0.5rem);\n          box-sizing: border-box;\n        }\n        input.stands:nth-child(odd) {\n          margin-right: 1rem;\n        }\n        .options-container {\n          font-size: 0; /* This solves the side by side inline-block element issue but be careful it might introduce other problems. */\n        }\n        .options-block {\n          font-size: 1rem;\n          width: 50%;\n          box-sizing: border-box;\n          display: inline-block;\n          vertical-align: top;\n        }\n        label {\n          font-size: 1rem;\n        }\n        .full {\n          width: 100% !important;\n          margin-right: 0;\n        }\n        .has-selection button {\n          opacity: 0.5;\n        }\n        button.selected {\n          opacity: 1;\n        }\n        .tooltip {\n          position: relative;\n          display: inline-block;\n        }\n        .tooltip .tooltiptext {\n          visibility: hidden;\n          width: 10rem;\n          background-color: var(--app-primary-color);\n          color: var(--app-light-text-color);\n          text-align: center;\n          padding: 10px;\n          border-radius: 6px;\n          position: absolute;\n          z-index: 1;\n        }\n        .tooltip:hover .tooltiptext {\n          visibility: visible;\n        }\n      "]);

    _templateObject13_b00456d034ff11e98da2ddcf125ddb9c = function _templateObject13_b00456d034ff11e98da2ddcf125ddb9c() {
      return data;
    };

    return data;
  }

  function _templateObject12_b00456d034ff11e98da2ddcf125ddb9c() {
    var data = babelHelpers.taggedTemplateLiteral(["\n        <section>\n          <p>No active battle. Go to the war tab and either select a battle or create a new battle.</p>\n        </section>\n      "]);

    _templateObject12_b00456d034ff11e98da2ddcf125ddb9c = function _templateObject12_b00456d034ff11e98da2ddcf125ddb9c() {
      return data;
    };

    return data;
  }

  function _templateObject11_b00456d034ff11e98da2ddcf125ddb9c() {
    var data = babelHelpers.taggedTemplateLiteral(["<p>", "</p>"]);

    _templateObject11_b00456d034ff11e98da2ddcf125ddb9c = function _templateObject11_b00456d034ff11e98da2ddcf125ddb9c() {
      return data;
    };

    return data;
  }

  function _templateObject10_b00456d034ff11e98da2ddcf125ddb9c() {
    var data = babelHelpers.taggedTemplateLiteral(["\n                <div><small>", " is currently unmounted</small></div>\n                <input type=\"checkbox\" id=\"mount\"></input>\n                <label for=\"mount\">Mount</label>\n              "]);

    _templateObject10_b00456d034ff11e98da2ddcf125ddb9c = function _templateObject10_b00456d034ff11e98da2ddcf125ddb9c() {
      return data;
    };

    return data;
  }

  function _templateObject9_b00456d034ff11e98da2ddcf125ddb9c() {
    var data = babelHelpers.taggedTemplateLiteral(["\n                <div><small>", " is currently mounted</small></div>\n                <input type=\"checkbox\" id=\"unmount\"></input>\n                <label for=\"unmount\">Unmount</label>\n              "]);

    _templateObject9_b00456d034ff11e98da2ddcf125ddb9c = function _templateObject9_b00456d034ff11e98da2ddcf125ddb9c() {
      return data;
    };

    return data;
  }

  function _templateObject8_b00456d034ff11e98da2ddcf125ddb9c() {
    var data = babelHelpers.taggedTemplateLiteral(["\n                      <input type=\"radio\" name=\"defender-leader\" id=\"", "\" value=\"", "\">\n                      <label for=\"", "\">", "</label>\n                      <br>\n                    "]);

    _templateObject8_b00456d034ff11e98da2ddcf125ddb9c = function _templateObject8_b00456d034ff11e98da2ddcf125ddb9c() {
      return data;
    };

    return data;
  }

  function _templateObject7_b00456d034ff11e98da2ddcf125ddb9c() {
    var data = babelHelpers.taggedTemplateLiteral(["\n                    <h6>", "</h6>\n                    ", "\n                  "]);

    _templateObject7_b00456d034ff11e98da2ddcf125ddb9c = function _templateObject7_b00456d034ff11e98da2ddcf125ddb9c() {
      return data;
    };

    return data;
  }

  function _templateObject6_b00456d034ff11e98da2ddcf125ddb9c() {
    var data = babelHelpers.taggedTemplateLiteral(["\n                    <input type=\"radio\" name=\"attacker-leader\" id=\"", "\" value=\"", "\">\n                    <label for=\"", "\">", "</label>\n                    <br>\n                  "]);

    _templateObject6_b00456d034ff11e98da2ddcf125ddb9c = function _templateObject6_b00456d034ff11e98da2ddcf125ddb9c() {
      return data;
    };

    return data;
  }

  function _templateObject5_b00456d034ff11e98da2ddcf125ddb9c() {
    var data = babelHelpers.taggedTemplateLiteral(["\n                    <div>\n                      <input type=\"checkbox\" id=\"", "\" data-terrain-index=\"", "\"></input>\n                      <label for=\"", "\">\n                        ", "\n                        <span class=\"tooltip\">\n                          ...\n                          <span class=\"tooltiptext\">", "</span>\n                        <span>\n                      </label>\n                    </div>\n                  "]);

    _templateObject5_b00456d034ff11e98da2ddcf125ddb9c = function _templateObject5_b00456d034ff11e98da2ddcf125ddb9c() {
      return data;
    };

    return data;
  }

  function _templateObject4_b00456d034ff11e98da2ddcf125ddb9c() {
    var data = babelHelpers.taggedTemplateLiteral(["\n                <div id=\"", "\" class=\"", "\">\n                  <h5 class=\"tooltip\">\n                    ", "\n                    <span class=\"tooltiptext\">", "</span>\n                  </h5>\n                  ", "\n                </div>\n              "]);

    _templateObject4_b00456d034ff11e98da2ddcf125ddb9c = function _templateObject4_b00456d034ff11e98da2ddcf125ddb9c() {
      return data;
    };

    return data;
  }

  function _templateObject3_b00456d034ff11e98da2ddcf125ddb9c() {
    var data = babelHelpers.taggedTemplateLiteral(["\n                <option value=\"", "\">", "</option>\n              "]);

    _templateObject3_b00456d034ff11e98da2ddcf125ddb9c = function _templateObject3_b00456d034ff11e98da2ddcf125ddb9c() {
      return data;
    };

    return data;
  }

  function _templateObject2_b00456d034ff11e98da2ddcf125ddb9c() {
    var data = babelHelpers.taggedTemplateLiteral(["\n        <section>\n          <h2>", "</h2>\n          <div class=\"muted centered\">Army: ", "</div>\n          <div class=\"muted centered\">", "</div>\n          <p>", "</p>\n          <hr>\n          <p>", "</p>\n        </section>\n        <section>\n          <div class=\"", "\">\n            <button @click=\"", "\" id=\"rest\" ?disabled=\"", "\" class=\"", "\">Rest</button>\n            <button @click=\"", "\" id=\"move\" ?disabled=\"", "\" class=\"", "\">Move</button>\n            <button @click=\"", "\" id=\"charge\" ?disabled=\"", "\" class=\"", "\">Charge</button>\n            <button @click=\"", "\" id=\"fire\" ?disabled=\"", "\" class=\"", "\">Fire</button>\n          </div>\n        </section>\n        <section>\n          <div class=\"options-container\">\n            <p class=\"", "\">", "</p>\n            <input id=\"rest-time\" class=\"", "\" type=\"number\" placeholder=\"Minutes to rest\" max=\"", "\"></input>\n            <input id=\"distance\" class=\"", "\" type=\"number\" placeholder=\"Distance (Leave blank to move as far as possible)\"></input>\n            <input id=\"separation\" class=\"", "\" type=\"number\" placeholder=\"Distance (Required)\"></input>\n            <select id=\"target\" class=\"", "\" @change=\"", "\">\n              <option value=\"\">Select Target (Required)</option>\n              ", "\n            </select>\n            <div class=\"", "\">\n              <input id=\"engaged-attackers\" class=\"", "\" type=\"number\" placeholder=\"Attacking Stands\"></input>\n              <input id=\"engaged-defenders\" class=\"", "\" type=\"number\" placeholder=\"Defending Stands\"></input>\n            </div>\n            <button class=\"", "\" @click=\"", "\">Do Combat</button>\n            <button class=\"", "\" @click=\"", "\">Take Action</button>\n            <br>\n            <div class=\"", "\">\n              ", "\n              <div class=\"", "\">\n                <radiogroup id=\"pace\" class=\"", "\">\n                  <h5>Pace</h5>\n                  <input type=\"radio\" name=\"pace\" id=\"pace-fast\" value=\"1\">\n                  <label for=\"pace-fast\">Fast</label>\n                  <br>\n                  <input type=\"radio\" name=\"pace\" id=\"pace-march\" value=\"0.75\" checked>\n                  <label for=\"pace-march\">March</label>\n                  <br>\n                  <input type=\"radio\" name=\"pace\" id=\"pace-rest\" value=\"0.5\">\n                  <label for=\"pace-rest\">Rest</label>\n                  <br><br>\n                </radiogroup>\n              </div>\n            </div>\n            <div class=\"", "\">\n              <radiogroup id=\"hill\" class=\"", "\">\n                <h5>Hills</h5>\n                <input type=\"radio\" name=\"hill\" id=\"", "\" value=\"", "\">\n                <label for=\"", "\">Uphill</label>\n                <br>\n                <input type=\"radio\" name=\"hill\" id=\"", "\" value=\"", "\">\n                <label for=\"", "\">Downhill</label>\n                <br>\n                <input type=\"radio\" name=\"hill\" id=\"", "\" value=\"", "\">\n                <label for=\"", "\">Neither</label>\n                <br><br>\n              </radiogroup>\n              <h5>Leadership</h5>\n              <div id=\"leadership\">\n                <radiogroup id=\"attacker-leader\" class=\"", "\">\n                  <h6>", "</h6>\n                  ", "\n                  ", "\n                </radiogroup>\n              </div>\n            </div>\n            <div id=\"resupply\" class=\"", "\">\n              <h5>Supply</h5>\n              <input type=\"checkbox\" id=\"resupply-checkbox\"></input>\n              <label for=\"resupply-checkbox\">Resupply</label>\n            </div>\n            <div class=\"", "\">\n              <h5>Mounted Actions</h5>\n              ", "\n            </div>\n            <p class=\"", "\">You must provide valid values for each required field.</p>\n            <div class=\"", "\">\n              ", "\n              <button @click=\"", "\">Next Action</button>\n            </div>\n          </div>\n        </section>\n      "]);

    _templateObject2_b00456d034ff11e98da2ddcf125ddb9c = function _templateObject2_b00456d034ff11e98da2ddcf125ddb9c() {
      return data;
    };

    return data;
  }

  function _templateObject_b00456d034ff11e98da2ddcf125ddb9c() {
    var data = babelHelpers.taggedTemplateLiteral(["\n      ", "\n    "]);

    _templateObject_b00456d034ff11e98da2ddcf125ddb9c = function _templateObject_b00456d034ff11e98da2ddcf125ddb9c() {
      return data;
    };

    return data;
  }

  function getRadioVal(container, name) {
    var val; // get list of radio buttons with specified name

    var radios = container.querySelectorAll("[name=\"".concat(name, "\"]")); // loop through list of radio buttons

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
  _exports.$domUtils = domUtils;

  var SoloUnit =
  /*#__PURE__*/
  function (_ActingUnit) {
    babelHelpers.inherits(SoloUnit, _ActingUnit);

    function SoloUnit(_ref) {
      var _this;

      var unit = _ref.unit,
          situation = _ref.situation,
          _ref$armyLeadership = _ref.armyLeadership,
          armyLeadership = _ref$armyLeadership === void 0 ? 0 : _ref$armyLeadership,
          _ref$status = _ref.status,
          status = _ref$status === void 0 ? _battleSim.MORALE_SUCCESS : _ref$status,
          _ref$mount = _ref.mount,
          mount = _ref$mount === void 0 ? false : _ref$mount,
          _ref$unmount = _ref.unmount,
          unmount = _ref$unmount === void 0 ? false : _ref$unmount,
          _ref$pace = _ref.pace,
          pace = _ref$pace === void 0 ? 1 : _ref$pace,
          _ref$slope = _ref.slope,
          slope = _ref$slope === void 0 ? SLOPE_NONE : _ref$slope;
      babelHelpers.classCallCheck(this, SoloUnit);
      _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(SoloUnit).call(this, {
        unit: unit,
        pace: pace,
        environment: situation,
        armyLeadership: armyLeadership
      }));
      _this.unit = unit;
      _this.situation = situation;
      _this.armyLeadership = armyLeadership;
      _this.status = status;
      _this.mount = mount;
      _this.unmount = unmount;
      _this.slope = slope;
      _this.pace = pace;
      _this.energyModRoll = (0, _battleSim.weightedRandomTowards)(0, 100, 30, 2);
      _this.moraleModRoll = (0, _battleSim.weightedRandomTowards)(0, 100, 1, 2);
      return _this;
    }

    babelHelpers.createClass(SoloUnit, [{
      key: "updates",
      value: function updates(delay) {
        return {
          id: this.unit.id,
          changes: this.changes(delay)
        };
      }
    }, {
      key: "changes",
      value: function changes(delay) {
        var changes = [{
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
    }, {
      key: "energyGain",
      get: function get() {
        return Math.min(_battleSim.MAX_STAT - this.unit.energy, this.maxEnergyRecovered);
      }
    }, {
      key: "moraleGain",
      get: function get() {
        return Math.min(_battleSim.MAX_STAT - this.unit.morale, this.maxMoraleRecovered);
      }
    }, {
      key: "paceAdjustment",
      get: function get() {
        return (1 - this.pace) * 100;
      }
    }, {
      key: "maxMoraleRecovered",
      get: function get() {
        return (0, _battleSim.weightedAverage)(this.paceAdjustment, this.moraleModRoll, 0);
      }
    }, {
      key: "maxEnergyRecovered",
      get: function get() {
        return (0, _battleSim.weightedAverage)(this.paceAdjustment, this.energyModRoll, this.situation.percentageOfATurnSpentResting);
      }
    }, {
      key: "desc",
      get: function get() {
        return "".concat(this.situation.yardsTravelled > 0 ? this.moveDesc : '', " ").concat(this.situation.yardsTravelled > 0 ? this.battlefieldMoveDesc : '', " ").concat(this.energyGain > 0 && this.situation.minutesSpentResting > 0 ? this.energyRecoveredDesc : '', " ").concat(this.moraleGain > 0 && this.situation.minutesSpentResting > 0 ? this.moraleRecoveredDesc : '');
      }
    }, {
      key: "battlefieldMoveDesc",
      get: function get() {
        return "in ".concat(Math.floor(this.situation.secondsSpentMoving / _battleSim.SECONDS_IN_AN_MINUTE), " minutes.");
      }
    }, {
      key: "moveDesc",
      get: function get() {
        if (this.situation.distance === -1) {
          return "You move ".concat(Math.floor(this.situation.yardsTravelled / _battleSim.YARDS_PER_INCH), " inches ");
        } else if (this.situation.yardsTravelled < this.situation.distanceInYards) {
          return "You could only move ".concat(Math.floor(this.situation.yardsTravelled / _battleSim.YARDS_PER_INCH), " inches ");
        } else {
          return "You move the full ".concat(Math.floor(this.situation.yardsTravelled / _battleSim.YARDS_PER_INCH), " inches ");
        }
      }
    }, {
      key: "energyRecoveredDesc",
      get: function get() {
        if (this.energyGain > 80) {
          return "In ".concat(this.situation.minutesSpentResting, " minutes they got back all of there energy.");
        } else if (this.energyGain > 60) {
          return "In ".concat(this.situation.minutesSpentResting, " minutes they recovered almost all of their strength.");
        } else if (this.energyGain > 40) {
          return "In ".concat(this.situation.minutesSpentResting, " minutes they made a great recovery. The rest was very helpful.");
        } else if (this.energyGain > 20) {
          return "In ".concat(this.situation.minutesSpentResting, " minutes they recovered a lot of their strength");
        } else if (this.energyGain > 15) {
          return "In ".concat(this.situation.minutesSpentResting, " minutes they recovered much of their strength");
        } else if (this.energyGain > 9) {
          return "In ".concat(this.situation.minutesSpentResting, " minutes they recovered some of their strength");
        } else if (this.energyGain > 6) {
          return "In ".concat(this.situation.minutesSpentResting, " minutes they recovered a bit of their strength.");
        } else if (this.energyGain > 3) {
          return "In ".concat(this.situation.minutesSpentResting, " minutes they recovered a bit of their strength.");
        } else {
          return "The rest was hardly worth it.";
        }
      }
    }, {
      key: "moraleRecoveredDesc",
      get: function get() {
        if (this.moraleGain > 20) {
          return "They have been greatly encouraged.";
        } else if (this.moraleGain > 10) {
          return "They have been encouraged.";
        } else {
          return "They seem to be more willing to fight than before.";
        }
      }
    }]);
    return SoloUnit;
  }(_battleSim.ActingUnit);

  _exports.$soloUnitDefault = SoloUnit;
  var soloUnit = {
    default: SoloUnit
  };
  _exports.$soloUnit = soloUnit;

  var Situation =
  /*#__PURE__*/
  function () {
    function Situation(_ref2) {
      var unit = _ref2.unit,
          _ref2$armyLeadership = _ref2.armyLeadership,
          armyLeadership = _ref2$armyLeadership === void 0 ? 0 : _ref2$armyLeadership,
          _ref2$movementTerrain = _ref2.movementTerrain,
          movementTerrain = _ref2$movementTerrain === void 0 ? 0 : _ref2$movementTerrain,
          _ref2$mount = _ref2.mount,
          mount = _ref2$mount === void 0 ? false : _ref2$mount,
          _ref2$unmount = _ref2.unmount,
          unmount = _ref2$unmount === void 0 ? false : _ref2$unmount,
          _ref2$pace = _ref2.pace,
          pace = _ref2$pace === void 0 ? 1 : _ref2$pace,
          _ref2$slope = _ref2.slope,
          slope = _ref2$slope === void 0 ? _battleSim.SLOPE_NONE : _ref2$slope;
      babelHelpers.classCallCheck(this, Situation);
      this.movementTerrain = movementTerrain;
      this.slope = slope;
      this.soloUnit = new SoloUnit({
        unit: unit,
        situation: this,
        mount: mount,
        unmount: unmount,
        pace: pace,
        slope: this.slope
      });
    }

    babelHelpers.createClass(Situation, [{
      key: "rest",
      value: function rest() {
        var minutesSpent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _battleSim.MINUTES_PER_TURN;
        this.distance = 0;
        this.secondsSpentMoving = 0;
        this.secondsSpentResting = minutesSpent * _battleSim.SECONDS_IN_AN_MINUTE;
        return this.actionResult;
      }
    }, {
      key: "move",
      value: function move(distance) {
        this.distance = distance;
        this.secondsSpentMoving = this.yardsTravelled / this.soloUnit.speed;
        this.secondsSpentResting = 0;
        return this.actionResult;
      }
    }, {
      key: "actionResult",
      get: function get() {
        return {
          messages: [this.soloUnit.desc],
          updates: [this.soloUnit.updates(_battleSim.SECONDS_PER_TURN)]
        };
      }
    }, {
      key: "maxYardsTravelled",
      get: function get() {
        return this.secondsAvailableToMove * this.soloUnit.speed;
      }
    }, {
      key: "secondsAvailableToMove",
      get: function get() {
        return _battleSim.SECONDS_PER_TURN - this.soloUnit.unit.secondsToIssueOrder;
      }
    }, {
      key: "yardsTravelled",
      get: function get() {
        if (this.distance === -1) {
          return this.maxYardsTravelled;
        } else {
          return Math.min(this.distanceInYards, this.maxYardsTravelled);
        }
      }
    }, {
      key: "distanceInYards",
      get: function get() {
        return this.distance * _battleSim.YARDS_PER_INCH;
      }
    }, {
      key: "totalSecondsSpent",
      get: function get() {
        return this.secondsSpentMoving + this.secondsToIssueOrder;
      }
    }, {
      key: "percentageOfATurnSpentMoving",
      get: function get() {
        return this.secondsSpentMoving / _battleSim.SECONDS_PER_TURN * 100;
      }
    }, {
      key: "percentageOfATurnSpentResting",
      get: function get() {
        return this.secondsSpentResting / _battleSim.SECONDS_PER_TURN * 100;
      }
    }, {
      key: "minutesSpentResting",
      get: function get() {
        return this.secondsSpentResting / _battleSim.SECONDS_IN_AN_MINUTE;
      }
    }]);
    return Situation;
  }();

  _exports.$situationDefault = Situation;
  var situation = {
    default: Situation
  };
  _exports.$situation = situation;
  var REST = 'REST';
  var MOVE = 'MOVE';
  var CHARGE = 'CHARGE';
  var FIRE = 'FIRE';
  var ACTIONS = [REST, MOVE, CHARGE, FIRE];
  var NO_ACTION = 'NO_ACTION';
  var TERRAIN_TYPE_MOVEMENT = 'movement-terrain';
  _exports.TERRAIN_TYPE_MOVEMENT = TERRAIN_TYPE_MOVEMENT;
  var TERRAIN_TYPE_DEFENDER = 'defender-terrain';
  _exports.TERRAIN_TYPE_DEFENDER = TERRAIN_TYPE_DEFENDER;
  var TERRAIN_TYPE_MELEE_COMBAT = 'melee-combat-terrain';
  _exports.TERRAIN_TYPE_MELEE_COMBAT = TERRAIN_TYPE_MELEE_COMBAT;
  var TERRAIN_TYPE_RANGED_DEFENDER = 'ranged-defender-terrain';
  _exports.TERRAIN_TYPE_RANGED_DEFENDER = TERRAIN_TYPE_RANGED_DEFENDER;
  var TERRAIN_TYPES = [TERRAIN_TYPE_MOVEMENT, TERRAIN_TYPE_DEFENDER, TERRAIN_TYPE_MELEE_COMBAT, TERRAIN_TYPE_RANGED_DEFENDER];
  _exports.TERRAIN_TYPES = TERRAIN_TYPES;

  var FightView =
  /*#__PURE__*/
  function (_connect) {
    babelHelpers.inherits(FightView, _connect);

    function FightView() {
      babelHelpers.classCallCheck(this, FightView);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(FightView).apply(this, arguments));
    }

    babelHelpers.createClass(FightView, [{
      key: "render",
      value: function render() {
        return (0, _battleSim.html)(_templateObject_b00456d034ff11e98da2ddcf125ddb9c(), this._hasActiveBattle ? (0, _battleSim.html)(_templateObject2_b00456d034ff11e98da2ddcf125ddb9c(), this._unit.name, this._unit.army.name, (0, _battleSim.prettyDateTime)(this._date), this._unit.detailedStatus, this._unit.desc, (0, _battleSim.classMap)({
          'has-selection': this._actionSelected
        }), this._rest, this._actionsDisabled, (0, _battleSim.classMap)({
          selected: this._selectedAction === REST
        }), this._move, this._actionsDisabled, (0, _battleSim.classMap)({
          selected: this._selectedAction === MOVE
        }), this._charge, this._actionsDisabled, (0, _battleSim.classMap)({
          selected: this._selectedAction === CHARGE
        }), this._fire, this._actionsDisabled, (0, _battleSim.classMap)({
          selected: this._selectedAction === FIRE
        }), (0, _battleSim.classMap)({
          hidden: !this._showChargeMessage
        }), this._chargeMessage, (0, _battleSim.classMap)({
          hidden: !this._showRestTime
        }), _battleSim.MINUTES_PER_TURN, (0, _battleSim.classMap)({
          hidden: !this._showDistance
        }), (0, _battleSim.classMap)({
          hidden: !this._showSeparation
        }), (0, _battleSim.classMap)({
          hidden: !this._showTarget
        }), this._updateTarget, (0, _battleSim.repeat)(this._unit.targets, function (target) {
          return (0, _battleSim.html)(_templateObject3_b00456d034ff11e98da2ddcf125ddb9c(), target.id, target.unit.name);
        }), (0, _battleSim.classMap)({
          hidden: !this._showEngagedAttackers && !this._showEngagedDefenders
        }), (0, _battleSim.classMap)({
          hidden: !this._showEngagedAttackers,
          full: this._showEngagedAttackers && !this._showEngagedDefenders,
          stands: true
        }), (0, _battleSim.classMap)({
          hidden: !this._showEngagedDefenders,
          stands: true
        }), (0, _battleSim.classMap)({
          hidden: !this._showDoCombat
        }), this._doCombat, (0, _battleSim.classMap)({
          hidden: !this._showTakeAction
        }), this._takeAction, (0, _battleSim.classMap)({
          "options-block": true,
          hidden: !this._showTerrain
        }), (0, _battleSim.repeat)(this._typesOfTerrain, function (terrainType) {
          return (0, _battleSim.html)(_templateObject4_b00456d034ff11e98da2ddcf125ddb9c(), terrainType.id, (0, _battleSim.classMap)({
            hidden: !terrainType.show
          }), terrainType.name, terrainType.description, (0, _battleSim.repeat)(terrainType.terrain, function (_ref3) {
            var terrain = _ref3.terrain,
                index = _ref3.index;
            return (0, _battleSim.html)(_templateObject5_b00456d034ff11e98da2ddcf125ddb9c(), terrainType.id + index, index, terrainType.id + index, terrain.name, terrain.descripton);
          }));
        }), (0, _battleSim.classMap)({
          hidden: this.showPace
        }), (0, _battleSim.classMap)({
          hidden: !this._showHill
        }), (0, _battleSim.classMap)({
          "options-block": true,
          hidden: !this._showHill && !this._showLeader
        }), (0, _battleSim.classMap)({
          hidden: !this._showHill
        }), _battleSim.SLOPE_UP, _battleSim.SLOPE_UP, _battleSim.SLOPE_UP, _battleSim.SLOPE_DOWN, _battleSim.SLOPE_DOWN, _battleSim.SLOPE_DOWN, _battleSim.SLOPE_NONE, _battleSim.SLOPE_NONE, _battleSim.SLOPE_NONE, (0, _battleSim.classMap)({
          hidden: !this._showLeader
        }), this._unit.name, (0, _battleSim.repeat)(this._unit.army.leaders, function (leader, index) {
          return (0, _battleSim.html)(_templateObject6_b00456d034ff11e98da2ddcf125ddb9c(), 'attacker-leader-' + index, leader.leadership, 'attacker-leader-' + index, leader.shortname);
        }), this._targetUnit ? (0, _battleSim.html)(_templateObject7_b00456d034ff11e98da2ddcf125ddb9c(), this._targetUnit.name, (0, _battleSim.repeat)(this._targetUnit.army.leaders, function (leader, index) {
          return (0, _battleSim.html)(_templateObject8_b00456d034ff11e98da2ddcf125ddb9c(), 'defender-leader-' + index, leader.leadership, 'defender-leader-' + index, leader.shortname);
        })) : "", (0, _battleSim.classMap)({
          hidden: !this._showResupply
        }), (0, _battleSim.classMap)({
          hidden: !this._showMount
        }), this._unit.isCurrentlyMounted ? (0, _battleSim.html)(_templateObject9_b00456d034ff11e98da2ddcf125ddb9c(), this._unit.name) : (0, _battleSim.html)(_templateObject10_b00456d034ff11e98da2ddcf125ddb9c(), this._unit.name), (0, _battleSim.classMap)({
          hidden: !this._showError,
          error: true
        }), (0, _battleSim.classMap)({
          hidden: !this._showActionResult
        }), (0, _battleSim.repeat)(this._actionMessages, function (message) {
          return (0, _battleSim.html)(_templateObject11_b00456d034ff11e98da2ddcf125ddb9c(), message);
        }), this._progressToNextAction) : (0, _battleSim.html)(_templateObject12_b00456d034ff11e98da2ddcf125ddb9c()));
      }
    }, {
      key: "stateChanged",
      value: function stateChanged(state) {
        this._actionMessages = [];

        if (state.battle.battles.length > state.battle.activeBattle) {
          this._activeBattle = state.battle.battles[state.battle.activeBattle];
          this._unit = new _battleSim.$unitDefault(this._activeBattle.units[this._activeBattle.activeUnit], this._activeBattle.activeUnit);
          this._date = new Date(this._activeBattle.startTime + this._activeBattle.second * 1000);
          this._hasActiveBattle = true;
        } else {
          this._hasActiveBattle = false;
        }
      }
    }, {
      key: "_doCombat",
      value: function _doCombat() {
        if (this._validSituation) {
          this._hideInputs();

          var encounter = this._createEncounter();

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
    }, {
      key: "_takeAction",
      value: function _takeAction() {
        if (this._validSituation) {
          var actionResult;
          var skipResults;

          if (this._selectedAction === REST || this._selectedAction === MOVE) {
            var _situation = this._createSituation();

            actionResult = this._selectedAction === REST ? _situation.rest(this.restTime) : _situation.move(this.distance);
            skipResults = false;
          } else {
            var encounter = this._createEncounter();

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
    }, {
      key: "_progressToNextAction",
      value: function _progressToNextAction() {
        _battleSim.store.dispatch((0, _battleSim.takeAction)(this._actionUpdates));

        this._actionUpdate = {};
        this._showActionResult = false;
        this._actionsDisabled = false;
      }
    }, {
      key: "_rest",
      value: function _rest(e) {
        this._hideInputs();

        this._selectedAction = REST;
        this._showTakeAction = true;
        this._showRestTime = true;
        this._showResupply = true;
        this._showMount = this._unit.isMounted && this._unit.canUnmount;
      }
    }, {
      key: "_move",
      value: function _move(e) {
        this._hideInputs();

        this._selectedAction = MOVE;
        this._showDistance = true;
        this._showHill = true;
        this._showLeader = true;
        this._showTerrain = true;
        this._showTakeAction = true;
      }
    }, {
      key: "_charge",
      value: function _charge(e) {
        this._hideInputs();

        this._selectedAction = CHARGE;
        this._showSeparation = true;
        this._showHill = true;
        this._showLeader = true;
        this._showTerrain = true;
        this._showTarget = true;
        this._showDoCombat = true;
      }
    }, {
      key: "_fire",
      value: function _fire(e) {
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
    }, {
      key: "_createEncounter",
      value: function _createEncounter() {
        var defenderTerrain = this._selectedAction === CHARGE ? this._selectedTerrain(TERRAIN_TYPE_DEFENDER) : this._selectedTerrain(TERRAIN_TYPE_RANGED_DEFENDER);
        return new _battleSim.$encounterDefault({
          attacker: this._unit,
          attackerTerrainDefense: 0,
          attackerArmyLeadership: this._activeArmyLeadership,
          attackerEngagedStands: this.engagedAttackers,
          defender: new _battleSim.$unitDefault(this._activeBattle.units[this.target], this.target),
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
    }, {
      key: "_createSituation",
      value: function _createSituation() {
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
    }, {
      key: "_hideInputs",
      value: function _hideInputs() {
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
    }, {
      key: "_resetInputs",
      value: function _resetInputs() {
        var _this2 = this;

        this.get('distance').value = '';
        this.get('rest-time').value = '';
        this.get('separation').value = '';
        this.get('engaged-attackers').value = '';
        this.get('engaged-defenders').value = '';
        if (this.get('pace-fast')) this.get('pace-fast').checked = false;
        if (this.get('pace-march')) this.get('pace-march').checked = true;
        if (this.get('pace-slow')) this.get('pace-slow').checked = false;
        this.get('hill').querySelectorAll('input').forEach(function (input) {
          return input.checked = false;
        });
        this.get('leadership').querySelectorAll('input').forEach(function (input) {
          return input.checked = false;
        });
        this.get('resupply').querySelector('input').checked = false;
        this.get('target').value = '';
        TERRAIN_TYPES.forEach(function (type) {
          return _this2.get(type).querySelectorAll('input').forEach(function (input) {
            return input.checked = false;
          });
        });
      }
    }, {
      key: "_blinkError",
      value: function _blinkError() {
        var _this3 = this;

        this._showError = true;
        setTimeout(function () {
          _this3._showError = false;
        }, 3000);
      }
    }, {
      key: "_selectedTerrain",
      value: function _selectedTerrain(typeId) {
        var _this4 = this;

        return babelHelpers.toConsumableArray(this.get(typeId).querySelectorAll('input')).filter(function (input) {
          return input.checked;
        }).map(function (input) {
          return _this4._activeBattle.terrain[input.dataset.terrainIndex];
        });
      }
    }, {
      key: "_updateTarget",
      value: function _updateTarget() {
        if (this.target && !isNaN(this.target)) {
          this._targetUnit = new _battleSim.$unitDefault(this._activeBattle.units[this.target], this.target);
        } else {
          this._targetUnit = null;
        }
      }
    }, {
      key: "get",
      value: function get(id) {
        return this.shadowRoot.getElementById(id);
      }
    }, {
      key: "target",
      get: function get() {
        if (this.get('target')) {
          return parseInt(this.get('target').value);
        } else {
          return null;
        }
      }
    }, {
      key: "_actionSelected",
      get: function get() {
        return ACTIONS.indexOf(this._selectedAction) >= 0;
      }
    }, {
      key: "_validSituation",
      get: function get() {
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
    }, {
      key: "distance",
      get: function get() {
        return parseInt(this.get('distance').value === '' ? -1 : this.get('distance').value);
      }
    }, {
      key: "restTime",
      get: function get() {
        return Math.min(parseInt(this.get('rest-time').value === '' ? _battleSim.MINUTES_PER_TURN : this.get('rest-time').value), _battleSim.MINUTES_PER_TURN);
      }
    }, {
      key: "separation",
      get: function get() {
        return parseInt(this.get('separation').value ? this.get('separation').value : 0);
      }
    }, {
      key: "engagedAttackers",
      get: function get() {
        return parseInt(this.get('engaged-attackers').value === '' ? -1 : this.get('engaged-attackers').value);
      }
    }, {
      key: "engagedDefenders",
      get: function get() {
        if (this._selectedAction === CHARGE) {
          return parseInt(this.get('engaged-defenders').value === '' ? -1 : this.get('engaged-defenders').value);
        } else {
          return 0;
        }
      }
    }, {
      key: "slope",
      get: function get() {
        var radioVal = getRadioVal(this.get('hill'), 'hill');
        return radioVal ? radioVal : _battleSim.SLOPE_NONE;
      }
    }, {
      key: "pace",
      get: function get() {
        if (this._selectedAction === REST) {
          return 0;
        } else {
          var radioVal = getRadioVal(this.get('pace'), 'pace');
          return radioVal ? parseFloat(radioVal) : 1;
        }
      }
    }, {
      key: "_activeArmyLeadership",
      get: function get() {
        return getRadioVal(this.get('leadership'), 'attacker-leader');
      }
    }, {
      key: "_defenderArmyLeadership",
      get: function get() {
        return getRadioVal(this.get('leadership'), 'defender-leader');
      }
    }, {
      key: "_typesOfTerrain",
      get: function get() {
        return [{
          id: TERRAIN_TYPE_MOVEMENT,
          name: "Movement",
          description: "This is the terrain that applys to the movement or charge.",
          terrain: this._activeBattle.terrain.map(function (terrain, index) {
            return {
              terrain: terrain,
              index: index
            };
          }),
          show: this._showTerrain && (this._selectedAction === CHARGE || this._selectedAction === MOVE)
        }, {
          id: TERRAIN_TYPE_DEFENDER,
          name: "Defender",
          description: "This is the terrain that the defender is defending.",
          terrain: this._activeBattle.terrain.map(function (terrain, index) {
            return {
              terrain: terrain,
              index: index
            };
          }).filter(function (_ref4) {
            var terrain = _ref4.terrain;
            return terrain.defendable;
          }),
          show: this._showTerrain && this._selectedAction === CHARGE
        }, {
          id: TERRAIN_TYPE_MELEE_COMBAT,
          name: "Combat",
          description: "This is the terrain that the combat that is taking place.",
          terrain: this._activeBattle.terrain.map(function (terrain, index) {
            return {
              terrain: terrain,
              index: index
            };
          }).filter(function (_ref5) {
            var terrain = _ref5.terrain;
            return terrain.areaTerrain;
          }),
          show: this._showTerrain && this._selectedAction === CHARGE
        }, {
          id: TERRAIN_TYPE_RANGED_DEFENDER,
          name: "Terrain",
          description: "This is the terrain that the defender recieves the benefit of.",
          terrain: this._activeBattle.terrain.map(function (terrain, index) {
            return {
              terrain: terrain,
              index: index
            };
          }),
          show: this._showTerrain && this._selectedAction === FIRE
        }];
      }
    }, {
      key: "resupply",
      get: function get() {
        return this.get('resupply').querySelector('input').checked;
      }
    }, {
      key: "mount",
      get: function get() {
        return this.get('mount') && this.get('mount').checked;
      }
    }, {
      key: "unmount",
      get: function get() {
        return this.get('unmount') && this.get('unmount').checked;
      }
    }], [{
      key: "properties",
      get: function get() {
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
    }, {
      key: "styles",
      get: function get() {
        return [_battleSim.SharedStyles, _battleSim.ButtonSharedStyles, (0, _battleSim.css)(_templateObject13_b00456d034ff11e98da2ddcf125ddb9c())];
      }
    }]);
    return FightView;
  }((0, _battleSim.connect)(_battleSim.store)(_battleSim.PageViewElement));

  window.customElements.define('fight-view', FightView);
  var fightView = {
    TERRAIN_TYPE_MOVEMENT: TERRAIN_TYPE_MOVEMENT,
    TERRAIN_TYPE_DEFENDER: TERRAIN_TYPE_DEFENDER,
    TERRAIN_TYPE_MELEE_COMBAT: TERRAIN_TYPE_MELEE_COMBAT,
    TERRAIN_TYPE_RANGED_DEFENDER: TERRAIN_TYPE_RANGED_DEFENDER,
    TERRAIN_TYPES: TERRAIN_TYPES
  };
  _exports.$fightView = fightView;
});