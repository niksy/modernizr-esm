/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/img/sizes.js **/
import createElement from "../../src/createElement.js";
import Modernizr, { addTest, createAsyncTestListener } from "../../src/Modernizr.js";
Modernizr.addAsyncTest(function () {
  var width1, width2, test;
  var image = createElement('img');
  var isSizes = ('sizes' in image);

  if (!isSizes && 'srcset' in image) {
    width2 = 'data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==';
    width1 = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

    test = function () {
      addTest('sizes', image.width === 2);
    };

    image.onload = test;
    image.onerror = test;
    image.setAttribute('sizes', '9px');
    image.srcset = width1 + ' 1w,' + width2 + ' 8w';
    image.src = width1;
  } else {
    addTest('sizes', isSizes);
  }
});
export default createAsyncTestListener("sizes");
