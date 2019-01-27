/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/htmlimports.js **/
import { addTest, createAsyncTestListener } from "../src/Modernizr.js";
import createElement from '../src/createElement.js';
addTest('htmlimports', 'import' in createElement('link'));
export default createAsyncTestListener("htmlimports");
