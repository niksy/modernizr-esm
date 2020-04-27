/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/eventlistener.js **/
import Modernizr from "../src/Modernizr.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('eventlistener', _isBrowser && 'addEventListener' in window);
export default Modernizr.eventlistener;
