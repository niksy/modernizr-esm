/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/canvas/winding.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
import "../canvas.js";
Modernizr.addTest('canvaswinding', function () {
  if (Modernizr.canvas === false) {
    return false;
  }

  var ctx = createElement('canvas').getContext('2d');
  ctx.rect(0, 0, 10, 10);
  ctx.rect(2, 2, 6, 6);
  return ctx.isPointInPath(5, 5, 'evenodd') === false;
});
export default Modernizr.canvaswinding;
