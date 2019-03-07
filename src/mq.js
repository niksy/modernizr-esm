/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/src/mq.js **/
import ModernizrProto from './Modernizr.js';
import injectElementWithStyles from './injectElementWithStyles.js';

var mq = function () {
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
      bool = (window.getComputedStyle ? window.getComputedStyle(node, null) : node.currentStyle).position === 'absolute';
    });
    return bool;
  };
}();

ModernizrProto.mq = mq;
export default mq;
