/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/intl.js **/
import Modernizr from '../src/Modernizr.js';
import prefixed from '../src/prefixed.js';
Modernizr.addTest('intl', !!prefixed('Intl', window));
export default Modernizr.intl;
