/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/css/shapes.js **/
import Modernizr from "../../src/Modernizr.js";
import testAllProps from "../../src/testAllProps.js";
Modernizr.addTest('shapes', testAllProps('shapeOutside', 'content-box', true));
export default Modernizr.shapes;
