/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/webrtc/datachannel.js **/
import Modernizr from "../../src/Modernizr.js";
import "../../src/prefixed.js";
import domPrefixes from "../../src/domPrefixes.js";
import "./peerconnection.js";
Modernizr.addTest('datachannel', function () {
  if (!Modernizr.peerconnection) {
    return false;
  }

  for (var i = 0, l = domPrefixes.length; i < l; i++) {
    var PeerConnectionConstructor = window[domPrefixes[i] + 'RTCPeerConnection'];

    if (PeerConnectionConstructor) {
      var peerConnection = new PeerConnectionConstructor(null);
      return 'createDataChannel' in peerConnection;
    }
  }

  return false;
});
export default Modernizr.datachannel;
