/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/websockets.js **/
import Modernizr from '../src/Modernizr.js';
var supports = false;

try {
  supports = 'WebSocket' in window && window.WebSocket.CLOSING === 2;
} catch (e) {}

Modernizr.addTest('websockets', supports);
export default Modernizr.websockets;
