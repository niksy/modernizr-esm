/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/dart.js **/
import Modernizr from '../src/Modernizr.js';
import prefixed from '../src/prefixed.js';
Modernizr.addTest('dart', !!prefixed('startDart', navigator));
export default Modernizr.dart;
