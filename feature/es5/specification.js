/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/es5/specification.js **/
import Modernizr from '../src/Modernizr.js';
import './es5/array.js';
import './es5/date.js';
import './es5/function.js';
import './es5/object.js';
import './es5/strictmode.js';
import './es5/string.js';
import './json.js';
import './es5/syntax.js';
import './es5/undefined.js';
Modernizr.addTest('es5', function () {
  return !!(Modernizr.es5array && Modernizr.es5date && Modernizr.es5function && Modernizr.es5object && Modernizr.strictmode && Modernizr.es5string && Modernizr.json && Modernizr.es5syntax && Modernizr.es5undefined);
});
export default Modernizr.es5;
