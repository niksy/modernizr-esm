/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/css/displaytable.js **/
import Modernizr from '../src/Modernizr.js';
import testStyles from '../src/testStyles.js';
testStyles('#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}', function (elem) {
  var ret;
  var child = elem.childNodes;
  ret = child[0].offsetLeft < child[1].offsetLeft;
  Modernizr.addTest('displaytable', ret, {
    aliases: ['display-table']
  });
}, 2);
export default Modernizr.displaytable;
