/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/file/filesystem.js **/
import Modernizr from '../../src/Modernizr.js';
import prefixed from '../../src/prefixed.js';
Modernizr.addTest('filesystem', !!prefixed('requestFileSystem', window));
export default Modernizr.filesystem;
