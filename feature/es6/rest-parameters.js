/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/es6/rest-parameters.js **/
import Modernizr from "../../src/Modernizr.js";
Modernizr.addTest('restparameters', function () {
  try {
    eval('function f(...rest) {}');
  } catch (e) {
    return false;
  }

  return true;
});
export default Modernizr.restparameters;
