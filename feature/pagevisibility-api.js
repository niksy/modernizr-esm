/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/pagevisibility-api.js **/
import Modernizr from '../src/Modernizr.js';
import prefixed from '../src/prefixed.js';
Modernizr.addTest('pagevisibility', !!prefixed('hidden', document, false));
export default Modernizr.pagevisibility;
