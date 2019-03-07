/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/url/urlsearchparams.js **/
import Modernizr from '../../src/Modernizr.js';

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('urlsearchparams', _isBrowser && 'URLSearchParams' in window);
export default Modernizr.urlsearchparams;
