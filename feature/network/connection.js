/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/network/connection.js **/
import Modernizr from "../../src/Modernizr.js";
Modernizr.addTest('lowbandwidth', function () {
  var connection = navigator.connection || {
    type: 0
  };
  return connection.type === 3 || connection.type === 4 || /^[23]g$/.test(connection.type);
});
export default Modernizr.lowbandwidth;
