/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/img/jpegxr.js **/
import Modernizr, { addTest, createAsyncTestListener } from "../../src/Modernizr.js";
Modernizr.addAsyncTest(function () {
  var image = new Image();

  image.onload = image.onerror = function () {
    addTest('jpegxr', image.width === 1, {
      aliases: ['jpeg-xr']
    });
  };

  image.src = 'data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA==';
});
export default createAsyncTestListener("jpegxr");
