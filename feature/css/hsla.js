/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/css/hsla.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
import contains from "../../src/contains.js";
Modernizr.addTest('hsla', function () {
  var style = createElement('a').style;
  style.cssText = 'background-color:hsla(120,40%,100%,.5)';
  return contains(style.backgroundColor, 'rgba') || contains(style.backgroundColor, 'hsla');
});
export default Modernizr.hsla;
