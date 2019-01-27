/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/video.js **/
import Modernizr from '../src/Modernizr.js';
import createElement from '../src/createElement.js';
Modernizr.addTest('video', function () {
  var elem = createElement('video');
  var bool = false;

  try {
    bool = !!elem.canPlayType;

    if (bool) {
      bool = new Boolean(bool);
      bool.ogg = elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, '');
      bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, '');
      bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, '');
      bool.vp9 = elem.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, '');
      bool.hls = elem.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, '');
    }
  } catch (e) {}

  return bool;
});
export default Modernizr.video;
