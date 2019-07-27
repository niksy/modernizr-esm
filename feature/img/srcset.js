/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/img/srcset.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
Modernizr.addTest('srcset', 'srcset' in createElement('img'));
export default Modernizr.srcset;
