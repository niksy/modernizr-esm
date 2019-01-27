/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/webrtc/peerconnection.js **/
import Modernizr from '../../src/Modernizr.js';
import prefixed from '../../src/prefixed.js';
Modernizr.addTest('peerconnection', !!prefixed('RTCPeerConnection', window));
export default Modernizr.peerconnection;
