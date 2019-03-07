/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/network/xhr-responsetype-arraybuffer.js **/
import Modernizr from '../src/Modernizr.js';
import testXhrType from '../src/testXhrType.js';
Modernizr.addTest('xhrresponsetypearraybuffer', testXhrType('arraybuffer'));
export default Modernizr.xhrresponsetypearraybuffer;
