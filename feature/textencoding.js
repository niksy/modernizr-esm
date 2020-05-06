/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/textencoding.js **/
import Modernizr from "../src/Modernizr.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('textencoder', _isBrowser && !!(window.TextEncoder && window.TextEncoder.prototype.encode));
Modernizr.addTest('textdecoder', _isBrowser && !!(window.TextDecoder && window.TextDecoder.prototype.decode));
export var textencoder = Modernizr.textencoder;
export var textdecoder = Modernizr.textdecoder;
