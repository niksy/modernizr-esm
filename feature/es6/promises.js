/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/es6/promises.js **/
import Modernizr from '../../src/Modernizr.js';
Modernizr.addTest('promises', function () {
  return 'Promise' in window && 'resolve' in window.Promise && 'reject' in window.Promise && 'all' in window.Promise && 'race' in window.Promise && function () {
    var resolve;
    new window.Promise(function (r) {
      resolve = r;
    });
    return typeof resolve === 'function';
  }();
});
export default Modernizr.promises;
