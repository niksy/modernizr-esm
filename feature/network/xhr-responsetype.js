/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/network/xhr-responsetype.js **/
import Modernizr from "../../src/Modernizr.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('xhrresponsetype', _isBrowser && function () {
  if (typeof XMLHttpRequest === 'undefined') {
    return false;
  }

  var xhr = new XMLHttpRequest();
  xhr.open('get', '/', true);
  return 'response' in xhr;
}());
export default Modernizr.xhrresponsetype;
