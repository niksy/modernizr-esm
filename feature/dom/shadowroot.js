/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.10.0/feature-detects/dom/shadowroot.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
Modernizr.addTest('shadowroot', 'attachShadow' in createElement('div'));
export default Modernizr.shadowroot;