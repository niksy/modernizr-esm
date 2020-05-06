/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/network/xhr2.js **/
import Modernizr from "../../src/Modernizr.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('xhr2', _isBrowser && 'XMLHttpRequest' in window && 'withCredentials' in new XMLHttpRequest());
export default Modernizr.xhr2;
