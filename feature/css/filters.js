/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/css/filters.js **/
import Modernizr from '../../src/Modernizr.js';
import createElement from '../../src/createElement.js';
import prefixes from '../../src/prefixes.js';
import testAllProps from '../../src/testAllProps.js';
import './supports.js';
Modernizr.addTest('cssfilters', function () {
  if (Modernizr.supports) {
    return testAllProps('filter', 'blur(2px)');
  } else {
    var el = createElement('a');
    el.style.cssText = prefixes.join('filter:blur(2px); ');
    return !!el.style.length && (document.documentMode === undefined || document.documentMode > 9);
  }
});
export default Modernizr.cssfilters;
