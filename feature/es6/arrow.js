/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/es6/arrow.js **/
import Modernizr from "../../src/Modernizr.js";
Modernizr.addTest('arrow', function () {
  try {
    eval('()=>{}');
  } catch (e) {
    return false;
  }

  return true;
});
export default Modernizr.arrow;
