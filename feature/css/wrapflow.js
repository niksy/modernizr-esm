/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/css/wrapflow.js **/
import Modernizr from '../src/Modernizr.js';
import prefixed from '../src/prefixed.js';
import docElement from '../src/docElement.js';
import createElement from '../src/createElement.js';
import isSVG from '../src/isSVG.js';
Modernizr.addTest('wrapflow', function () {
  var prefixedProperty = prefixed('wrapFlow');

  if (!prefixedProperty || isSVG) {
    return false;
  }

  var wrapFlowProperty = prefixedProperty.replace(/([A-Z])/g, function (str, m1) {
    return '-' + m1.toLowerCase();
  }).replace(/^ms-/, '-ms-');
  var container = createElement('div');
  var exclusion = createElement('div');
  var content = createElement('span');
  exclusion.style.cssText = 'position: absolute; left: 50px; width: 100px; height: 20px;' + wrapFlowProperty + ':end;';
  content.innerText = 'X';
  container.appendChild(exclusion);
  container.appendChild(content);
  docElement.appendChild(container);
  var leftOffset = content.offsetLeft;
  docElement.removeChild(container);
  exclusion = content = container = undefined;
  return leftOffset === 150;
});
export default Modernizr.wrapflow;
