/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.10.0/feature-detects/workers/transferables.js **/
import Modernizr, { addTest, createAsyncTestListener } from "../../src/Modernizr.js";
import "../blob.js";
import "../url/bloburls.js";
import "./webworkers.js";
import "../typed-arrays.js";
Modernizr.addAsyncTest(function () {
  var prerequisites = !!(Modernizr.blobconstructor && Modernizr.bloburls && Modernizr.webworkers && Modernizr.typedarrays);

  if (!prerequisites) {
    return addTest('transferables', false);
  }

  try {
    var buffer,
        scriptText = 'var hello = "world"',
        blob = new Blob([scriptText], {
      type: 'text/javascript'
    }),
        url = URL.createObjectURL(blob),
        worker = new Worker(url),
        timeout;
    worker.onerror = fail;
    timeout = setTimeout(fail, 200);
    buffer = new ArrayBuffer(1);
    worker.postMessage(buffer, [buffer]);
    addTest('transferables', buffer.byteLength === 0);
    cleanup();
  } catch (e) {
    fail();
  }

  function fail() {
    addTest('transferables', false);
    cleanup();
  }

  function cleanup() {
    if (url) {
      URL.revokeObjectURL(url);
    }

    if (worker) {
      worker.terminate();
    }

    if (timeout) {
      clearTimeout(timeout);
    }
  }
});
export default createAsyncTestListener("transferables");
