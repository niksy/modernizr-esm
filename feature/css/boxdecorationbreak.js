/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/css/boxdecorationbreak.js **/
import Modernizr from '../src/Modernizr.js';
import testAllProps from '../src/testAllProps.js';
Modernizr.addTest('boxdecorationbreak', testAllProps('boxDecorationBreak', 'slice'));
export default Modernizr.boxdecorationbreak;
