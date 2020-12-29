/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/css/textshadow.js **/
import Modernizr from "../../src/Modernizr.js";
import testProp from "../../src/testProp.js";
Modernizr.addTest('textshadow', testProp('textShadow', '1px 1px'));
export default Modernizr.textshadow;
