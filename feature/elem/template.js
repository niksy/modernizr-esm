/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/elem/template.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
Modernizr.addTest('template', 'content' in createElement('template'));
export default Modernizr.template;
