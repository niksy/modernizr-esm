/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/css/rgba.js **/
import Modernizr from '../../src/Modernizr.js';
import createElement from '../../src/createElement.js';
Modernizr.addTest('rgba', function () {
  var style = createElement('a').style;
  style.cssText = 'background-color:rgba(150,255,150,.5)';
  return ('' + style.backgroundColor).indexOf('rgba') > -1;
});
export default Modernizr.rgba;
