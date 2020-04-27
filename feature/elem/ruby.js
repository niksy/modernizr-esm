/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/elem/ruby.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
import docElement from "../../src/docElement.js";
import computedStyle from "../../src/computedStyle.js";
Modernizr.addTest('ruby', function () {
  var ruby = createElement('ruby');
  var rt = createElement('rt');
  var rp = createElement('rp');
  ruby.appendChild(rp);
  ruby.appendChild(rt);
  docElement.appendChild(ruby);

  if (computedStyle(rp, null, 'display') === 'none' || computedStyle(ruby, null, 'display') === 'ruby' && computedStyle(rt, null, 'display') === 'ruby-text' || computedStyle(rp, null, 'fontSize') === '6pt' && computedStyle(rt, null, 'fontSize') === '6pt') {
    cleanUp();
    return true;
  } else {
    cleanUp();
    return false;
  }

  function cleanUp() {
    docElement.removeChild(ruby);
    ruby = null;
    rt = null;
    rp = null;
  }
});
export default Modernizr.ruby;
