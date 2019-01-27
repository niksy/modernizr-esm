/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/cors.js **/
import Modernizr from '../src/Modernizr.js';
Modernizr.addTest('cors', 'XMLHttpRequest' in window && 'withCredentials' in new XMLHttpRequest());
export default Modernizr.cors;
