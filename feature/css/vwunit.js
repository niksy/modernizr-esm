/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/css/vwunit.js **/
import Modernizr from '../../src/Modernizr.js';
import testStyles from '../../src/testStyles.js';
import computedStyle from '../../src/computedStyle.js';
import roundedEquals from '../../src/roundedEquals.js';
testStyles('#modernizr { width: 50vw; }', function (elem) {
  var width = parseInt(window.innerWidth / 2, 10);
  var compStyle = parseInt(computedStyle(elem, null, 'width'), 10);
  Modernizr.addTest('cssvwunit', roundedEquals(compStyle, width));
});
export default Modernizr.cssvwunit;
