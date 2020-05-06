/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/es6/class.js **/
import Modernizr from "../../src/Modernizr.js";
Modernizr.addTest('class', function () {
  try {
    eval('class A{}');
  } catch (e) {
    return false;
  }

  return true;
});
export default Modernizr.class;
