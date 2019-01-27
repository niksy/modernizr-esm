/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/network/xhr2.js **/
import Modernizr from '../../src/Modernizr.js';
Modernizr.addTest('xhr2', 'XMLHttpRequest' in window && 'withCredentials' in new XMLHttpRequest());
export default Modernizr.xhr2;
