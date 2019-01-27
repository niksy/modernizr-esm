/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/postmessage.js **/
import Modernizr from '../src/Modernizr.js';
Modernizr.addTest('postmessage', 'postMessage' in window);
export default Modernizr.postmessage;
