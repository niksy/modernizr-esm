/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/es5/syntax.js **/
import Modernizr from "../../src/Modernizr.js";
Modernizr.addTest('es5syntax', function () {
  var value, obj, stringAccess, getter, setter, reservedWords, zeroWidthChars;

  try {
    stringAccess = eval('"foobar"[3] === "b"');
    getter = eval('({ get x(){ return 1 } }).x === 1');
    eval('({ set x(v){ value = v; } }).x = 1');
    setter = value === 1;
    eval('obj = ({ if: 1 })');
    reservedWords = obj['if'] === 1;
    zeroWidthChars = eval('_‌‍ = true');
    return stringAccess && getter && setter && reservedWords && zeroWidthChars;
  } catch (ignore) {
    return false;
  }
});
export default Modernizr.es5syntax;
