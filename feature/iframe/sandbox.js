/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/iframe/sandbox.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
Modernizr.addTest('sandbox', 'sandbox' in createElement('iframe'));
export default Modernizr.sandbox;
