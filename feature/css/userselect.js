/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/css/userselect.js **/
import Modernizr from '../src/Modernizr.js';
import testAllProps from '../src/testAllProps.js';
Modernizr.addTest('userselect', testAllProps('userSelect', 'none', true));
export default Modernizr.userselect;
