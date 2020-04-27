/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/css/pointerevents.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
Modernizr.addTest('csspointerevents', function () {
  var style = createElement('a').style;
  style.cssText = 'pointer-events:auto';
  return style.pointerEvents === 'auto';
});
export default Modernizr.csspointerevents;
