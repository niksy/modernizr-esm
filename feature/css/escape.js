/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/css/escape.js **/
import Modernizr from "../../src/Modernizr.js";

var _isBrowser = typeof window !== "undefined";

var CSS = _isBrowser && window.CSS;
Modernizr.addTest('cssescape', _isBrowser && (CSS ? typeof CSS.escape === 'function' : false));
export default Modernizr.cssescape;
