/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/canvas.js **/
import Modernizr from "../src/Modernizr.js";
import createElement from "../src/createElement.js";
Modernizr.addTest('canvas', function () {
  var elem = createElement('canvas');
  return !!(elem.getContext && elem.getContext('2d'));
});
export default Modernizr.canvas;
