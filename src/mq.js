/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/src/mq.js **/
import ModernizrProto from './Modernizr.js';
import injectElementWithStyles from './injectElementWithStyles.js';
import computedStyle from './computedStyle.js';

var _isBrowser = typeof window !== "undefined";

var mq = _isBrowser && function () {
  var matchMedia = window.matchMedia || window.msMatchMedia;

  if (matchMedia) {
    return function (mq) {
      var mql = matchMedia(mq);
      return mql && mql.matches || false;
    };
  }

  return function (mq) {
    var bool = false;
    injectElementWithStyles('@media ' + mq + ' { #modernizr { position: absolute; } }', function (node) {
      bool = computedStyle(node, null, 'position') === 'absolute';
    });
    return bool;
  };
}();

ModernizrProto.mq = mq;
export default mq;
