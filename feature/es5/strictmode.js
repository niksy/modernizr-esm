/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/es5/strictmode.js **/
import Modernizr from '../../src/Modernizr.js';
Modernizr.addTest('strictmode', function () {
  return !this;
}());
export default Modernizr.strictmode;
