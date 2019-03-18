/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/css/regions.js **/
import Modernizr from '../src/Modernizr.js';
import createElement from '../src/createElement.js';
import docElement from '../src/docElement.js';
import isSVG from '../src/isSVG.js';
import prefixed from '../src/prefixed.js';
Modernizr.addTest('regions', function () {
  if (isSVG) {
    return false;
  }

  var flowFromProperty = prefixed('flowFrom');
  var flowIntoProperty = prefixed('flowInto');
  var result = false;

  if (!flowFromProperty || !flowIntoProperty) {
    return result;
  }

  var iframeContainer = createElement('iframe');
  var container = createElement('div');
  var content = createElement('div');
  var region = createElement('div');
  var flowName = 'modernizr_flow_for_regions_check';
  content.innerText = 'M';
  container.style.cssText = 'top: 150px; left: 150px; padding: 0px;';
  region.style.cssText = 'width: 50px; height: 50px; padding: 42px;';
  region.style[flowFromProperty] = flowName;
  container.appendChild(content);
  container.appendChild(region);
  docElement.appendChild(container);
  var flowedRect, delta;
  var plainRect = content.getBoundingClientRect();
  content.style[flowIntoProperty] = flowName;
  flowedRect = content.getBoundingClientRect();
  delta = parseInt(flowedRect.left - plainRect.left, 10);
  docElement.removeChild(container);

  if (delta === 42) {
    result = true;
  } else {
    docElement.appendChild(iframeContainer);
    plainRect = iframeContainer.getBoundingClientRect();
    iframeContainer.style[flowIntoProperty] = flowName;
    flowedRect = iframeContainer.getBoundingClientRect();

    if (plainRect.height > 0 && plainRect.height !== flowedRect.height && flowedRect.height === 0) {
      result = true;
    }
  }

  content = region = container = iframeContainer = undefined;
  return result;
});
export default Modernizr.regions;
