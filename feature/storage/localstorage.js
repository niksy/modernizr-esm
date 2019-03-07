/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/storage/localstorage.js **/
import Modernizr from '../../src/Modernizr.js';
Modernizr.addTest('localstorage', function () {
  var mod = 'modernizr';

  try {
    localStorage.setItem(mod, mod);
    localStorage.removeItem(mod);
    return true;
  } catch (e) {
    return false;
  }
});
export default Modernizr.localstorage;
