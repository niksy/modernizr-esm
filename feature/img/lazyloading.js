/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/img/lazyloading.js **/
import Modernizr from "../../src/Modernizr.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('lazyloading', _isBrowser && 'loading' in HTMLImageElement.prototype);
export default Modernizr.lazyloading;
