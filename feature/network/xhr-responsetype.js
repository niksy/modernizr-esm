/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/network/xhr-responsetype.js **/
import Modernizr from '../src/Modernizr.js';
Modernizr.addTest('xhrresponsetype', function () {
  if (typeof XMLHttpRequest === 'undefined') {
    return false;
  }

  var xhr = new XMLHttpRequest();
  xhr.open('get', '/', true);
  return 'response' in xhr;
}());
export default Modernizr.xhrresponsetype;
