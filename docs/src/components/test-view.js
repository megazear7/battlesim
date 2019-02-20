define(["./battle-sim.js"], function (_battleSim) {
  "use strict";

  function _templateObject_b00fa17034ff11e98da2ddcf125ddb9c() {
    var data = babelHelpers.taggedTemplateLiteral(["\n      <section>\n        <p>Hello, world</p>\n      </section>\n    "]);

    _templateObject_b00fa17034ff11e98da2ddcf125ddb9c = function _templateObject_b00fa17034ff11e98da2ddcf125ddb9c() {
      return data;
    };

    return data;
  }

  var SEPARATION = "4";
  var TERRAIN_MODIFIER = 0;
  var UPHILL = false;
  var DOWNHILL = false;
  var ENAGED_ATTACKERS = 0;
  var ENAGED_DEFENDERS = 0;
  var GENERAL = false;
  var SUBCOMANDER = false;

  var TestView =
  /*#__PURE__*/
  function (_PageViewElement) {
    babelHelpers.inherits(TestView, _PageViewElement);

    function TestView() {
      babelHelpers.classCallCheck(this, TestView);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(TestView).apply(this, arguments));
    }

    babelHelpers.createClass(TestView, [{
      key: "render",
      value: function render() {
        var unionUnit = new _battleSim.$unitDefault(_battleSim.FRESH_UNION_BRIGADE, 0);
        var confUnit = new _battleSim.$unitDefault(_battleSim.FRESH_CONFEDERATE_BRIGADE, 1);
        var actionResult = unionUnit.fire(SEPARATION, TERRAIN_MODIFIER, UPHILL, DOWNHILL, ENAGED_ATTACKERS, ENAGED_DEFENDERS, GENERAL, SUBCOMANDER, confUnit);
        var runs = 1000;
        var casualties = 0;

        for (var i = 0; i < runs; i++) {
          casualties += (0, _battleSim.attack)(1000, 1, 50, 50, 50, 50, 50, 50);
        }

        console.log('Baseline: ', casualties / runs);
        casualties = 0;

        for (var i = 0; i < runs; i++) {
          casualties += (0, _battleSim.attack)(1000, 1, 200, 50, 50, 50, 50, 50);
        }

        console.log('Gun against armor: ', casualties / runs);
        casualties = 0;

        for (var i = 0; i < runs; i++) {
          casualties += (0, _battleSim.attack)(1000, 1, 200, 0, 50, 50, 50, 50);
        }

        console.log('Gun against clothes: ', casualties / runs);
        casualties = 0;

        for (var i = 0; i < runs; i++) {
          casualties += (0, _battleSim.attack)(50, 20, 500, 0, 50, 50, 50, 50);
        }

        console.log('Cannon against clothes: ', casualties / runs);
        casualties = 0;

        for (var i = 0; i < runs; i++) {
          casualties += (0, _battleSim.attack)(50, 20, 500, 50, 50, 50, 50, 50);
        }

        console.log('Cannon against armor: ', casualties / runs);
        return (0, _battleSim.html)(_templateObject_b00fa17034ff11e98da2ddcf125ddb9c());
      }
    }], [{
      key: "properties",
      get: function get() {
        return {};
      }
    }, {
      key: "styles",
      get: function get() {
        return [_battleSim.SharedStyles, _battleSim.ButtonSharedStyles];
      }
    }]);
    return TestView;
  }(_battleSim.PageViewElement);

  window.customElements.define('test-view', TestView);
});