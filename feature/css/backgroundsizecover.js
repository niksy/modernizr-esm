/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.10.0/feature-detects/css/backgroundsizecover.js **/
import Modernizr from "../../src/Modernizr.js";
import testAllProps from "../../src/testAllProps.js";
Modernizr.addTest('bgsizecover', testAllProps('backgroundSize', 'cover'));
export default Modernizr.bgsizecover;
