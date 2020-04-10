/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.10.0/feature-detects/web-intents.js **/
import Modernizr from "../src/Modernizr.js";
import prefixed from "../src/prefixed.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('webintents', _isBrowser && !!prefixed('startActivity', navigator));
export default Modernizr.webintents;
