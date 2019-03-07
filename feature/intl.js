/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/intl.js **/
import Modernizr from '../src/Modernizr.js';
import prefixed from '../src/prefixed.js';

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('intl', _isBrowser && !!prefixed('Intl', window));
export default Modernizr.intl;
