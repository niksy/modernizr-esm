/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/css/fontdisplay.js **/
import Modernizr from "../../src/Modernizr.js";
import testProp from "../../src/testProp.js";
Modernizr.addTest('fontDisplay', testProp('font-display'));
export default Modernizr.fontDisplay;
