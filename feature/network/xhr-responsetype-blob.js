/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/network/xhr-responsetype-blob.js **/
import Modernizr from "../../src/Modernizr.js";
import testXhrType from "../../src/testXhrType.js";
Modernizr.addTest('xhrresponsetypeblob', testXhrType('blob'));
export default Modernizr.xhrresponsetypeblob;
