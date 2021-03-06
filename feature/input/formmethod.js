/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/input/formmethod.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
Modernizr.addTest('inputformmethod', !!('formMethod' in createElement('input')));
export default Modernizr.inputformmethod;
