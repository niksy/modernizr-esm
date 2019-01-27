/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/css/pseudotransitions.js **/
import Modernizr from '../../src/Modernizr.js';
import '../../src/testStyles.js';
import './transitions.js';
Modernizr.addTest('csspseudotransitions', function () {
  var result = false;

  if (!Modernizr.csstransitions || !window.getComputedStyle) {
    return result;
  }

  var styles = '#modernizr:before { content:" "; font-size:5px;' + Modernizr._prefixes.join('transition:0s 100s;') + '}' + '#modernizr.trigger:before { font-size:10px; }';
  Modernizr.testStyles(styles, function (elem) {
    window.getComputedStyle(elem, ':before').getPropertyValue('font-size');
    elem.className += 'trigger';
    result = window.getComputedStyle(elem, ':before').getPropertyValue('font-size') === '5px';
  });
  return result;
});
export default Modernizr.csspseudotransitions;
