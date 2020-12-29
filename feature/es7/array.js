/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/es7/array.js **/
import Modernizr from "../../src/Modernizr.js";
Modernizr.addTest('es7array', !!(Array.prototype && Array.prototype.includes));
export default Modernizr.es7array;
