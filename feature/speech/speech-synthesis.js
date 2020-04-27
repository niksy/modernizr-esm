/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/speech/speech-synthesis.js **/
import Modernizr from "../../src/Modernizr.js";
Modernizr.addTest('speechsynthesis', function () {
  try {
    return 'SpeechSynthesisUtterance' in window;
  } catch (e) {
    return false;
  }
});
export default Modernizr.speechsynthesis;
