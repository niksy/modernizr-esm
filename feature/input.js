/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/input.js **/
import Modernizr from '../src/Modernizr.js';
import createElement from '../src/createElement.js';
import inputElem from '../src/inputElem.js';

var _isBrowser = typeof window !== "undefined";

var inputattrs = 'autocomplete autofocus list placeholder max min multiple pattern required step'.split(' ');
var attrs = {};

Modernizr.input = _isBrowser && function (props) {
  for (var i = 0, len = props.length; i < len; i++) {
    attrs[props[i]] = !!(props[i] in inputElem);
  }

  if (attrs.list) {
    attrs.list = !!(createElement('datalist') && window.HTMLDataListElement);
  }

  return attrs;
}(inputattrs);

export default Modernizr.input;
