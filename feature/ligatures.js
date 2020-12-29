/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/ligatures.js **/
import Modernizr from "../src/Modernizr.js";
import testAllProps from "../src/testAllProps.js";
Modernizr.addTest('ligatures', testAllProps('fontFeatureSettings', '"liga" 1'));
export default Modernizr.ligatures;
