/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.10.0/feature-detects/es5/undefined.js **/
import Modernizr from "../../src/Modernizr.js";
Modernizr.addTest('es5undefined', function () {
  var result, originalUndefined;

  try {
    originalUndefined = window.undefined;
    window.undefined = 12345;
    result = typeof window.undefined === 'undefined';
    window.undefined = originalUndefined;
  } catch (e) {
    return false;
  }

  return result;
});
export default Modernizr.es5undefined;
