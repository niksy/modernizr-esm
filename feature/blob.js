/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/blob.js **/
import Modernizr from "../src/Modernizr.js";
Modernizr.addTest('blobconstructor', function () {
  try {
    return !!new Blob();
  } catch (e) {
    return false;
  }
}, {
  aliases: ['blob-constructor']
});
export default Modernizr.blobconstructor;
