/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/video.js **/
import Modernizr from "../src/Modernizr.js";
import createElement from "../src/createElement.js";

(function () {
  var elem = createElement('video');
  Modernizr.addTest('video', function () {
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
      Modernizr.addTest('video.ogg', elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ''));
      Modernizr.addTest('video.h264', elem.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ''));
      Modernizr.addTest('video.h265', elem.canPlayType('video/mp4; codecs="hev1"').replace(/^no$/, ''));
      Modernizr.addTest('video.webm', elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ''));
      Modernizr.addTest('video.vp9', elem.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ''));
      Modernizr.addTest('video.hls', elem.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ''));
      Modernizr.addTest('video.av1', elem.canPlayType('video/mp4; codecs="av01"').replace(/^no$/, ''));
    }
  } catch (e) {}
})();

export var video = Modernizr.video;
export var videoOgg = Modernizr.video.ogg;
export var videoH264 = Modernizr.video.h264;
export var videoH265 = Modernizr.video.h265;
export var videoWebm = Modernizr.video.webm;
export var videoVp9 = Modernizr.video.vp9;
export var videoHls = Modernizr.video.hls;
export var videoAv1 = Modernizr.video.av1;
