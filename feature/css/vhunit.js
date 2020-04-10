/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.10.0/feature-detects/css/vhunit.js **/
import Modernizr from "../../src/Modernizr.js";
import testStyles from "../../src/testStyles.js";
import computedStyle from "../../src/computedStyle.js";
testStyles('#modernizr { height: 50vh; max-height: 10px; }', function (elem) {
  var compStyle = parseInt(computedStyle(elem, null, 'height'), 10);
  Modernizr.addTest('cssvhunit', compStyle === 10);
});
export default Modernizr.cssvhunit;
