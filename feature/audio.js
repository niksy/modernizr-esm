/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/audio.js **/
import Modernizr from '../src/Modernizr.js';
import createElement from '../src/createElement.js';
Modernizr.addTest('audio', function () {
  var elem = createElement('audio');
  var bool = false;

  try {
    bool = !!elem.canPlayType;

    if (bool) {
      bool = new Boolean(bool);
      bool.ogg = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '');
      bool.mp3 = elem.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, '');
      bool.opus = elem.canPlayType('audio/ogg; codecs="opus"') || elem.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, '');
      bool.wav = elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '');
      bool.m4a = (elem.canPlayType('audio/x-m4a;') || elem.canPlayType('audio/aac;')).replace(/^no$/, '');
    }
  } catch (e) {}

  return bool;
});
export default Modernizr.audio;
