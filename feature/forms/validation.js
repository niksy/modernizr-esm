/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/forms/validation.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
import "../../src/docElement.js";
import testStyles from "../../src/testStyles.js";
Modernizr.addTest('formvalidation', function () {
  var form = createElement('form');

  if (!('checkValidity' in form) || !('addEventListener' in form)) {
    return false;
  }

  if ('reportValidity' in form) {
    return true;
  }

  var invalidFired = false;
  var input;
  Modernizr.formvalidationapi = true;
  form.addEventListener('submit', function (e) {
    if (!window.opera || window.operamini) {
      e.preventDefault();
    }

    e.stopPropagation();
  }, false);
  form.innerHTML = '<input name="modTest" required="required" /><button></button>';
  testStyles('#modernizr form{position:absolute;top:-99999em}', function (node) {
    node.appendChild(form);
    input = form.getElementsByTagName('input')[0];
    input.addEventListener('invalid', function (e) {
      invalidFired = true;
      e.preventDefault();
      e.stopPropagation();
    }, false);
    Modernizr.formvalidationmessage = !!input.validationMessage;
    form.getElementsByTagName('button')[0].click();
  });
  return invalidFired;
});
export var formvalidation = Modernizr.formvalidation;
export var formvalidationapi = Modernizr.formvalidationapi;
export var formvalidationmessage = Modernizr.formvalidationmessage;
