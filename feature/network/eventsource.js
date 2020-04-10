/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.10.0/feature-detects/network/eventsource.js **/
import Modernizr from "../../src/Modernizr.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('eventsource', _isBrowser && 'EventSource' in window);
export default Modernizr.eventsource;
