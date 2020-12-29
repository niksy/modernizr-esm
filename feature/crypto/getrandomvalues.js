/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/crypto/getrandomvalues.js **/
import Modernizr from "../../src/Modernizr.js";
import prefixed from "../../src/prefixed.js";
import is from "../../src/is.js";

var _isBrowser = typeof window !== "undefined";

var getrandomvalues = _isBrowser && function () {
  var crypto = prefixed('crypto', window);
  var supportsGetRandomValues;

  if (crypto && 'getRandomValues' in crypto && 'Uint32Array' in window) {
    var array = new Uint32Array(10);
    var values = crypto.getRandomValues(array);
    supportsGetRandomValues = values && is(values[0], 'number');
  }

  Modernizr.addTest('getrandomvalues', !!supportsGetRandomValues);
}();

export default Modernizr.getrandomvalues;
