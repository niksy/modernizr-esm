/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/canvas/blending.js **/
import Modernizr from '../src/Modernizr.js';
import createElement from '../src/createElement.js';
import './canvas.js';
Modernizr.addTest('canvasblending', function () {
  if (Modernizr.canvas === false) {
    return false;
  }

  var ctx = createElement('canvas').getContext('2d');

  try {
    ctx.globalCompositeOperation = 'screen';
  } catch (e) {}

  return ctx.globalCompositeOperation === 'screen';
});
export default Modernizr.canvasblending;
