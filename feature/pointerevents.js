/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/pointerevents.js **/
import Modernizr from "../src/Modernizr.js";
import domPrefixesAll from "../src/domPrefixesAll.js";
import hasEvent from "../src/hasEvent.js";
Modernizr.addTest('pointerevents', function () {
  for (var i = 0, len = domPrefixesAll.length; i < len; i++) {
    if (hasEvent(domPrefixesAll[i] + 'pointerdown')) {
      return true;
    }
  }

  return false;
});
export default Modernizr.pointerevents;
