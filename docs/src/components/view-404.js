define(["./battle-sim.js"], function (_battleSim) {
  "use strict";

  function _templateObject_b010b2e034ff11e98da2ddcf125ddb9c() {
    var data = babelHelpers.taggedTemplateLiteral(["\n      <section>\n        <h2>Oops! You hit a 404</h2>\n        <p>\n          The page you're looking for doesn't seem to exist. Head back\n          <a href=\"/\">home</a> and try again?\n        </p>\n      </section>\n    "]);

    _templateObject_b010b2e034ff11e98da2ddcf125ddb9c = function _templateObject_b010b2e034ff11e98da2ddcf125ddb9c() {
      return data;
    };

    return data;
  }

  var View404 =
  /*#__PURE__*/
  function (_PageViewElement) {
    babelHelpers.inherits(View404, _PageViewElement);

    function View404() {
      babelHelpers.classCallCheck(this, View404);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(View404).apply(this, arguments));
    }

    babelHelpers.createClass(View404, [{
      key: "render",
      value: function render() {
        return (0, _battleSim.html)(_templateObject_b010b2e034ff11e98da2ddcf125ddb9c());
      }
    }], [{
      key: "styles",
      get: function get() {
        return [_battleSim.SharedStyles];
      }
    }]);
    return View404;
  }(_battleSim.PageViewElement);

  window.customElements.define('view-404', View404);
});