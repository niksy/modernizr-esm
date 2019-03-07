/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/css/backgroundsize.js **/
import Modernizr from '../../src/Modernizr.js';
import testAllProps from '../../src/testAllProps.js';
Modernizr.addTest('backgroundsize', testAllProps('backgroundSize', '100%', true));
export default Modernizr.backgroundsize;
