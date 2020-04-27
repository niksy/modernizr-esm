/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/forms/formattribute.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
import docElement from "../../src/docElement.js";
Modernizr.addTest('formattribute', function () {
  var form = createElement('form');
  var input = createElement('input');
  var div = createElement('div');
  var id = 'formtest' + new Date().getTime();
  var attr;
  var bool = false;
  form.id = id;

  try {
    input.setAttribute('form', id);
  } catch (e) {
    if (document.createAttribute) {
      attr = document.createAttribute('form');
      attr.nodeValue = id;
      input.setAttributeNode(attr);
    }
  }

  div.appendChild(form);
  div.appendChild(input);
  docElement.appendChild(div);
  bool = form.elements && form.elements.length === 1 && input.form === form;
  div.parentNode.removeChild(div);
  return bool;
});
export default Modernizr.formattribute;
