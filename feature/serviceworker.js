/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/serviceworker.js **/
import Modernizr from '../src/Modernizr.js';
Modernizr.addTest('serviceworker', 'serviceWorker' in navigator);
export default Modernizr.serviceworker;
