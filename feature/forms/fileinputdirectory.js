/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/forms/fileinputdirectory.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
import domPrefixesAll from "../../src/domPrefixesAll.js";
Modernizr.addTest('fileinputdirectory', function () {
  var elem = createElement('input'),
      dir = 'directory';
  elem.type = 'file';

  for (var i = 0, len = domPrefixesAll.length; i < len; i++) {
    if (domPrefixesAll[i] + dir in elem) {
      return true;
    }
  }

  return false;
});
export default Modernizr.fileinputdirectory;
