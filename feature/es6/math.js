/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/es6/math.js **/
import Modernizr from "../../src/Modernizr.js";
Modernizr.addTest('es6math', !!(Math && Math.clz32 && Math.cbrt && Math.imul && Math.sign && Math.log10 && Math.log2 && Math.log1p && Math.expm1 && Math.cosh && Math.sinh && Math.tanh && Math.acosh && Math.asinh && Math.atanh && Math.hypot && Math.trunc && Math.fround));
export default Modernizr.es6math;
