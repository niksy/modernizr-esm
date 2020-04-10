/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.10.0/feature-detects/css/generatedcontent.js **/
import Modernizr from "../../src/Modernizr.js";
import testStyles from "../../src/testStyles.js";
testStyles('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', function (node) {
  Modernizr.addTest('generatedcontent', node.offsetHeight >= 6);
});
export default Modernizr.generatedcontent;
