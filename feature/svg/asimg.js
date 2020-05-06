/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/svg/asimg.js **/
import Modernizr, { addTest, createAsyncTestListener } from "../../src/Modernizr.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('svgasimg', _isBrowser && document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Image', '1.1'));
export default Modernizr.svgasimg;
