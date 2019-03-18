/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/css/boxshadow.js **/
import Modernizr from '../src/Modernizr.js';
import testAllProps from '../src/testAllProps.js';
Modernizr.addTest('boxshadow', testAllProps('boxShadow', '1px 1px', true));
export default Modernizr.boxshadow;
