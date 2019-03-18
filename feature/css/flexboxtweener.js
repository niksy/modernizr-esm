/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/css/flexboxtweener.js **/
import Modernizr from '../src/Modernizr.js';
import testAllProps from '../src/testAllProps.js';
Modernizr.addTest('flexboxtweener', testAllProps('flexAlign', 'end', true));
export default Modernizr.flexboxtweener;
