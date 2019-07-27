/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/es5/specification.js **/
import Modernizr from "../../src/Modernizr.js";
import "./array.js";
import "./date.js";
import "./function.js";
import "./object.js";
import "./strictmode.js";
import "./string.js";
import "../json.js";
import "./syntax.js";
import "./undefined.js";
Modernizr.addTest('es5', function () {
  return !!(Modernizr.es5array && Modernizr.es5date && Modernizr.es5function && Modernizr.es5object && Modernizr.strictmode && Modernizr.es5string && Modernizr.json && Modernizr.es5syntax && Modernizr.es5undefined);
});
export default Modernizr.es5;
