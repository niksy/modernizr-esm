/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/gamepad.js **/
import Modernizr from "../src/Modernizr.js";
import prefixed from "../src/prefixed.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('gamepads', _isBrowser && !!prefixed('getGamepads', navigator));
export default Modernizr.gamepads;
