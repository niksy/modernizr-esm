/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.10.0/feature-detects/json.js **/
import Modernizr from "../src/Modernizr.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('json', _isBrowser && 'JSON' in window && 'parse' in JSON && 'stringify' in JSON);
export default Modernizr.json;
