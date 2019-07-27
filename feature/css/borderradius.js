/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/css/borderradius.js **/
import Modernizr from "../../src/Modernizr.js";
import testAllProps from "../../src/testAllProps.js";
Modernizr.addTest('borderradius', testAllProps('borderRadius', '0px', true));
export default Modernizr.borderradius;
