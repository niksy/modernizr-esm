/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/customevent.js **/
import Modernizr from '../src/Modernizr.js';
Modernizr.addTest('customevent', 'CustomEvent' in window && typeof window.CustomEvent === 'function');
export default Modernizr.customevent;
