/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/webrtc/getusermedia.js **/
import Modernizr from '../../src/Modernizr.js';
Modernizr.addTest('getUserMedia', 'mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices);
export default Modernizr.getUserMedia;
