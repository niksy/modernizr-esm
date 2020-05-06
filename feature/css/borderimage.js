/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/css/borderimage.js **/
import Modernizr from "../../src/Modernizr.js";
import testAllProps from "../../src/testAllProps.js";
Modernizr.addTest('borderimage', testAllProps('borderImage', 'url() 1', true));
export default Modernizr.borderimage;
