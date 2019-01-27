/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/css/gradients.js **/
import Modernizr from '../../src/Modernizr.js';
import prefixes from '../../src/prefixes.js';
import createElement from '../../src/createElement.js';
Modernizr.addTest('cssgradients', function () {
  var str1 = 'background-image:';
  var str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));';
  var css = '';
  var angle;

  for (var i = 0, len = prefixes.length - 1; i < len; i++) {
    angle = i === 0 ? 'to ' : '';
    css += str1 + prefixes[i] + 'linear-gradient(' + angle + 'left top, #9f9, white);';
  }

  if (true) {
    css += str1 + '-webkit-' + str2;
  }

  var elem = createElement('a');
  var style = elem.style;
  style.cssText = css;
  return ('' + style.backgroundImage).indexOf('gradient') > -1;
});
export default Modernizr.cssgradients;
