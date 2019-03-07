/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/css/lastchild.js **/
import Modernizr from '../../src/Modernizr.js';
import testStyles from '../../src/testStyles.js';
testStyles('#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}', function (elem) {
  Modernizr.addTest('lastchild', elem.lastChild.offsetWidth > elem.firstChild.offsetWidth);
}, 2);
export default Modernizr.lastchild;
