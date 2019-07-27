/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/vibration.js **/
import Modernizr from "../src/Modernizr.js";
import prefixed from "../src/prefixed.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('vibrate', _isBrowser && !!prefixed('vibrate', navigator));
export default Modernizr.vibrate;
