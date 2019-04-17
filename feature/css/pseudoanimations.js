/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/css/pseudoanimations.js **/
import Modernizr from '../src/Modernizr.js';
import testStyles from '../src/testStyles.js';
import prefixes from '../src/prefixes.js';
import './animations.js';
Modernizr.addTest('csspseudoanimations', function () {
  var result = false;

  if (!Modernizr.cssanimations || !window.getComputedStyle) {
    return result;
  }

  var styles = ['@', prefixes.join('keyframes csspseudoanimations { from { font-size: 10px; } }@').replace(/\@$/, ''), '#modernizr:before { content:" "; font-size:5px;', prefixes.join('animation:csspseudoanimations 1ms infinite;'), '}'].join('');
  testStyles(styles, function (elem) {
    result = window.getComputedStyle(elem, ':before').getPropertyValue('font-size') === '10px';
  });
  return result;
});
export default Modernizr.csspseudoanimations;
