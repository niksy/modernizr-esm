/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/es6/number.js **/
import Modernizr from "../../src/Modernizr.js";
Modernizr.addTest('es6number', !!(Number.isFinite && Number.isInteger && Number.isSafeInteger && Number.isNaN && Number.parseInt && Number.parseFloat && Number.isInteger(Number.MAX_SAFE_INTEGER) && Number.isInteger(Number.MIN_SAFE_INTEGER) && Number.isFinite(Number.EPSILON)));
export default Modernizr.es6number;
