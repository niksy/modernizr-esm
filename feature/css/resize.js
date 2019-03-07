/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/css/resize.js **/
import Modernizr from '../../src/Modernizr.js';
import testAllProps from '../../src/testAllProps.js';
Modernizr.addTest('cssresize', testAllProps('resize', 'both', true));
export default Modernizr.cssresize;
