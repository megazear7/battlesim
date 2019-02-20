define(["./battle-sim.js"], function (_battleSim) {
  "use strict";

  function _templateObject7_b00cbb4034ff11e98da2ddcf125ddb9c() {
    var data = babelHelpers.taggedTemplateLiteral(["\n        .selectedBattle {\n          color: var(--app-primary-color);\n        }\n      "]);

    _templateObject7_b00cbb4034ff11e98da2ddcf125ddb9c = function _templateObject7_b00cbb4034ff11e98da2ddcf125ddb9c() {
      return data;
    };

    return data;
  }

  function _templateObject6_b00cbb4034ff11e98da2ddcf125ddb9c() {
    var data = babelHelpers.taggedTemplateLiteral(["\n              <option value=\"", "\">", "</option>\n            "]);

    _templateObject6_b00cbb4034ff11e98da2ddcf125ddb9c = function _templateObject6_b00cbb4034ff11e98da2ddcf125ddb9c() {
      return data;
    };

    return data;
  }

  function _templateObject5_b00cbb4034ff11e98da2ddcf125ddb9c() {
    var data = babelHelpers.taggedTemplateLiteral(["\n        <section>\n          <p>No battles exist. You can create one below.</p>\n        </section>\n      "]);

    _templateObject5_b00cbb4034ff11e98da2ddcf125ddb9c = function _templateObject5_b00cbb4034ff11e98da2ddcf125ddb9c() {
      return data;
    };

    return data;
  }

  function _templateObject4_b00cbb4034ff11e98da2ddcf125ddb9c() {
    var data = babelHelpers.taggedTemplateLiteral(["\n              <button @click=\"", "\">Play</button>\n            "]);

    _templateObject4_b00cbb4034ff11e98da2ddcf125ddb9c = function _templateObject4_b00cbb4034ff11e98da2ddcf125ddb9c() {
      return data;
    };

    return data;
  }

  function _templateObject3_b00cbb4034ff11e98da2ddcf125ddb9c() {
    var data = babelHelpers.taggedTemplateLiteral(["\n              <button @click=\"", "\" disabled>Playing</button>\n            "]);

    _templateObject3_b00cbb4034ff11e98da2ddcf125ddb9c = function _templateObject3_b00cbb4034ff11e98da2ddcf125ddb9c() {
      return data;
    };

    return data;
  }

  function _templateObject2_b00cbb4034ff11e98da2ddcf125ddb9c() {
    var data = babelHelpers.taggedTemplateLiteral(["\n        <section>\n          <div class=\"", "\" data-index=\"", "\">\n            <h3 class=\"", "\">", "</h3>\n            <pre>Created ", "</pre>\n            ", "\n            <button @click=\"", "\">Remove</button>\n          </div>\n        </section>\n      "]);

    _templateObject2_b00cbb4034ff11e98da2ddcf125ddb9c = function _templateObject2_b00cbb4034ff11e98da2ddcf125ddb9c() {
      return data;
    };

    return data;
  }

  function _templateObject_b00cbb4034ff11e98da2ddcf125ddb9c() {
    var data = babelHelpers.taggedTemplateLiteral(["\n      ", "\n      ", "\n      <section>\n        <div>\n          <select id=\"battle-template\">\n            ", "\n          </select>\n          <input id=\"name\" type=\"text\" placeholder=\"Optional: Provide a Different Name for the Battle\"></input>\n          <button @click=\"", "\">Create</button>\n        </div>\n      </section>\n    "]);

    _templateObject_b00cbb4034ff11e98da2ddcf125ddb9c = function _templateObject_b00cbb4034ff11e98da2ddcf125ddb9c() {
      return data;
    };

    return data;
  }

  var WarView =
  /*#__PURE__*/
  function (_connect) {
    babelHelpers.inherits(WarView, _connect);

    function WarView() {
      babelHelpers.classCallCheck(this, WarView);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(WarView).apply(this, arguments));
    }

    babelHelpers.createClass(WarView, [{
      key: "render",
      value: function render() {
        var _this = this;

        return (0, _battleSim.html)(_templateObject_b00cbb4034ff11e98da2ddcf125ddb9c(), (0, _battleSim.repeat)(this._battles, function (_ref) {
          var battle = _ref.battle,
              index = _ref.index,
              active = _ref.active,
              createdAt = _ref.createdAt;
          return (0, _battleSim.html)(_templateObject2_b00cbb4034ff11e98da2ddcf125ddb9c(), (0, _battleSim.classMap)({
            battle: true,
            active: active
          }), index, (0, _battleSim.classMap)({
            selectedBattle: active
          }), battle.name, createdAt, active ? (0, _battleSim.html)(_templateObject3_b00cbb4034ff11e98da2ddcf125ddb9c(), _this._playBattle) : (0, _battleSim.html)(_templateObject4_b00cbb4034ff11e98da2ddcf125ddb9c(), _this._playBattle), _this._removeBattle);
        }), this._battles.length === 0 ? (0, _battleSim.html)(_templateObject5_b00cbb4034ff11e98da2ddcf125ddb9c()) : "", (0, _battleSim.repeat)(_battleSim.$battleTemplatesDefault, function (battleTemplate, index) {
          return (0, _battleSim.html)(_templateObject6_b00cbb4034ff11e98da2ddcf125ddb9c(), index, battleTemplate.name);
        }), this._create);
      }
    }, {
      key: "_create",
      value: function _create() {
        _battleSim.store.dispatch((0, _battleSim.createNewBattle)(this.battleStats));

        this.newBattleName = '';
      }
    }, {
      key: "_playBattle",
      value: function _playBattle(e) {
        _battleSim.store.dispatch((0, _battleSim.setActiveBattle)(parseInt(e.target.closest('.battle').dataset.index)));
      }
    }, {
      key: "_removeBattle",
      value: function _removeBattle(e) {
        if (confirm('Are you sure you want to delete the battle?')) {
          _battleSim.store.dispatch((0, _battleSim.removeBattle)(parseInt(e.target.closest('.battle').dataset.index)));
        }
      }
    }, {
      key: "stateChanged",
      value: function stateChanged(state) {
        this._battles = state.battle.battles.map(function (battle, index) {
          var createdAt = new Date(battle.createdAt);
          return {
            battle: battle,
            index: index,
            active: index === state.battle.activeBattle,
            createdAt: createdAt.getMonth() + 1 + '/' + createdAt.getDate() + '/' + createdAt.getFullYear()
          };
        });
      }
    }, {
      key: "newBattleTemplate",
      get: function get() {
        return this.shadowRoot.getElementById('battle-template').value;
      }
    }, {
      key: "newBattleNameElement",
      get: function get() {
        return this.shadowRoot.getElementById('name');
      }
    }, {
      key: "newBattleName",
      get: function get() {
        return this.newBattleNameElement.value;
      },
      set: function set(value) {
        this.newBattleNameElement.value = value;
      }
    }, {
      key: "battleStats",
      get: function get() {
        return {
          name: this.newBattleName,
          templateIndex: this.newBattleTemplate
        };
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          _battles: {
            type: Object
          }
        };
      }
    }, {
      key: "styles",
      get: function get() {
        return [_battleSim.SharedStyles, _battleSim.ButtonSharedStyles, (0, _battleSim.css)(_templateObject7_b00cbb4034ff11e98da2ddcf125ddb9c())];
      }
    }]);
    return WarView;
  }((0, _battleSim.connect)(_battleSim.store)(_battleSim.PageViewElement));

  window.customElements.define('war-view', WarView);
});