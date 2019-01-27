/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/url/bloburls.js **/
import Modernizr from '../../src/Modernizr.js';
import prefixed from '../../src/prefixed.js';
var url = prefixed('URL', window, false);
url = url && window[url];
Modernizr.addTest('bloburls', url && 'revokeObjectURL' in url && 'createObjectURL' in url);
export default Modernizr.bloburls;
