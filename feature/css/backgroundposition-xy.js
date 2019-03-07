/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/css/backgroundposition-xy.js **/
import Modernizr from '../../src/Modernizr.js';
import testAllProps from '../../src/testAllProps.js';
Modernizr.addTest('bgpositionxy', function () {
  return testAllProps('backgroundPositionX', '3px', true) && testAllProps('backgroundPositionY', '5px', true);
});
export default Modernizr.bgpositionxy;
