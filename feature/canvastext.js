/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/canvastext.js **/
import Modernizr from "../src/Modernizr.js";
import createElement from "../src/createElement.js";
import "./canvas.js";
Modernizr.addTest('canvastext', function () {
  if (Modernizr.canvas === false) {
    return false;
  }

  return typeof createElement('canvas').getContext('2d').fillText === 'function';
});
export default Modernizr.canvastext;
