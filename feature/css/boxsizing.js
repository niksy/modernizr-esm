/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/css/boxsizing.js **/
import Modernizr from '../../src/Modernizr.js';
import testAllProps from '../../src/testAllProps.js';
Modernizr.addTest('boxsizing', testAllProps('boxSizing', 'border-box', true) && (document.documentMode === undefined || document.documentMode > 7));
export default Modernizr.boxsizing;
