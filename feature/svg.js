/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/svg.js **/
import Modernizr from '../src/Modernizr.js';
Modernizr.addTest('svg', !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect);
export default Modernizr.svg;
