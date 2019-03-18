/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/history.js **/
import Modernizr from '../src/Modernizr.js';
Modernizr.addTest('history', function () {
  var ua = navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1 && location.protocol !== 'file:') {
    return false;
  }

  return window.history && 'pushState' in window.history;
});
export default Modernizr.history;
