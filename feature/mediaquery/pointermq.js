/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/mediaquery/pointermq.js **/
import Modernizr, { addTest, createAsyncTestListener } from "../../src/Modernizr.js";
import mq from "../../src/mq.js";
Modernizr.addTest('pointermq', mq('(pointer:coarse),(pointer:fine),(pointer:none)'));
export default Modernizr.pointermq;
