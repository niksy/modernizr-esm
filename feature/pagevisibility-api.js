/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/pagevisibility-api.js **/
import Modernizr from '../src/Modernizr.js';
import prefixed from '../src/prefixed.js';

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('pagevisibility', _isBrowser && !!prefixed('hidden', document, false));
export default Modernizr.pagevisibility;
