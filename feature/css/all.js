/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/css/all.js **/
import Modernizr from "../../src/Modernizr.js";
import docElement from "../../src/docElement.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('cssall', _isBrowser && 'all' in docElement.style);
export default Modernizr.cssall;
