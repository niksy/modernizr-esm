/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/network/connection-effectivetype.js **/
import Modernizr from "../../src/Modernizr.js";
Modernizr.addTest('effectiveType', function () {
  var connection = navigator.connection || {
    effectiveType: 0
  };

  if (connection.effectiveType !== 0) {
    return true;
  }

  return false;
});
export default Modernizr.effectiveType;
