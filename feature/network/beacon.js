/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/network/beacon.js **/
import Modernizr from "../../src/Modernizr.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('beacon', _isBrowser && 'sendBeacon' in navigator);
export default Modernizr.beacon;
