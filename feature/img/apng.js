/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.10.0/feature-detects/img/apng.js **/
import createElement from "../../src/createElement.js";
import Modernizr, { addTest, createAsyncTestListener } from "../../src/Modernizr.js";
import "../canvas.js";
Modernizr.addAsyncTest(function () {
  if (!Modernizr.canvas) {
    return false;
  }

  var image = new Image();
  var canvas = createElement('canvas');
  var ctx = canvas.getContext('2d');

  image.onload = function () {
    addTest('apng', function () {
      if (typeof canvas.getContext === 'undefined') {
        return false;
      } else {
        ctx.drawImage(image, 0, 0);
        return ctx.getImageData(0, 0, 1, 1).data[3] === 0;
      }
    });
  };

  image.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg==';
});
export default createAsyncTestListener("apng");
