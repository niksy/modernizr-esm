/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.10.0/feature-detects/iframe/seamless.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
Modernizr.addTest('seamless', 'seamless' in createElement('iframe'));
export default Modernizr.seamless;
