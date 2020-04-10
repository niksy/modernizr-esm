/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.10.0/feature-detects/webrtc/getusermedia.js **/
import Modernizr from "../../src/Modernizr.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('getUserMedia', _isBrowser && 'mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices);
export default Modernizr.getUserMedia;
