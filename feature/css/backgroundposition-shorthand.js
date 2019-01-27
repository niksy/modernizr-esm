/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/css/backgroundposition-shorthand.js **/
import Modernizr from '../../src/Modernizr.js';
import createElement from '../../src/createElement.js';
Modernizr.addTest('bgpositionshorthand', function () {
  var elem = createElement('a');
  var eStyle = elem.style;
  var val = 'right 10px bottom 10px';
  eStyle.cssText = 'background-position: ' + val + ';';
  return eStyle.backgroundPosition === val;
});
export default Modernizr.bgpositionshorthand;
