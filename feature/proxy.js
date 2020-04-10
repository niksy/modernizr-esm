/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.10.0/feature-detects/proxy.js **/
import Modernizr from "../src/Modernizr.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('proxy', _isBrowser && 'Proxy' in window);
export default Modernizr.proxy;
