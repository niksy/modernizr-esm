/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/touchevents.js **/
import Modernizr from "../src/Modernizr.js";
import prefixes from "../src/prefixes.js";
import mq from "../src/mq.js";
Modernizr.addTest('touchevents', function () {
  if ('ontouchstart' in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch) {
    return true;
  }

  var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
  return mq(query);
});
export default Modernizr.touchevents;
