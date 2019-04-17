/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/canvas/todataurl.js **/
import Modernizr from '../src/Modernizr.js';
import createElement from '../src/createElement.js';
import '../canvas.js';
var canvas = createElement('canvas');
Modernizr.addTest('todataurljpeg', function () {
  return !!Modernizr.canvas && canvas.toDataURL('image/jpeg').indexOf('data:image/jpeg') === 0;
});
Modernizr.addTest('todataurlpng', function () {
  return !!Modernizr.canvas && canvas.toDataURL('image/png').indexOf('data:image/png') === 0;
});
Modernizr.addTest('todataurlwebp', function () {
  var supports = false;

  try {
    supports = !!Modernizr.canvas && canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  } catch (e) {}

  return supports;
});
export var todataurljpeg = Modernizr.todataurljpeg;
export var todataurlpng = Modernizr.todataurlpng;
export var todataurlwebp = Modernizr.todataurlwebp;
