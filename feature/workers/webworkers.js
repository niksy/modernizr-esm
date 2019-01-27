/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/workers/webworkers.js **/
import Modernizr from '../../src/Modernizr.js';
Modernizr.addTest('webworkers', 'Worker' in window);
export default Modernizr.webworkers;
