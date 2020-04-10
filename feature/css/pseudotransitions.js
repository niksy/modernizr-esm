/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.10.0/feature-detects/css/pseudotransitions.js **/
import Modernizr from "../../src/Modernizr.js";
import testStyles from "../../src/testStyles.js";
import prefixes from "../../src/prefixes.js";
import "./transitions.js";
Modernizr.addTest('csspseudotransitions', function () {
  var result = false;

  if (!Modernizr.csstransitions || !window.getComputedStyle) {
    return result;
  }

  var styles = '#modernizr:before { content:" "; font-size:5px;' + prefixes.join('transition:0s 100s;') + '}' + '#modernizr.trigger:before { font-size:10px; }';
  testStyles(styles, function (elem) {
    window.getComputedStyle(elem, ':before').getPropertyValue('font-size');
    elem.className += 'trigger';
    result = window.getComputedStyle(elem, ':before').getPropertyValue('font-size') === '5px';
  });
  return result;
});
export default Modernizr.csspseudotransitions;
