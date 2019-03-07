/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/css/focuswithin.js **/
import Modernizr from '../../src/Modernizr.js';
Modernizr.addTest('focuswithin', function () {
  try {
    document.querySelector(':focus-within');
  } catch (error) {
    return false;
  }

  return true;
});
export default Modernizr.focuswithin;
