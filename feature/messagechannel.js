/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/messagechannel.js **/
import Modernizr from "../src/Modernizr.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('messagechannel', _isBrowser && 'MessageChannel' in window);
export default Modernizr.messagechannel;
