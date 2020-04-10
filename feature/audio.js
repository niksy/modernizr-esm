/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.10.0/feature-detects/audio.js **/
import Modernizr from "../src/Modernizr.js";
import createElement from "../src/createElement.js";

(function () {
  var elem = createElement('audio');
  Modernizr.addTest('audio', function () {
    var bool = false;

    try {
      bool = !!elem.canPlayType;

      if (bool) {
        bool = new Boolean(bool);
      }
    } catch (e) {}

    return bool;
  });

  try {
    if (!!elem.canPlayType) {
      Modernizr.addTest('audio.ogg', elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''));
      Modernizr.addTest('audio.mp3', elem.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ''));
      Modernizr.addTest('audio.opus', elem.canPlayType('audio/ogg; codecs="opus"') || elem.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ''));
      Modernizr.addTest('audio.wav', elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''));
      Modernizr.addTest('audio.m4a', (elem.canPlayType('audio/x-m4a;') || elem.canPlayType('audio/aac;')).replace(/^no$/, ''));
    }
  } catch (e) {}
})();

export var audio = Modernizr.audio;
export var audioOgg = Modernizr.audio.ogg;
export var audioMp3 = Modernizr.audio.mp3;
export var audioOpus = Modernizr.audio.opus;
export var audioWav = Modernizr.audio.wav;
export var audioM4A = Modernizr.audio.m4a;
