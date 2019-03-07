/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/elem/ruby.js **/
import Modernizr from '../../src/Modernizr.js';
import createElement from '../../src/createElement.js';
import docElement from '../../src/docElement.js';
Modernizr.addTest('ruby', function () {
  var ruby = createElement('ruby');
  var rt = createElement('rt');
  var rp = createElement('rp');
  var displayStyleProperty = 'display';
  var fontSizeStyleProperty = 'fontSize';
  ruby.appendChild(rp);
  ruby.appendChild(rt);
  docElement.appendChild(ruby);

  if (getStyle(rp, displayStyleProperty) === 'none' || getStyle(ruby, displayStyleProperty) === 'ruby' && getStyle(rt, displayStyleProperty) === 'ruby-text' || getStyle(rp, fontSizeStyleProperty) === '6pt' && getStyle(rt, fontSizeStyleProperty) === '6pt') {
    cleanUp();
    return true;
  } else {
    cleanUp();
    return false;
  }

  function getStyle(element, styleProperty) {
    var result;

    if (window.getComputedStyle) {
      result = document.defaultView.getComputedStyle(element, null).getPropertyValue(styleProperty);
    } else if (element.currentStyle) {
      result = element.currentStyle[styleProperty];
    }

    return result;
  }

  function cleanUp() {
    docElement.removeChild(ruby);
    ruby = null;
    rt = null;
    rp = null;
  }
});
export default Modernizr.ruby;
