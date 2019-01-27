/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/file/api.js **/
import Modernizr from '../../src/Modernizr.js';
Modernizr.addTest('filereader', !!(window.File && window.FileList && window.FileReader));
export default Modernizr.filereader;
