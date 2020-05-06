/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/css/supports.js **/
import Modernizr from "../../src/Modernizr.js";

var _isBrowser = typeof window !== "undefined";

var newSyntax = _isBrowser && 'CSS' in window && 'supports' in window.CSS;
var oldSyntax = _isBrowser && 'supportsCSS' in window;
Modernizr.addTest('supports', newSyntax || oldSyntax);
export default Modernizr.supports;
