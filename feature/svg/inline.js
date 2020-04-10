/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.10.0/feature-detects/svg/inline.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
Modernizr.addTest('inlinesvg', function () {
  var div = createElement('div');
  div.innerHTML = '<svg/>';
  return (typeof SVGRect !== 'undefined' && div.firstChild && div.firstChild.namespaceURI) === 'http://www.w3.org/2000/svg';
});
export default Modernizr.inlinesvg;
