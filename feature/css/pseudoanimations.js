/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/css/pseudoanimations.js **/
import Modernizr from "../../src/Modernizr.js";
import testStyles from "../../src/testStyles.js";
import prefixes from "../../src/prefixes.js";
import computedStyle from "./animations.js";
import "../../src/computedStyle.js";
Modernizr.addTest('csspseudoanimations', function () {
  var result = false;

  if (!Modernizr.cssanimations) {
    return result;
  }

  var styles = ['@', prefixes.join('keyframes csspseudoanimations { from { font-size: 10px; } }@').replace(/\@$/, ''), '#modernizr:before { content:" "; font-size:5px;', prefixes.join('animation:csspseudoanimations 1ms infinite;'), '}'].join('');
  testStyles(styles, function (elem) {
    result = computedStyle(elem, ':before', 'font-size') === '10px';
  });
  return result;
});
export default Modernizr.csspseudoanimations;
