/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/es7/spread-object.js **/
import Modernizr from "../../src/Modernizr.js";
Modernizr.addTest('spreadobject', function () {
  try {
    eval('var a={...{b:1}}');
  } catch (e) {
    return false;
  }

  return true;
});
export default Modernizr.spreadobject;
