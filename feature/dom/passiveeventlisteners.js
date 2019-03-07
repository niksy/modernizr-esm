/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/dom/passiveeventlisteners.js **/
import Modernizr from '../../src/Modernizr.js';
Modernizr.addTest('passiveeventlisteners', function () {
  var supportsPassiveOption = false;

  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function () {
        supportsPassiveOption = true;
      }
    });

    var noop = function () {};

    window.addEventListener('testPassiveEventSupport', noop, opts);
    window.removeEventListener('testPassiveEventSupport', noop, opts);
  } catch (e) {}

  return supportsPassiveOption;
});
export default Modernizr.passiveeventlisteners;
