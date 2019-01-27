/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/svg/asimg.js **/
import Modernizr, { addTest, createAsyncTestListener } from "../../src/Modernizr.js";
Modernizr.addTest('svgasimg', document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Image', '1.1'));
export default Modernizr.svgasimg;
