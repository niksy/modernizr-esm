/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/css/reflections.js **/
import Modernizr from "../../src/Modernizr.js";
import testAllProps from "../../src/testAllProps.js";
Modernizr.addTest('cssreflections', testAllProps('boxReflect', 'above', true));
export default Modernizr.cssreflections;
