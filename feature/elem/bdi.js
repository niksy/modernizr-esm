/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/elem/bdi.js **/
import Modernizr from '../../src/Modernizr.js';
import createElement from '../../src/createElement.js';
import docElement from '../../src/docElement.js';
import computedStyle from '../../src/computedStyle.js';
Modernizr.addTest('bdi', function () {
  var div = createElement('div');
  var bdi = createElement('bdi');
  bdi.innerHTML = '&#1573;';
  div.appendChild(bdi);
  docElement.appendChild(div);
  var supports = computedStyle(bdi, null, 'direction') === 'rtl';
  docElement.removeChild(div);
  return supports;
});
export default Modernizr.bdi;
