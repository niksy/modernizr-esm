/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/es6/generators.js **/
import Modernizr from '../../src/Modernizr.js';
Modernizr.addTest('generators', function () {
  try {
    new Function('function* test() {}')();
  } catch (e) {
    return false;
  }

  return true;
});
export default Modernizr.generators;
