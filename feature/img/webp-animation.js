/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/img/webp-animation.js **/
import Modernizr, { addTest, createAsyncTestListener } from "../src/Modernizr.js";
Modernizr.addAsyncTest(function () {
  var image = new Image();

  image.onerror = function () {
    addTest('webpanimation', false, {
      aliases: ['webp-animation']
    });
  };

  image.onload = function () {
    addTest('webpanimation', image.width === 1, {
      aliases: ['webp-animation']
    });
  };

  image.src = 'data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA';
});
export default createAsyncTestListener("webpanimation");
