/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/url/urlsearchparams.js **/
import Modernizr from '../../src/Modernizr.js';
Modernizr.addTest('urlsearchparams', 'URLSearchParams' in window);
export default Modernizr.urlsearchparams;
