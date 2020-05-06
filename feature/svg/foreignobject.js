/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/svg/foreignobject.js **/
import Modernizr from "../../src/Modernizr.js";
import toStringFn from "../../src/toStringFn.js";
Modernizr.addTest('svgforeignobject', function () {
  return !!document.createElementNS && /SVGForeignObject/.test(toStringFn.call(document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject')));
});
export default Modernizr.svgforeignobject;
