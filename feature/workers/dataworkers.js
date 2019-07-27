/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/workers/dataworkers.js **/
import Modernizr, { addTest, createAsyncTestListener } from "../../src/Modernizr.js";
Modernizr.addAsyncTest(function () {
  try {
    var data = 'Modernizr',
        worker = new Worker('data:text/javascript;base64,dGhpcy5vbm1lc3NhZ2U9ZnVuY3Rpb24oZSl7cG9zdE1lc3NhZ2UoZS5kYXRhKX0=');

    worker.onmessage = function (e) {
      worker.terminate();
      addTest('dataworkers', data === e.data);
      worker = null;
    };

    worker.onerror = function () {
      addTest('dataworkers', false);
      worker = null;
    };

    setTimeout(function () {
      addTest('dataworkers', false);
    }, 200);
    worker.postMessage(data);
  } catch (e) {
    setTimeout(function () {
      addTest('dataworkers', false);
    }, 0);
  }
});
export default createAsyncTestListener("dataworkers");
