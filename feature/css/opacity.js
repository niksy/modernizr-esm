/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/css/opacity.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
import prefixes from "../../src/prefixes.js";
Modernizr.addTest('opacity', function () {
  var style = createElement('a').style;
  style.cssText = prefixes.join('opacity:.55;');
  return /^0.55$/.test(style.opacity);
});
export default Modernizr.opacity;
