/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/ie8compat.js **/
import Modernizr from '../src/Modernizr.js';

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('ie8compat', _isBrowser && !window.addEventListener && !!document.documentMode && document.documentMode === 7);
export default Modernizr.ie8compat;
