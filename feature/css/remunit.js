/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/css/remunit.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
Modernizr.addTest('cssremunit', function () {
  var style = createElement('a').style;

  try {
    style.fontSize = '3rem';
  } catch (e) {}

  return /rem/.test(style.fontSize);
});
export default Modernizr.cssremunit;
