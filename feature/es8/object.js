/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/es8/object.js **/
import Modernizr from "../../src/Modernizr.js";
Modernizr.addTest('es8object', !!(Object.entries && Object.values));
export default Modernizr.es8object;
