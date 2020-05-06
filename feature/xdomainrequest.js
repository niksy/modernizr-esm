/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/xdomainrequest.js **/
import Modernizr from "../src/Modernizr.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('xdomainrequest', _isBrowser && 'XDomainRequest' in window);
export default Modernizr.xdomainrequest;
