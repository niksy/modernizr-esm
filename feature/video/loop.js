/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/video/loop.js **/
import Modernizr from '../../src/Modernizr.js';
import createElement from '../../src/createElement.js';
Modernizr.addTest('videoloop', 'loop' in createElement('video'));
export default Modernizr.videoloop;
