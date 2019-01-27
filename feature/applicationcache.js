/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/applicationcache.js **/
import Modernizr from '../src/Modernizr.js';
Modernizr.addTest('applicationcache', 'applicationCache' in window);
export default Modernizr.applicationcache;
