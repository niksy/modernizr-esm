/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/img/webp-lossless.js **/
import Modernizr, { addTest, createAsyncTestListener } from "../../src/Modernizr.js";
Modernizr.addAsyncTest(function () {
  var image = new Image();

  image.onerror = function () {
    addTest('webplossless', false, {
      aliases: ['webp-lossless']
    });
  };

  image.onload = function () {
    addTest('webplossless', image.width === 1, {
      aliases: ['webp-lossless']
    });
  };

  image.src = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
});
export default createAsyncTestListener("webplossless");
