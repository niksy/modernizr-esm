/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/textarea/maxlength.js **/
import Modernizr from '../../src/Modernizr.js';
import createElement from '../../src/createElement.js';
Modernizr.addTest('textareamaxlength', !!('maxLength' in createElement('textarea')));
export default Modernizr.textareamaxlength;
