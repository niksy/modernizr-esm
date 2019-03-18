/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/unicode.js **/
import Modernizr from '../src/Modernizr.js';
import createElement from '../src/createElement.js';
import testStyles from '../src/testStyles.js';
import isSVG from '../src/isSVG.js';
Modernizr.addTest('unicode', function () {
  var bool;
  var missingGlyph = createElement('span');
  var star = createElement('span');
  testStyles('#modernizr{font-family:Arial,sans;font-size:300em;}', function (node) {
    missingGlyph.innerHTML = isSVG ? '妇' : '&#5987;';
    star.innerHTML = isSVG ? '\u2606' : '&#9734;';
    node.appendChild(missingGlyph);
    node.appendChild(star);
    bool = 'offsetWidth' in missingGlyph && missingGlyph.offsetWidth !== star.offsetWidth;
  });
  return bool;
});
export default Modernizr.unicode;
