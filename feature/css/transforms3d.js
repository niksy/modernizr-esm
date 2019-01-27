/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/css/transforms3d.js **/
import Modernizr from '../../src/Modernizr.js';
import testAllProps from '../../src/testAllProps.js';
import './supports.js';
Modernizr.addTest('csstransforms3d', function () {
  return !!testAllProps('perspective', '1px', true);
});
export default Modernizr.csstransforms3d;
