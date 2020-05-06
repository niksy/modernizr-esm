/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/postmessage.js **/
import Modernizr from "../src/Modernizr.js";

var _isBrowser = typeof window !== "undefined";

var bool = true;

try {
  window.postMessage({
    toString: function () {
      bool = false;
    }
  }, '*');
} catch (e) {}

Modernizr.addTest('postmessage', _isBrowser && new Boolean('postMessage' in window));
Modernizr.addTest('postmessage.structuredclones', bool);
export var postmessage = Modernizr.postmessage;
export var postmessageStructuredclones = Modernizr.postmessage.structuredclones;
