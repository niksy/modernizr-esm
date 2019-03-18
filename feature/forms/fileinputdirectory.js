/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/forms/fileinputdirectory.js **/
import Modernizr from '../src/Modernizr.js';
import createElement from '../src/createElement.js';
import domPrefixes from '../src/domPrefixes.js';
Modernizr.addTest('fileinputdirectory', function () {
  var elem = createElement('input'),
      dir = 'directory';
  elem.type = 'file';

  if (dir in elem) {
    return true;
  } else {
    for (var i = 0, len = domPrefixes.length; i < len; i++) {
      if (domPrefixes[i] + dir in elem) {
        return true;
      }
    }
  }

  return false;
});
export default Modernizr.fileinputdirectory;
