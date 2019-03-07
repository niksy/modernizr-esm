/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/audio/loop.js **/
import Modernizr from '../../src/Modernizr.js';
import createElement from '../../src/createElement.js';
Modernizr.addTest('audioloop', 'loop' in createElement('audio'));
export default Modernizr.audioloop;
