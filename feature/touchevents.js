/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/touchevents.js **/
import Modernizr from '../src/Modernizr.js';
import prefixes from '../src/prefixes.js';
import testStyles from '../src/testStyles.js';
Modernizr.addTest('touchevents', function () {
  var bool;

  if ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch) {
    bool = true;
  } else {
    var query = ['@media (', prefixes.join('touch-enabled),('), 'heartz', ')', '{#modernizr{top:9px;position:absolute}}'].join('');
    testStyles(query, function (node) {
      bool = node.offsetTop === 9;
    });
  }

  return bool;
});
export default Modernizr.touchevents;
