/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/network/xhr-responsetype-json.js **/
import Modernizr from "../../src/Modernizr.js";
import testXhrType from "../../src/testXhrType.js";
Modernizr.addTest('xhrresponsetypejson', testXhrType('json'));
export default Modernizr.xhrresponsetypejson;
