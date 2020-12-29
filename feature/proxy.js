/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/proxy.js **/
import Modernizr from "../src/Modernizr.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('proxy', _isBrowser && 'Proxy' in window);
export default Modernizr.proxy;
