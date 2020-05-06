/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/es6/spread-array.js **/
import Modernizr from "../../src/Modernizr.js";
Modernizr.addTest('spreadarray', function () {
  try {
    eval('(function f(){})(...[1])');
  } catch (e) {
    return false;
  }

  return true;
});
export default Modernizr.spreadarray;
