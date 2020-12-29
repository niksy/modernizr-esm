/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/es6/object.js **/
import Modernizr from "../../src/Modernizr.js";
Modernizr.addTest('es6object', !!(Object.assign && Object.is && Object.setPrototypeOf));
export default Modernizr.es6object;
