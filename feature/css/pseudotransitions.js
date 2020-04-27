/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/css/pseudotransitions.js **/
import Modernizr from "../../src/Modernizr.js";
import testStyles from "../../src/testStyles.js";
import prefixes from "../../src/prefixes.js";
import computedStyle from "./transitions.js";
import "../../src/computedStyle.js";
Modernizr.addTest('csspseudotransitions', function () {
  var result = false;

  if (!Modernizr.csstransitions) {
    return result;
  }

  var styles = '#modernizr:before { content:" "; font-size:5px;' + prefixes.join('transition:0s 100s;') + '}' + '#modernizr.trigger:before { font-size:10px; }';
  testStyles(styles, function (elem) {
    computedStyle(elem, ':before', 'font-size');
    elem.className += 'trigger';
    result = computedStyle(elem, ':before', 'font-size') === '5px';
  });
  return result;
});
export default Modernizr.csspseudotransitions;
