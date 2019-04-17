/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/forms/inputnumber-l10n.js **/
import Modernizr from '../src/Modernizr.js';
import createElement from '../src/createElement.js';
import getBody from '../src/getBody.js';
import '../inputtypes.js';
import './validation.js';
Modernizr.addTest('localizednumber', function () {
  if (!Modernizr.inputtypes.number) {
    return false;
  }

  if (!Modernizr.formvalidation) {
    return false;
  }

  var body = getBody();
  var div = createElement('div');
  var firstChild = body.firstElementChild || body.firstChild;
  var result;
  body.insertBefore(div, firstChild);
  div.innerHTML = '<input type="number" value="1.0" step="0.1"/>';
  var input = div.childNodes[0];
  body.appendChild(div);
  input.focus();

  try {
    document.execCommand('SelectAll', false);
    document.execCommand('InsertText', false, '1,1');
  } catch (e) {}

  result = input.type === 'number' && input.valueAsNumber === 1.1 && input.checkValidity();
  body.removeChild(div);

  if (body.fake) {
    body.parentNode.removeChild(body);
  }

  return result;
});
export default Modernizr.localizednumber;
