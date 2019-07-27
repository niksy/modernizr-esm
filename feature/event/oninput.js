/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/event/oninput.js **/
import Modernizr from "../../src/Modernizr.js";
import docElement from "../../src/docElement.js";
import createElement from "../../src/createElement.js";
import "../../src/testStyles.js";
import hasEvent from "../../src/hasEvent.js";
Modernizr.addTest('oninput', function () {
  var input = createElement('input');
  var supportsOnInput;
  input.setAttribute('oninput', 'return');

  if (hasEvent('oninput', docElement) || typeof input.oninput === 'function') {
    return true;
  }

  try {
    var testEvent = document.createEvent('KeyboardEvent');
    supportsOnInput = false;

    var handler = function (e) {
      supportsOnInput = true;
      e.preventDefault();
      e.stopPropagation();
    };

    testEvent.initKeyEvent('keypress', true, true, window, false, false, false, false, 0, 'e'.charCodeAt(0));
    docElement.appendChild(input);
    input.addEventListener('input', handler, false);
    input.focus();
    input.dispatchEvent(testEvent);
    input.removeEventListener('input', handler, false);
    docElement.removeChild(input);
  } catch (e) {
    supportsOnInput = false;
  }

  return supportsOnInput;
});
export default Modernizr.oninput;
