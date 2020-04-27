/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/css/backdropfilter.js **/
import Modernizr from "../../src/Modernizr.js";
import testAllProps from "../../src/testAllProps.js";
Modernizr.addTest('backdropfilter', testAllProps('backdropFilter'));
export default Modernizr.backdropfilter;
