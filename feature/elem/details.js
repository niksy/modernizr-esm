/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/elem/details.js **/
import Modernizr from '../../src/Modernizr.js';
import createElement from '../../src/createElement.js';
import '../../src/docElement.js';
import testStyles from '../../src/testStyles.js';
Modernizr.addTest('details', function () {
  var el = createElement('details');
  var diff;

  if (!('open' in el)) {
    return false;
  }

  testStyles('#modernizr details{display:block}', function (node) {
    node.appendChild(el);
    el.innerHTML = '<summary>a</summary>b';
    diff = el.offsetHeight;
    el.open = true;
    diff = diff !== el.offsetHeight;
  });
  return diff;
});
export default Modernizr.details;
