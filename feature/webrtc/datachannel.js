/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/webrtc/datachannel.js **/
import Modernizr from "../../src/Modernizr.js";
import "../../src/prefixed.js";
import domPrefixesAll from "../../src/domPrefixesAll.js";
import "./peerconnection.js";
Modernizr.addTest('datachannel', function () {
  if (!Modernizr.peerconnection) {
    return false;
  }

  for (var i = 0, len = domPrefixesAll.length; i < len; i++) {
    var PeerConnectionConstructor = window[domPrefixesAll[i] + 'RTCPeerConnection'];

    if (PeerConnectionConstructor) {
      var peerConnection = new PeerConnectionConstructor(null);
      return 'createDataChannel' in peerConnection;
    }
  }

  return false;
});
export default Modernizr.datachannel;
