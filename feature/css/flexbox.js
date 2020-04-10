/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.10.0/feature-detects/css/flexbox.js **/
import Modernizr from "../../src/Modernizr.js";
import testAllProps from "../../src/testAllProps.js";
Modernizr.addTest('flexbox', testAllProps('flexBasis', '1px', true));
export default Modernizr.flexbox;
