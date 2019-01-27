/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/network/fetch.js **/
import Modernizr from '../../src/Modernizr.js';
Modernizr.addTest('fetch', 'fetch' in window);
export default Modernizr.fetch;
