/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/svg/clippaths.js **/
import Modernizr from '../src/Modernizr.js';
import toStringFn from '../src/toStringFn.js';
Modernizr.addTest('svgclippaths', function () {
  return !!document.createElementNS && /SVGClipPath/.test(toStringFn.call(document.createElementNS('http://www.w3.org/2000/svg', 'clipPath')));
});
export default Modernizr.svgclippaths;
