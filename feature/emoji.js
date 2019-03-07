/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/emoji.js **/
import Modernizr from '../src/Modernizr.js';
import createElement from '../src/createElement.js';
import './canvastext.js';
Modernizr.addTest('emoji', function () {
  if (!Modernizr.canvastext) {
    return false;
  }

  var pixelRatio = window.devicePixelRatio || 1;
  var offset = 12 * pixelRatio;
  var node = createElement('canvas');
  var ctx = node.getContext('2d');
  ctx.fillStyle = '#f00';
  ctx.textBaseline = 'top';
  ctx.font = '32px Arial';
  ctx.fillText('\uD83D\uDC28', 0, 0);
  return ctx.getImageData(offset, offset, 1, 1).data[0] !== 0;
});
export default Modernizr.emoji;
