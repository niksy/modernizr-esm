/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/video/preload.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
Modernizr.addTest('videopreload', 'preload' in createElement('video'));
export default Modernizr.videopreload;
