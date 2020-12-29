/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/es6/symbol.js **/
import Modernizr from "../../src/Modernizr.js";
Modernizr.addTest('es6symbol', !!(Symbol && Symbol.for && Symbol.hasInstance && Symbol.isConcatSpreadable && Symbol.iterator && Symbol.keyFor && Symbol.match && Symbol.prototype && Symbol.replace && Symbol.search && Symbol.species && Symbol.split && Symbol.toPrimitive && Symbol.toStringTag && Symbol.unscopables));
export default Modernizr.es6symbol;
