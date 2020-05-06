/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/crypto.js **/
import Modernizr from "../src/Modernizr.js";
import prefixed from "../src/prefixed.js";

var _isBrowser = typeof window !== "undefined";

var crypto = _isBrowser && prefixed('crypto', window);

Modernizr.addTest('crypto', _isBrowser && !!prefixed('subtle', crypto));
export default Modernizr.crypto;
