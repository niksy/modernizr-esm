/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/css/nthchild.js **/
import Modernizr from "../../src/Modernizr.js";
import testStyles from "../../src/testStyles.js";
testStyles('#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}', function (elem) {
  var elems = elem.getElementsByTagName('div');
  var correctWidths = true;

  for (var i = 0; i < 5; i++) {
    correctWidths = correctWidths && elems[i].offsetWidth === i % 2 + 1;
  }

  Modernizr.addTest('nthchild', correctWidths);
}, 5);
export default Modernizr.nthchild;
