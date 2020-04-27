/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/typed-arrays.js **/
import Modernizr from "../src/Modernizr.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('typedarrays', _isBrowser && 'ArrayBuffer' in window);
export default Modernizr.typedarrays;
