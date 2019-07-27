/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/webauthn/publickeycredential.js **/
import Modernizr from "../../src/Modernizr.js";
Modernizr.addTest('publicKeyCredential', function () {
  if (window.PublicKeyCredential) {
    return true;
  }

  return false;
});
export default Modernizr.publicKeyCredential;
