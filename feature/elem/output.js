/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/elem/output.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
Modernizr.addTest('outputelem', 'value' in createElement('output'));
export default Modernizr.outputelem;
