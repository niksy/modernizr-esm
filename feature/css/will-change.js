/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/css/will-change.js **/
import Modernizr from "../../src/Modernizr.js";
import docElement from "../../src/docElement.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('willchange', _isBrowser && 'willChange' in docElement.style);
export default Modernizr.willchange;
