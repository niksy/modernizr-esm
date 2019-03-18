/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/css/vhunit.js **/
import Modernizr from '../src/Modernizr.js';
import testStyles from '../src/testStyles.js';
import computedStyle from '../src/computedStyle.js';
import roundedEquals from '../src/roundedEquals.js';
testStyles('#modernizr { height: 50vh; }', function (elem) {
  var height = parseInt(window.innerHeight / 2, 10);
  var compStyle = parseInt(computedStyle(elem, null, 'height'), 10);
  Modernizr.addTest('cssvhunit', roundedEquals(compStyle, height));
});
export default Modernizr.cssvhunit;
