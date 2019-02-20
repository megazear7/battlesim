define(["./battle-sim.js"], function (_battleSim) {
  "use strict";

  function _templateObject7_afebc5c034ff11e98da2ddcf125ddb9c() {
    var data = babelHelpers.taggedTemplateLiteral(["\n        #added-message {\n          opacity: 0;\n          display: none;\n          color: green;\n          transition: opacity 300ms;\n        }\n        h4 {\n          margin-bottom: 0.5rem;\n        }\n        .unit {\n          border-bottom: 1px solid black;\n          padding-bottom: 1rem;\n        }\n        .unit:last-child {\n          border-bottom: 0;\n        }\n        .unit:hover h5 {\n          color: var(--app-primary-color);\n        }\n      "]);

    _templateObject7_afebc5c034ff11e98da2ddcf125ddb9c = function _templateObject7_afebc5c034ff11e98da2ddcf125ddb9c() {
      return data;
    };

    return data;
  }

  function _templateObject6_afebc5c034ff11e98da2ddcf125ddb9c() {
    var data = babelHelpers.taggedTemplateLiteral(["\n        <section>\n          <p>No active battle. Go to the war tab and either select a battle or create a new battle.</p>\n        </section>\n      "]);

    _templateObject6_afebc5c034ff11e98da2ddcf125ddb9c = function _templateObject6_afebc5c034ff11e98da2ddcf125ddb9c() {
      return data;
    };

    return data;
  }

  function _templateObject5_afebc5c034ff11e98da2ddcf125ddb9c() {
    var data = babelHelpers.taggedTemplateLiteral(["\n                <option value=\"", "\">", "</option>\n              "]);

    _templateObject5_afebc5c034ff11e98da2ddcf125ddb9c = function _templateObject5_afebc5c034ff11e98da2ddcf125ddb9c() {
      return data;
    };

    return data;
  }

  function _templateObject4_afebc5c034ff11e98da2ddcf125ddb9c() {
    var data = babelHelpers.taggedTemplateLiteral(["\n              <div class=\"unit\" data-index=\"", "\">\n                <h4 class=\"unit-name\">", "</h4>\n                <button class=\"btn-link remove-unit\" @click=\"", "\">Remove</button>\n                <p>", "</p>\n                <p>", "</p>\n              </div>\n            "]);

    _templateObject4_afebc5c034ff11e98da2ddcf125ddb9c = function _templateObject4_afebc5c034ff11e98da2ddcf125ddb9c() {
      return data;
    };

    return data;
  }

  function _templateObject3_afebc5c034ff11e98da2ddcf125ddb9c() {
    var data = babelHelpers.taggedTemplateLiteral(["\n          <section>\n            <h3>", "</h3>\n            ", "\n          </section>\n        "]);

    _templateObject3_afebc5c034ff11e98da2ddcf125ddb9c = function _templateObject3_afebc5c034ff11e98da2ddcf125ddb9c() {
      return data;
    };

    return data;
  }

  function _templateObject2_afebc5c034ff11e98da2ddcf125ddb9c() {
    var data = babelHelpers.taggedTemplateLiteral(["\n        ", "\n        <section>\n          <h3>Add Unit</h3>\n          <div>\n            <select id=\"army\" @change=\"", "\">\n              <option value=\"0\">", "</option>\n              <option value=\"1\">", "</option>\n            </select>\n            <select id=\"unit-template\">\n              <option>Select Unit To Add (Required)</option>\n              ", "\n            </select>\n            <input id=\"name\" type=\"text\" placeholder=\"Optionally Change the Units Name\"></input>\n            <button @click=\"", "\">Add</button>\n            <p class=\"error hidden\">You must select a type of unit to add.</p>\n            <p id=\"added-message\">Unit Added!</p>\n          </div>\n        </section>\n      "]);

    _templateObject2_afebc5c034ff11e98da2ddcf125ddb9c = function _templateObject2_afebc5c034ff11e98da2ddcf125ddb9c() {
      return data;
    };

    return data;
  }

  function _templateObject_afebc5c034ff11e98da2ddcf125ddb9c() {
    var data = babelHelpers.taggedTemplateLiteral(["\n      ", "\n    "]);

    _templateObject_afebc5c034ff11e98da2ddcf125ddb9c = function _templateObject_afebc5c034ff11e98da2ddcf125ddb9c() {
      return data;
    };

    return data;
  }

  var BattleView =
  /*#__PURE__*/
  function (_connect) {
    babelHelpers.inherits(BattleView, _connect);

    function BattleView() {
      babelHelpers.classCallCheck(this, BattleView);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(BattleView).apply(this, arguments));
    }

    babelHelpers.createClass(BattleView, [{
      key: "render",
      value: function render() {
        var _this = this;

        return (0, _battleSim.html)(_templateObject_afebc5c034ff11e98da2ddcf125ddb9c(), this._hasActiveBattle ? (0, _battleSim.html)(_templateObject2_afebc5c034ff11e98da2ddcf125ddb9c(), (0, _battleSim.repeat)(this.armies, function (_ref) {
          var name = _ref.name,
              units = _ref.units;
          return (0, _battleSim.html)(_templateObject3_afebc5c034ff11e98da2ddcf125ddb9c(), name, (0, _battleSim.repeat)(units, function (_ref2) {
            var index = _ref2.index,
                unit = _ref2.unit;
            return (0, _battleSim.html)(_templateObject4_afebc5c034ff11e98da2ddcf125ddb9c(), index, unit.name, _this._remove, unit.detailedStatus, unit.desc);
          }));
        }), this._armyChanged, this._army0Name, this._army1Name, (0, _battleSim.repeat)(this._unitTemplates, function (_ref3) {
          var id = _ref3.id,
              unit = _ref3.unit;
          return (0, _battleSim.html)(_templateObject5_afebc5c034ff11e98da2ddcf125ddb9c(), id, unit.name);
        }), this._add) : (0, _battleSim.html)(_templateObject6_afebc5c034ff11e98da2ddcf125ddb9c()));
      }
    }, {
      key: "_armyChanged",
      value: function _armyChanged() {
        var _this2 = this;

        this._unitTemplates = this._allUnitTemplates.filter(function (_ref4) {
          var unit = _ref4.unit;
          return unit.army === _this2.army;
        });
      }
    }, {
      key: "_remove",
      value: function _remove(e) {
        var unit = e.target.closest('.unit');
        var name = unit.querySelector('.unit-name').innerText;

        if (confirm("Are you sure you want to delete \"".concat(name, "\"?"))) {
          _battleSim.store.dispatch((0, _battleSim.remove)(unit.dataset.index));
        }
      }
    }, {
      key: "_add",
      value: function _add() {
        var _this3 = this;

        if (this.statsValid) {
          _battleSim.store.dispatch((0, _battleSim.add)(this.unitTemplate, this.name));

          this.shadowRoot.getElementById('army').value = '0';
          this.shadowRoot.getElementById('name').value = '';
          var addedMessage = this.shadowRoot.getElementById('added-message');
          addedMessage.style.opacity = '1';
          addedMessage.style.display = 'block';
          setTimeout(function () {
            addedMessage.style.opacity = '0';
            addedMessage.style.display = 'none';
          }, 3000);
        } else {
          this.shadowRoot.querySelector('.error').classList.remove('hidden');
          setTimeout(function () {
            _this3.shadowRoot.querySelector('.error').classList.add('hidden');
          }, 3000);
        }
      }
    }, {
      key: "stateChanged",
      value: function stateChanged(state) {
        var _this4 = this;

        if (state.battle.battles.length > state.battle.activeBattle) {
          var activeBattle = state.battle.battles[state.battle.activeBattle];
          var units = activeBattle.units.map(function (unit, index) {
            return {
              index: index,
              unit: new _battleSim.$unitDefault(unit, index)
            };
          });
          this._army0Units = units.filter(function (_ref5) {
            var unit = _ref5.unit;
            return unit.armyIndex === 0;
          });
          this._army1Units = units.filter(function (_ref6) {
            var unit = _ref6.unit;
            return unit.armyIndex === 1;
          });
          this._army0Name = activeBattle.armies[0].name;
          this._army1Name = activeBattle.armies[1].name;
          this._allUnitTemplates = activeBattle.unitTemplates.map(function (unit, index) {
            return {
              id: index,
              unit: unit
            };
          });
          this._unitTemplates = this._allUnitTemplates.filter(function (_ref7) {
            var unit = _ref7.unit;
            return unit.army === _this4.army;
          });
          this._hasActiveBattle = true;
        } else {
          this._hasActiveBattle = false;
        }
      }
    }, {
      key: "armies",
      get: function get() {
        return [{
          name: this._army0Name,
          units: this._army0Units
        }, {
          name: this._army1Name,
          units: this._army1Units
        }];
      }
    }, {
      key: "armyElement",
      get: function get() {
        return this.shadowRoot.getElementById('army');
      }
    }, {
      key: "army",
      get: function get() {
        if (this.armyElement) {
          return parseInt(this.armyElement.value);
        } else {
          return 0;
        }
      }
    }, {
      key: "unitTemplateElement",
      get: function get() {
        return this.shadowRoot.getElementById('unit-template');
      }
    }, {
      key: "unitTemplate",
      get: function get() {
        return parseInt(this.unitTemplateElement.value);
      }
    }, {
      key: "name",
      get: function get() {
        return this.shadowRoot.getElementById('name').value;
      }
    }, {
      key: "statsValid",
      get: function get() {
        return !isNaN(this.unitTemplate);
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          _army0Units: {
            type: Object
          },
          _army1Units: {
            type: Object
          },
          _allUnitTemplates: {
            type: Object
          },
          _unitTemplates: {
            type: Object
          },
          _hasActiveBattle: {
            type: Boolean
          }
        };
      }
    }, {
      key: "styles",
      get: function get() {
        return [_battleSim.SharedStyles, _battleSim.ButtonSharedStyles, (0, _battleSim.css)(_templateObject7_afebc5c034ff11e98da2ddcf125ddb9c())];
      }
    }]);
    return BattleView;
  }((0, _battleSim.connect)(_battleSim.store)(_battleSim.PageViewElement));

  window.customElements.define('battle-view', BattleView);
});