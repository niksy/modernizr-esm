/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/elem/unknown.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
Modernizr.addTest('unknownelements', function () {
  var a = createElement('a');
  a.innerHTML = '<xyz></xyz>';
  return a.childNodes.length === 1;
});
export default Modernizr.unknownelements;
