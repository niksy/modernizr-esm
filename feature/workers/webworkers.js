/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/workers/webworkers.js **/
import Modernizr from "../../src/Modernizr.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('webworkers', _isBrowser && 'Worker' in window);
export default Modernizr.webworkers;
