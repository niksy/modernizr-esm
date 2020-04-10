/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.10.0/feature-detects/performance.js **/
import Modernizr from "../src/Modernizr.js";
import prefixed from "../src/prefixed.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('performance', _isBrowser && !!prefixed('performance', window));
export default Modernizr.performance;
