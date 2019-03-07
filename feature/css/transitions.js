/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/css/transitions.js **/
import Modernizr from '../../src/Modernizr.js';
import testAllProps from '../../src/testAllProps.js';
Modernizr.addTest('csstransitions', testAllProps('transition', 'all', true));
export default Modernizr.csstransitions;
