/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/src/createElement.js **/
import isSVG from './isSVG.js';

var _isBrowser = typeof window !== "undefined";

function createElement() {
  if (_isBrowser && typeof document.createElement !== 'function') {
    return document.createElement(arguments[0]);
  } else if (isSVG) {
    return document.createElementNS.call(document, 'http://www.w3.org/2000/svg', arguments[0]);
  } else {
    return _isBrowser && document.createElement.apply(document, arguments);
  }
}

export default createElement;
