/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/network/fetch.js **/
import Modernizr from "../../src/Modernizr.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('fetch', _isBrowser && 'fetch' in window);
export default Modernizr.fetch;
