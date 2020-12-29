/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/lists-reversed.js **/
import Modernizr from "../src/Modernizr.js";
import createElement from "../src/createElement.js";
Modernizr.addTest('olreversed', 'reversed' in createElement('ol'));
export default Modernizr.olreversed;
