/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/es5/date.js **/
import Modernizr from '../../src/Modernizr.js';
Modernizr.addTest('es5date', function () {
  var isoDate = '2013-04-12T06:06:37.307Z',
      canParseISODate = false;

  try {
    canParseISODate = !!Date.parse(isoDate);
  } catch (e) {}

  return !!(Date.now && Date.prototype && Date.prototype.toISOString && Date.prototype.toJSON && canParseISODate);
});
export default Modernizr.es5date;
