/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/css/flexwrap.js **/
import Modernizr from '../src/Modernizr.js';
import testAllProps from '../src/testAllProps.js';
Modernizr.addTest('flexwrap', testAllProps('flexWrap', 'wrap', true));
export default Modernizr.flexwrap;
