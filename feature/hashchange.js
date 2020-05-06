/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/hashchange.js **/
import Modernizr from "../src/Modernizr.js";
import hasEvent from "../src/hasEvent.js";
Modernizr.addTest('hashchange', function () {
  if (hasEvent('hashchange', window) === false) {
    return false;
  }

  return document.documentMode === undefined || document.documentMode > 7;
});
export default Modernizr.hashchange;
