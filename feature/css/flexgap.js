/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/css/flexgap.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
import docElement from "../../src/docElement.js";
Modernizr.addTest('flexgap', function () {
  var flex = createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';
  flex.appendChild(createElement('div'));
  flex.appendChild(createElement('div'));
  docElement.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  return isSupported;
});
export default Modernizr.flexgap;
