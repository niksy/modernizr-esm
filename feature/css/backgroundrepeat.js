/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/css/backgroundrepeat.js **/
import Modernizr from '../src/Modernizr.js';
import testAllProps from '../src/testAllProps.js';
Modernizr.addTest('bgrepeatround', testAllProps('backgroundRepeat', 'round'));
Modernizr.addTest('bgrepeatspace', testAllProps('backgroundRepeat', 'space'));
export var bgrepeatround = Modernizr.bgrepeatround;
export var bgrepeatspace = Modernizr.bgrepeatspace;
