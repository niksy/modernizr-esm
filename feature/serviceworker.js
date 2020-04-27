/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/serviceworker.js **/
import Modernizr from "../src/Modernizr.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('serviceworker', _isBrowser && 'serviceWorker' in navigator);
export default Modernizr.serviceworker;
