/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/queryselector.js **/
import Modernizr from "../src/Modernizr.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('queryselector', _isBrowser && 'querySelector' in document && 'querySelectorAll' in document);
export default Modernizr.queryselector;
