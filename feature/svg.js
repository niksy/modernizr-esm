/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.10.0/feature-detects/svg.js **/
import Modernizr from "../src/Modernizr.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('svg', _isBrowser && !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect);
export default Modernizr.svg;
