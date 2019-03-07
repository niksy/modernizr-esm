/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/css/checked.js **/
import Modernizr from '../src/Modernizr.js';
import createElement from '../src/createElement.js';
import testStyles from '../src/testStyles.js';
Modernizr.addTest('checked', function () {
  return testStyles('#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}', function (elem) {
    var cb = createElement('input');
    cb.setAttribute('type', 'checkbox');
    cb.setAttribute('checked', 'checked');
    elem.appendChild(cb);
    return cb.offsetLeft === 20;
  });
});
export default Modernizr.checked;
