/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/dart.js **/
import Modernizr from "../src/Modernizr.js";
import prefixed from "../src/prefixed.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('dart', _isBrowser && !!prefixed('startDart', navigator));
export default Modernizr.dart;
