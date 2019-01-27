/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/css/overflow-scrolling.js **/
import Modernizr from '../../src/Modernizr.js';
import testAllProps from '../../src/testAllProps.js';
Modernizr.addTest('overflowscrolling', testAllProps('overflowScrolling', 'touch', true));
export default Modernizr.overflowscrolling;
