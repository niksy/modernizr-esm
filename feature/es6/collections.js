/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/es6/collections.js **/
import Modernizr from '../../src/Modernizr.js';

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('es6collections', _isBrowser && !!(window.Map && window.Set && window.WeakMap && window.WeakSet));
export default Modernizr.es6collections;
