/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/css/scrollsnappoints.js **/
import Modernizr from '../../src/Modernizr.js';
import testAllProps from '../../src/testAllProps.js';
Modernizr.addTest('scrollsnappoints', testAllProps('scrollSnapType'));
export default Modernizr.scrollsnappoints;
