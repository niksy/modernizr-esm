/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/src/setClasses.js **/
import Modernizr from './Modernizr.js';
import docElement from './docElement.js';
import isSVG from './isSVG.js';

function setClasses(classes) {
  var className = docElement.className;
  var classPrefix = false || '';

  if (isSVG) {
    className = className.baseVal;
  }

  if (true) {
    var reJS = new RegExp('(^|\\s)' + classPrefix + 'no-js(\\s|$)');
    className = className.replace(reJS, '$1' + classPrefix + 'js$2');
  }

  if (true) {
    if (classes.length > 0) {
      className += ' ' + classPrefix + classes.join(' ' + classPrefix);
    }

    if (isSVG) {
      docElement.className.baseVal = className;
    } else {
      docElement.className = className;
    }
  }
}

export default setClasses;
