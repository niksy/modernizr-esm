/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/pointerevents.js **/
import Modernizr from '../src/Modernizr.js';
import domPrefixes from '../src/domPrefixes.js';
import hasEvent from '../src/hasEvent.js';
Modernizr.addTest('pointerevents', function () {
  var bool = false,
      i = domPrefixes.length;
  bool = Modernizr.hasEvent('pointerdown');

  while (i-- && !bool) {
    if (hasEvent(domPrefixes[i] + 'pointerdown')) {
      bool = true;
    }
  }

  return bool;
});
export default Modernizr.pointerevents;
