/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/pointerlock-api.js **/
import Modernizr from '../src/Modernizr.js';
import prefixed from '../src/prefixed.js';

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('pointerlock', _isBrowser && !!prefixed('exitPointerLock', document));
export default Modernizr.pointerlock;
