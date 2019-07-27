/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/custom-elements.js **/
import Modernizr from "../src/Modernizr.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('customelements', _isBrowser && 'customElements' in window);
export default Modernizr.customelements;
