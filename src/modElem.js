/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/src/modElem.js **/
import Modernizr from './Modernizr.js';
import createElement from './createElement.js';
var modElem = {
  elem: createElement('modernizr')
};

Modernizr._q.push(function () {
  delete modElem.elem;
});

export default modElem;
