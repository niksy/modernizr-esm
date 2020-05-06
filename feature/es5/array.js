/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/es5/array.js **/
import Modernizr from "../../src/Modernizr.js";
Modernizr.addTest('es5array', function () {
  return !!(Array.prototype && Array.prototype.every && Array.prototype.filter && Array.prototype.forEach && Array.prototype.indexOf && Array.prototype.lastIndexOf && Array.prototype.map && Array.prototype.some && Array.prototype.reduce && Array.prototype.reduceRight && Array.isArray);
});
export default Modernizr.es5array;
