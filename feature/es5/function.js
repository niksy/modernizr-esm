/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/es5/function.js **/
import Modernizr from '../../src/Modernizr.js';
Modernizr.addTest('es5function', function () {
  return !!(Function.prototype && Function.prototype.bind);
});
export default Modernizr.es5function;
