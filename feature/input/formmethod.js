/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.10.0/feature-detects/input/formmethod.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
Modernizr.addTest('inputformmethod', !!('formMethod' in createElement('input')));
export default Modernizr.inputformmethod;
