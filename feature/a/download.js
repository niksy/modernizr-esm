/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/a/download.js **/
import Modernizr from '../../src/Modernizr.js';
import createElement from '../../src/createElement.js';
Modernizr.addTest('adownload', !window.externalHost && 'download' in createElement('a'));
export default Modernizr.adownload;
