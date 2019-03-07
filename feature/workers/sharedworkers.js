/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/workers/sharedworkers.js **/
import Modernizr from '../../src/Modernizr.js';

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('sharedworkers', _isBrowser && 'SharedWorker' in window);
export default Modernizr.sharedworkers;
