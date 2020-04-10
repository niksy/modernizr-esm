/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.10.0/feature-detects/dataview-api.js **/
import Modernizr from "../src/Modernizr.js";
Modernizr.addTest('dataview', typeof DataView !== 'undefined' && 'getFloat64' in DataView.prototype);
export default Modernizr.dataview;
