/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/templatestrings.js **/
import Modernizr from "../src/Modernizr.js";
Modernizr.addTest('templatestrings', function () {
  var supports;

  try {
    eval('``');
    supports = true;
  } catch (e) {}

  return !!supports;
});
export default Modernizr.templatestrings;
