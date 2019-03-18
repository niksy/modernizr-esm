/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/applicationcache.js **/
import Modernizr from '../src/Modernizr.js';

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('applicationcache', _isBrowser && 'applicationCache' in window);
export default Modernizr.applicationcache;
