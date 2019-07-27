/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/es5/object.js **/
import Modernizr from "../../src/Modernizr.js";
Modernizr.addTest('es5object', function () {
  return !!(Object.keys && Object.create && Object.getPrototypeOf && Object.getOwnPropertyNames && Object.isSealed && Object.isFrozen && Object.isExtensible && Object.getOwnPropertyDescriptor && Object.defineProperty && Object.defineProperties && Object.seal && Object.freeze && Object.preventExtensions);
});
export default Modernizr.es5object;
