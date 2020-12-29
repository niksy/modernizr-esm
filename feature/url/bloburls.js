/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/url/bloburls.js **/
import Modernizr from "../../src/Modernizr.js";
import prefixed from "../../src/prefixed.js";

var _isBrowser = typeof window !== "undefined";

var url = _isBrowser && prefixed('URL', window, false);

url = _isBrowser && url && window[url];
Modernizr.addTest('bloburls', url && 'revokeObjectURL' in url && 'createObjectURL' in url);
export default Modernizr.bloburls;
