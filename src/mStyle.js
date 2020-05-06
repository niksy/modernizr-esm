/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/src/mStyle.js **/
import Modernizr from './Modernizr.js';
import modElem from './modElem.js';
var mStyle = {
  style: modElem.elem.style
};

Modernizr._q.unshift(function () {
  delete mStyle.style;
});

export default mStyle;
