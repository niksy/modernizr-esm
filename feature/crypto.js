/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/crypto.js **/
import Modernizr from '../src/Modernizr.js';
import prefixed from '../src/prefixed.js';
var crypto = prefixed('crypto', window);
Modernizr.addTest('crypto', !!prefixed('subtle', crypto));
export default Modernizr.crypto;
