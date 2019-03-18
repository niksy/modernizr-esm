/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/css/animations.js **/
import Modernizr from '../src/Modernizr.js';
import testAllProps from '../src/testAllProps.js';
Modernizr.addTest('cssanimations', testAllProps('animationName', 'a', true));
export default Modernizr.cssanimations;
