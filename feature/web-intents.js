/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/web-intents.js **/
import Modernizr from '../src/Modernizr.js';
import prefixed from '../src/prefixed.js';
Modernizr.addTest('webintents', !!prefixed('startActivity', navigator));
export default Modernizr.webintents;
