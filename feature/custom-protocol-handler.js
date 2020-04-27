/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/custom-protocol-handler.js **/
import Modernizr from "../src/Modernizr.js";
Modernizr.addTest('customprotocolhandler', function () {
  if (!navigator.registerProtocolHandler) {
    return false;
  }

  try {
    navigator.registerProtocolHandler('thisShouldFail');
  } catch (e) {
    return e instanceof TypeError;
  }

  return false;
});
export default Modernizr.customprotocolhandler;
