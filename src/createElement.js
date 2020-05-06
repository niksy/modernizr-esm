/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/src/createElement.js **/
import isSVG from './isSVG.js';

function createElement() {
  if (typeof document.createElement !== 'function') {
    return document.createElement(arguments[0]);
  } else if (isSVG) {
    return document.createElementNS.call(document, 'http://www.w3.org/2000/svg', arguments[0]);
  } else {
    return document.createElement.apply(document, arguments);
  }
}

export default createElement;
