/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/contenteditable.js **/
import Modernizr from "../src/Modernizr.js";
import createElement from "../src/createElement.js";
import docElement from "../src/docElement.js";
Modernizr.addTest('contenteditable', function () {
  if (!('contentEditable' in docElement)) {
    return;
  }

  var div = createElement('div');
  div.contentEditable = true;
  return div.contentEditable === 'true';
});
export default Modernizr.contenteditable;
