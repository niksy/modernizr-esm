/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.10.0/feature-detects/svg/filters.js **/
import Modernizr from "../../src/Modernizr.js";
Modernizr.addTest('svgfilters', function () {
  var result = false;

  try {
    result = 'SVGFEColorMatrixElement' in window && SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE === 2;
  } catch (e) {}

  return result;
});
export default Modernizr.svgfilters;
