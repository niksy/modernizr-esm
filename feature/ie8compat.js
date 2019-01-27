/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/ie8compat.js **/
import Modernizr from '../src/Modernizr.js';
Modernizr.addTest('ie8compat', !window.addEventListener && !!document.documentMode && document.documentMode === 7);
export default Modernizr.ie8compat;
