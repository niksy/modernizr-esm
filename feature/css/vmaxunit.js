/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/css/vmaxunit.js **/
import Modernizr from "../../src/Modernizr.js";
import "../../src/docElement.js";
import testStyles from "../../src/testStyles.js";
import roundedEquals from "../../src/roundedEquals.js";
import computedStyle from "../../src/computedStyle.js";
testStyles('#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}', function (node) {
  var elem = node.childNodes[2];
  var scroller = node.childNodes[1];
  var fullSizeElem = node.childNodes[0];
  var scrollbarWidth = parseInt((scroller.offsetWidth - scroller.clientWidth) / 2, 10);
  var one_vw = fullSizeElem.clientWidth / 100;
  var one_vh = fullSizeElem.clientHeight / 100;
  var expectedWidth = parseInt(Math.max(one_vw, one_vh) * 50, 10);
  var compWidth = parseInt(computedStyle(elem, null, 'width'), 10);
  Modernizr.addTest('cssvmaxunit', roundedEquals(expectedWidth, compWidth) || roundedEquals(expectedWidth, compWidth - scrollbarWidth));
}, 3);
export default Modernizr.cssvmaxunit;
