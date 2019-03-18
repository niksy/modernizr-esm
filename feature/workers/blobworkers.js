/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/workers/blobworkers.js **/
import Modernizr, { addTest, createAsyncTestListener } from "../src/Modernizr.js";
Modernizr.addAsyncTest(function () {
  try {
    var BlobBuilder = window.BlobBuilder;
    var URL = window.URL;

    if (true) {
      BlobBuilder = BlobBuilder || window.MozBlobBuilder || window.WebKitBlobBuilder || window.MSBlobBuilder || window.OBlobBuilder;
      URL = URL || window.MozURL || window.webkitURL || window.MSURL || window.OURL;
    }

    var data = 'Modernizr',
        blob,
        bb,
        worker,
        url,
        timeout,
        scriptText = 'this.onmessage=function(e){postMessage(e.data)}';

    try {
      blob = new Blob([scriptText], {
        type: 'text/javascript'
      });
    } catch (e) {}

    if (!blob) {
      bb = new BlobBuilder();
      bb.append(scriptText);
      blob = bb.getBlob();
    }

    url = URL.createObjectURL(blob);
    worker = new Worker(url);

    worker.onmessage = function (e) {
      addTest('blobworkers', data === e.data);
      cleanup();
    };

    worker.onerror = fail;
    timeout = setTimeout(fail, 200);
    worker.postMessage(data);
  } catch (e) {
    fail();
  }

  function fail() {
    addTest('blobworkers', false);
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
export default createAsyncTestListener("blobworkers");
