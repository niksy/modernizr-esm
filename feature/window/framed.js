/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/window/framed.js **/
import Modernizr from '../../src/Modernizr.js';
Modernizr.addTest('framed', window.location != top.location);
export default Modernizr.framed;
