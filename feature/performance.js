/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/performance.js **/
import Modernizr from '../src/Modernizr.js';
import prefixed from '../src/prefixed.js';
Modernizr.addTest('performance', !!prefixed('performance', window));
export default Modernizr.performance;
