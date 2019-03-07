/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/forcetouch.js **/
import Modernizr from '../src/Modernizr.js';
import hasEvent from '../src/hasEvent.js';
import prefixed from '../src/prefixed.js';
Modernizr.addTest('forcetouch', function () {
  if (!hasEvent(prefixed('mouseforcewillbegin', window, false), window)) {
    return false;
  }

  return MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN && MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN;
});
export default Modernizr.forcetouch;
