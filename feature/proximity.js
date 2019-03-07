/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/proximity.js **/
import Modernizr, { addTest, createAsyncTestListener } from "../src/Modernizr.js";
Modernizr.addAsyncTest(function () {
  var timeout;
  var timeoutTime = 300;

  function advertiseSupport() {
    clearTimeout(timeout);
    window.removeEventListener('deviceproximity', advertiseSupport);
    addTest('proximity', true);
  }

  if ('ondeviceproximity' in window && 'onuserproximity' in window) {
    window.addEventListener('deviceproximity', advertiseSupport);
    timeout = setTimeout(function () {
      window.removeEventListener('deviceproximity', advertiseSupport);
      addTest('proximity', false);
    }, timeoutTime);
  } else {
    addTest('proximity', false);
  }
});
export default createAsyncTestListener("proximity");
