/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/cors.js **/
import Modernizr from "../src/Modernizr.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('cors', _isBrowser && 'XMLHttpRequest' in window && 'withCredentials' in new XMLHttpRequest());
export default Modernizr.cors;
