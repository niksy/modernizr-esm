/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/video/crossorigin.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
Modernizr.addTest('videocrossorigin', 'crossOrigin' in createElement('video'));
export default Modernizr.videocrossorigin;
