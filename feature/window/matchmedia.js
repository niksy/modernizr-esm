/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/window/matchmedia.js **/
import Modernizr from "../../src/Modernizr.js";
import prefixed from "../../src/prefixed.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('matchmedia', _isBrowser && !!prefixed('matchMedia', window));
export default Modernizr.matchmedia;
