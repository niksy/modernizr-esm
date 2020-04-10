/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.10.0/feature-detects/css/positionsticky.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
import prefixes from "../../src/prefixes.js";
Modernizr.addTest('csspositionsticky', function () {
  var prop = 'position:';
  var value = 'sticky';
  var el = createElement('a');
  var mStyle = el.style;
  mStyle.cssText = prop + prefixes.join(value + ';' + prop).slice(0, -prop.length);
  return mStyle.position.indexOf(value) !== -1;
});
export default Modernizr.csspositionsticky;
