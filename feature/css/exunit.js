/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/css/exunit.js **/
import Modernizr from "../../src/Modernizr.js";
import modElem from "../../src/modElem.js";
Modernizr.addTest('cssexunit', function () {
  var elemStyle = modElem.elem.style;
  var supports;

  try {
    elemStyle.fontSize = '3ex';
    supports = elemStyle.fontSize.indexOf('ex') !== -1;
  } catch (e) {
    supports = false;
  }

  return supports;
});
export default Modernizr.cssexunit;
