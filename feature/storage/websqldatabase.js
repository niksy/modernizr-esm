/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/storage/websqldatabase.js **/
import Modernizr from "../../src/Modernizr.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('websqldatabase', _isBrowser && 'openDatabase' in window);
export default Modernizr.websqldatabase;
