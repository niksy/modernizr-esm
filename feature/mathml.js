/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/mathml.js **/
import Modernizr from "../src/Modernizr.js";
import testStyles from "../src/testStyles.js";
Modernizr.addTest('mathml', function () {
  var ret;
  testStyles('#modernizr{position:absolute;display:inline-block}', function (node) {
    node.innerHTML += '<math><mfrac><mi>xx</mi><mi>yy</mi></mfrac></math>';
    ret = node.offsetHeight > node.offsetWidth;
  });
  return ret;
});
export default Modernizr.mathml;
