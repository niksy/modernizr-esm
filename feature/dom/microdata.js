/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/dom/microdata.js **/
import Modernizr from "../../src/Modernizr.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('microdata', _isBrowser && 'getItems' in document);
export default Modernizr.microdata;
