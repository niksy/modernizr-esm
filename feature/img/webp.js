/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/img/webp.js **/
import Modernizr, { addTest, createAsyncTestListener } from "../../src/Modernizr.js";
Modernizr.addAsyncTest(function () {
  var webpTests = [{
    'uri': 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=',
    'name': 'webp'
  }, {
    'uri': 'data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==',
    'name': 'webp.alpha'
  }, {
    'uri': 'data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA',
    'name': 'webp.animation'
  }, {
    'uri': 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=',
    'name': 'webp.lossless'
  }];
  var webp = webpTests.shift();

  function test(name, uri, cb) {
    var image = new Image();

    function addResult(event) {
      var result = event && event.type === 'load' ? image.width === 1 : false;
      var baseTest = name === 'webp';
      addTest(name, baseTest && result ? new Boolean(result) : result);

      if (cb) {
        cb(event);
      }
    }

    image.onerror = addResult;
    image.onload = addResult;
    image.src = uri;
  }

  test(webp.name, webp.uri, function (e) {
    if (e && e.type === 'load') {
      for (var i = 0; i < webpTests.length; i++) {
        test(webpTests[i].name, webpTests[i].uri);
      }
    }
  });
});
