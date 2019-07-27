/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/css/ellipsis.js **/
import Modernizr from "../../src/Modernizr.js";
import testAllProps from "../../src/testAllProps.js";
Modernizr.addTest('ellipsis', testAllProps('textOverflow', 'ellipsis'));
export default Modernizr.ellipsis;
