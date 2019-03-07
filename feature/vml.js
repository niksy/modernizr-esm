/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/vml.js **/
import Modernizr from '../src/Modernizr.js';
import createElement from '../src/createElement.js';
import isSVG from '../src/isSVG.js';
Modernizr.addTest('vml', function () {
  var containerDiv = createElement('div');
  var supports = false;
  var shape;

  if (!isSVG) {
    containerDiv.innerHTML = '<v:shape id="vml_flag1" adj="1" />';
    shape = containerDiv.firstChild;

    if ('style' in shape) {
      shape.style.behavior = 'url(#default#VML)';
    }

    supports = shape ? typeof shape.adj == 'object' : true;
  }

  return supports;
});
export default Modernizr.vml;
