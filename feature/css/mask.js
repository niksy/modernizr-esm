/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/css/mask.js **/
import Modernizr from "../../src/Modernizr.js";
import testAllProps from "../../src/testAllProps.js";
Modernizr.addTest('cssmask', testAllProps('maskRepeat', 'repeat-x', true));
export default Modernizr.cssmask;
