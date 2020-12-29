/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/inputsearchevent.js **/
import Modernizr from "../src/Modernizr.js";
import hasEvent from "../src/hasEvent.js";
Modernizr.addTest('inputsearchevent', hasEvent('search'));
export default Modernizr.inputsearchevent;
