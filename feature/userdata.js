/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/userdata.js **/
import Modernizr from "../src/Modernizr.js";
import createElement from "../src/createElement.js";
Modernizr.addTest('userdata', !!createElement('div').addBehavior);
export default Modernizr.userdata;
