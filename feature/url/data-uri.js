/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/url/data-uri.js **/
import Modernizr, { addTest, createAsyncTestListener } from "../../src/Modernizr.js";
Modernizr.addAsyncTest(function () {
  if (navigator.userAgent.indexOf('MSIE 7.') !== -1) {
    setTimeout(function () {
      addTest('datauri', false);
    }, 10);
  }

  var datauri = new Image();

  datauri.onerror = function () {
    addTest('datauri', false);
  };

  datauri.onload = function () {
    if (datauri.width == 1 && datauri.height == 1) {
      testOver32kb();
    } else {
      addTest('datauri', false);
    }
  };

  datauri.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

  function testOver32kb() {
    var datauriBig = new Image();

    datauriBig.onerror = function () {
      addTest('datauri', true);
      Modernizr.datauri = new Boolean(true);
      Modernizr.datauri.over32kb = false;
    };

    datauriBig.onload = function () {
      addTest('datauri', true);
      Modernizr.datauri = new Boolean(true);
      Modernizr.datauri.over32kb = datauriBig.width == 1 && datauriBig.height == 1;
    };

    var base64str = 'R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

    while (base64str.length < 33000) {
      base64str = '\r\n' + base64str;
    }

    datauriBig.src = 'data:image/gif;base64,' + base64str;
  }
});
export default createAsyncTestListener("datauri");
