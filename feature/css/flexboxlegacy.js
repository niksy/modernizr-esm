/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/css/flexboxlegacy.js **/
import Modernizr from '../../src/Modernizr.js';
import testAllProps from '../../src/testAllProps.js';
Modernizr.addTest('flexboxlegacy', testAllProps('boxDirection', 'reverse', true));
export default Modernizr.flexboxlegacy;
