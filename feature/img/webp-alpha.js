/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/img/webp-alpha.js **/
import Modernizr, { addTest, createAsyncTestListener } from "../src/Modernizr.js";
Modernizr.addAsyncTest(function () {
  var image = new Image();

  image.onerror = function () {
    addTest('webpalpha', false, {
      aliases: ['webp-alpha']
    });
  };

  image.onload = function () {
    addTest('webpalpha', image.width === 1, {
      aliases: ['webp-alpha']
    });
  };

  image.src = 'data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==';
});
export default createAsyncTestListener("webpalpha");
