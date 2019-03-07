/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/storage/sessionstorage.js **/
import Modernizr from '../src/Modernizr.js';
Modernizr.addTest('sessionstorage', function () {
  var mod = 'modernizr';

  try {
    sessionStorage.setItem(mod, mod);
    sessionStorage.removeItem(mod);
    return true;
  } catch (e) {
    return false;
  }
});
export default Modernizr.sessionstorage;
