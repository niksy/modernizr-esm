/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/css/calc.js **/
import Modernizr from '../src/Modernizr.js';
import createElement from '../src/createElement.js';
import prefixes from '../src/prefixes.js';
Modernizr.addTest('csscalc', function () {
  var prop = 'width:';
  var value = 'calc(10px);';
  var el = createElement('a');
  el.style.cssText = prop + prefixes.join(value + prop);
  return !!el.style.length;
});
export default Modernizr.csscalc;
