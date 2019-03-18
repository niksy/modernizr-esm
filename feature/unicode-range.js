/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/unicode-range.js **/
import Modernizr from '../src/Modernizr.js';
import testStyles from '../src/testStyles.js';
import createElement from '../src/createElement.js';
Modernizr.addTest('unicoderange', function () {
  return testStyles('@font-face{font-family:"unicodeRange";src:local("Arial");unicode-range:U+0020,U+002E}#modernizr span{font-size:20px;display:inline-block;font-family:"unicodeRange",monospace}#modernizr .mono{font-family:monospace}', function (elem) {
    var testGlyphs = ['.', '.', 'm', 'm'];

    for (var i = 0; i < testGlyphs.length; i++) {
      var elm = createElement('span');
      elm.innerHTML = testGlyphs[i];
      elm.className = i % 2 ? 'mono' : '';
      elem.appendChild(elm);
      testGlyphs[i] = elm.clientWidth;
    }

    return testGlyphs[0] !== testGlyphs[1] && testGlyphs[2] === testGlyphs[3];
  });
});
export default Modernizr.unicoderange;
