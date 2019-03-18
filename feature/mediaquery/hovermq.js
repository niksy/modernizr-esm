/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/mediaquery/hovermq.js **/
import Modernizr, { addTest, createAsyncTestListener } from "../src/Modernizr.js";
import mq from '../src/mq.js';
Modernizr.addTest('hovermq', mq('(hover)'));
export default Modernizr.hovermq;
