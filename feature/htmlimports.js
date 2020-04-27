/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/htmlimports.js **/
import Modernizr, { addTest, createAsyncTestListener } from "../src/Modernizr.js";
import createElement from "../src/createElement.js";
Modernizr.addTest('htmlimports', 'import' in createElement('link'));
export default Modernizr.htmlimports;
