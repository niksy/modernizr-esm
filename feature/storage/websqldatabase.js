/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/storage/websqldatabase.js **/
import Modernizr from '../../src/Modernizr.js';
Modernizr.addTest('websqldatabase', 'openDatabase' in window);
export default Modernizr.websqldatabase;
