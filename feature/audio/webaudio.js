/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/audio/webaudio.js **/
import Modernizr from '../src/Modernizr.js';
Modernizr.addTest('webaudio', function () {
  var prefixed = 'webkitAudioContext' in window;
  var unprefixed = 'AudioContext' in window;

  if (true) {
    return prefixed || unprefixed;
  }

  return unprefixed;
});
export default Modernizr.webaudio;
