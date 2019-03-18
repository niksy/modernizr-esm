/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/postmessage.js **/
import Modernizr from '../src/Modernizr.js';

var _isBrowser = typeof window !== "undefined";

var support = _isBrowser && new Boolean('postMessage' in window);
support.structuredclones = true;

try {
  window.postMessage({
    toString: function () {
      support.structuredclones = false;
    }
  }, '*');
} catch (e) {}

Modernizr.addTest('postmessage', support);
export default Modernizr.postmessage;
