/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/dom/shadowrootlegacy.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
Modernizr.addTest('shadowrootlegacy', 'createShadowRoot' in createElement('div'));
export default Modernizr.shadowrootlegacy;
