/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.10.0/feature-detects/dom/hidden.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
Modernizr.addTest('hidden', 'hidden' in createElement('a'));
export default Modernizr.hidden;
