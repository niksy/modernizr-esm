/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/css/multiplebgs.js **/
import Modernizr from '../src/Modernizr.js';
import createElement from '../src/createElement.js';
Modernizr.addTest('multiplebgs', function () {
  var style = createElement('a').style;
  style.cssText = 'background:url(https://),url(https://),red url(https://)';
  return /(url\s*\(.*?){3}/.test(style.background);
});
export default Modernizr.multiplebgs;
