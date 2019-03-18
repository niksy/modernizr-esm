/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/webrtc/peerconnection.js **/
import Modernizr from '../src/Modernizr.js';
import prefixed from '../src/prefixed.js';

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('peerconnection', _isBrowser && !!prefixed('RTCPeerConnection', window));
export default Modernizr.peerconnection;
