/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/css/backgroundblendmode.js **/
import Modernizr from "../../src/Modernizr.js";
import prefixed from "../../src/prefixed.js";
Modernizr.addTest('backgroundblendmode', prefixed('backgroundBlendMode', 'text'));
export default Modernizr.backgroundblendmode;
