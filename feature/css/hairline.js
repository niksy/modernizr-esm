/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/css/hairline.js **/
import Modernizr from '../src/Modernizr.js';
import testStyles from '../src/testStyles.js';
Modernizr.addTest('hairline', function () {
  return testStyles('#modernizr {border:.5px solid transparent}', function (elem) {
    return elem.offsetHeight === 1;
  });
});
export default Modernizr.hairline;
