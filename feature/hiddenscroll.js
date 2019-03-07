/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/hiddenscroll.js **/
import Modernizr from '../src/Modernizr.js';
import testStyles from '../src/testStyles.js';
Modernizr.addTest('hiddenscroll', function () {
  return testStyles('#modernizr {width:100px;height:100px;overflow:scroll}', function (elem) {
    return elem.offsetWidth === elem.clientWidth;
  });
});
export default Modernizr.hiddenscroll;
