/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/customevent.js **/
import Modernizr from "../src/Modernizr.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('customevent', _isBrowser && 'CustomEvent' in window && typeof window.CustomEvent === 'function');
export default Modernizr.customevent;
