/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/file/filesystem.js **/
import Modernizr from "../../src/Modernizr.js";
import prefixed from "../../src/prefixed.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('filesystem', _isBrowser && !!prefixed('requestFileSystem', window));
export default Modernizr.filesystem;
