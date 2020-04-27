/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/css/transforms.js **/
import Modernizr from "../../src/Modernizr.js";
import testAllProps from "../../src/testAllProps.js";
Modernizr.addTest('csstransforms', function () {
  return navigator.userAgent.indexOf('Android 2.') === -1 && testAllProps('transform', 'scale(1)', true);
});
export default Modernizr.csstransforms;
