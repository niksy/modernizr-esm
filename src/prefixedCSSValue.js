/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/src/prefixedCSSValue.js **/
import ModernizrProto from './Modernizr.js';
import domPrefixes from './domPrefixes.js';
import createElement from './createElement.js';

var prefixedCSSValue = function (prop, value) {
  var result = false;
  var elem = createElement('div');
  var style = elem.style;

  if (prop in style) {
    var i = domPrefixes.length;
    style[prop] = value;
    result = style[prop];

    while (i-- && !result) {
      style[prop] = '-' + domPrefixes[i] + '-' + value;
      result = style[prop];
    }
  }

  if (result === '') {
    result = false;
  }

  return result;
};

ModernizrProto.prefixedCSSValue = prefixedCSSValue;
export default prefixedCSSValue;
