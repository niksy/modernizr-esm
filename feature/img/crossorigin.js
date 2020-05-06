/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/img/crossorigin.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
Modernizr.addTest('imgcrossorigin', 'crossOrigin' in createElement('img'));
export default Modernizr.imgcrossorigin;
