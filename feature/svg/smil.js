/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/svg/smil.js **/
import Modernizr from '../src/Modernizr.js';
import toStringFn from '../src/toStringFn.js';
Modernizr.addTest('smil', function () {
  return !!document.createElementNS && /SVGAnimate/.test(toStringFn.call(document.createElementNS('http://www.w3.org/2000/svg', 'animate')));
});
export default Modernizr.smil;
