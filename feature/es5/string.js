/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/es5/string.js **/
import Modernizr from "../../src/Modernizr.js";
Modernizr.addTest('es5string', function () {
  return !!(String.prototype && String.prototype.trim);
});
export default Modernizr.es5string;
