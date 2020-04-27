/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/forms/placeholder.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
Modernizr.addTest('placeholder', 'placeholder' in createElement('input') && 'placeholder' in createElement('textarea'));
export default Modernizr.placeholder;
