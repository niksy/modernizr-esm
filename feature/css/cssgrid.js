/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/css/cssgrid.js **/
import Modernizr from '../../src/Modernizr.js';
import testAllProps from '../../src/testAllProps.js';
Modernizr.addTest('cssgridlegacy', testAllProps('grid-columns', '10px', true));
Modernizr.addTest('cssgrid', testAllProps('grid-template-rows', 'none', true));
export var cssgridlegacy = Modernizr.cssgridlegacy;
export var cssgrid = Modernizr.cssgrid;
