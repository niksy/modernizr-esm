/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/css/transformstylepreserve3d.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
import docElement from "../../src/docElement.js";
Modernizr.addTest('preserve3d', function () {
  var outerAnchor, innerAnchor;
  var CSS = window.CSS;
  var result = false;

  if (CSS && CSS.supports && CSS.supports('(transform-style: preserve-3d)')) {
    return true;
  }

  outerAnchor = createElement('a');
  innerAnchor = createElement('a');
  outerAnchor.style.cssText = 'display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);';
  innerAnchor.style.cssText = 'display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);';
  outerAnchor.appendChild(innerAnchor);
  docElement.appendChild(outerAnchor);
  result = innerAnchor.getBoundingClientRect();
  docElement.removeChild(outerAnchor);
  result = result.width && result.width < 4;
  return result;
});
export default Modernizr.preserve3d;
