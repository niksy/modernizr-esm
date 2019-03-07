/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/forms/inputnumber-l10n.js **/
import Modernizr from '../../src/Modernizr.js';
import createElement from '../../src/createElement.js';
import docElement from '../../src/docElement.js';
import getBody from '../../src/getBody.js';
import '../inputtypes.js';
import './validation.js';
Modernizr.addTest('localizednumber', function () {
  if (!Modernizr.inputtypes.number) {
    return false;
  }

  if (!Modernizr.formvalidation) {
    return false;
  }

  var el = createElement('div');
  var diff;
  var body = getBody();

  var root = function () {
    return docElement.insertBefore(body, docElement.firstElementChild || docElement.firstChild);
  }();

  el.innerHTML = '<input type="number" value="1.0" step="0.1"/>';
  var input = el.childNodes[0];
  root.appendChild(el);
  input.focus();

  try {
    document.execCommand('SelectAll', false);
    document.execCommand('InsertText', false, '1,1');
  } catch (e) {}

  diff = input.type === 'number' && input.valueAsNumber === 1.1 && input.checkValidity();
  root.removeChild(el);

  if (body.fake) {
    root.parentNode.removeChild(root);
  }

  return diff;
});
export default Modernizr.localizednumber;
