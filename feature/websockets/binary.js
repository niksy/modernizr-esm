/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/websockets/binary.js **/
import Modernizr from '../../src/Modernizr.js';
Modernizr.addTest('websocketsbinary', function () {
  var protocol = 'https:' === location.protocol ? 'wss' : 'ws',
      protoBin;

  if ('WebSocket' in window) {
    protoBin = 'binaryType' in WebSocket.prototype;

    if (protoBin) {
      return protoBin;
    }

    try {
      return !!new WebSocket(protocol + '://.').binaryType;
    } catch (e) {}
  }

  return false;
});
export default Modernizr.websocketsbinary;
