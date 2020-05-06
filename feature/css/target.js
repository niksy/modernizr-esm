/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/css/target.js **/
import Modernizr from "../../src/Modernizr.js";
Modernizr.addTest('target', function () {
  var doc = window.document;

  if (!('querySelectorAll' in doc)) {
    return false;
  }

  try {
    doc.querySelectorAll(':target');
    return true;
  } catch (e) {
    return false;
  }
});
export default Modernizr.target;
