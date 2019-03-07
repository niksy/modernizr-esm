/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/a/download.js **/
import Modernizr from '../../src/Modernizr.js';
import createElement from '../../src/createElement.js';

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('adownload', _isBrowser && !window.externalHost && 'download' in createElement('a'));
export default Modernizr.adownload;
