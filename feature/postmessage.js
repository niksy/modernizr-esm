/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/postmessage.js **/
import Modernizr from '../src/Modernizr.js';

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('postmessage', _isBrowser && 'postMessage' in window);
export default Modernizr.postmessage;
