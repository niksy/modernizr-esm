/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/css/nthchild.js **/
import Modernizr from "../../src/Modernizr.js";
import testStyles from "../../src/testStyles.js";
testStyles('#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}', function (elem) {
  var elems = elem.getElementsByTagName('div');
  var correctWidths = elems[0].offsetWidth === elems[2].offsetWidth && elems[1].offsetWidth === elems[3].offsetWidth && elems[0].offsetWidth !== elems[1].offsetWidth;
  Modernizr.addTest('nthchild', correctWidths);
}, 4);
export default Modernizr.nthchild;
