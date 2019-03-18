/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/file/api.js **/
import Modernizr from '../src/Modernizr.js';

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('filereader', _isBrowser && !!(window.File && window.FileList && window.FileReader));
export default Modernizr.filereader;
