/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/inputtypes.js **/
import Modernizr from "../src/Modernizr.js";
import inputElem from "../src/inputElem.js";
import docElement from "../src/docElement.js";

var _isBrowser = typeof window !== "undefined";

_isBrowser && function () {
  var props = ['search', 'tel', 'url', 'email', 'datetime', 'date', 'month', 'week', 'time', 'datetime-local', 'number', 'range', 'color'];
  var smile = '1)';
  var inputElemType;
  var defaultView;
  var bool;

  for (var i = 0; i < props.length; i++) {
    inputElem.setAttribute('type', inputElemType = props[i]);
    bool = inputElem.type !== 'text' && 'style' in inputElem;

    if (bool) {
      inputElem.value = smile;
      inputElem.style.cssText = 'position:absolute;visibility:hidden;';

      if (/^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined) {
        docElement.appendChild(inputElem);
        defaultView = document.defaultView;
        bool = defaultView.getComputedStyle && defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' && inputElem.offsetHeight !== 0;
        docElement.removeChild(inputElem);
      } else if (/^(search|tel)$/.test(inputElemType)) ;else if (/^(url|email)$/.test(inputElemType)) {
        bool = inputElem.checkValidity && inputElem.checkValidity() === false;
      } else {
        bool = inputElem.value !== smile;
      }
    }

    Modernizr.addTest('inputtypes.' + inputElemType, !!bool);
  }
}();
export default Modernizr.inputtypes;
