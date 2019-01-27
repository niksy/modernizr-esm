/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/css/scrollbars.js **/
import Modernizr from '../../src/Modernizr.js';
import testStyles from '../../src/testStyles.js';
import prefixes from '../../src/prefixes.js';
testStyles('#modernizr{overflow: scroll; width: 40px; height: 40px; }#' + prefixes.join('scrollbar{width:10px}' + ' #modernizr::').split('#').slice(1).join('#') + 'scrollbar{width:10px}', function (node) {
  Modernizr.addTest('cssscrollbar', 'scrollWidth' in node && node.scrollWidth == 30);
});
export default Modernizr.cssscrollbar;
