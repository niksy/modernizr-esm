/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/css/transformslevel2.js **/
import Modernizr from '../../src/Modernizr.js';
import testAllProps from '../../src/testAllProps.js';
Modernizr.addTest('csstransformslevel2', function () {
  return testAllProps('translate', '45px', true);
});
export default Modernizr.csstransformslevel2;
