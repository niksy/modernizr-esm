/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/elem/track.js **/
import Modernizr from '../../src/Modernizr.js';
import createElement from '../../src/createElement.js';
Modernizr.addTest('texttrackapi', typeof createElement('video').addTextTrack === 'function');
Modernizr.addTest('track', 'kind' in createElement('track'));
export var texttrackapi = Modernizr.texttrackapi;
export var track = Modernizr.track;
