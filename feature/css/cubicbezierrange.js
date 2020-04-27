/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/css/cubicbezierrange.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
import prefixes from "../../src/prefixes.js";
Modernizr.addTest('cubicbezierrange', function () {
  var el = createElement('a');
  el.style.cssText = prefixes.join('transition-timing-function:cubic-bezier(1,0,0,1.1); ');
  return !!el.style.length;
});
export default Modernizr.cubicbezierrange;
