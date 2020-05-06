/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/speech/speech-recognition.js **/
import Modernizr from "../../src/Modernizr.js";
import prefixed from "../../src/prefixed.js";
Modernizr.addTest('speechrecognition', function () {
  try {
    return !!prefixed('SpeechRecognition', window);
  } catch (e) {
    return false;
  }
});
export default Modernizr.speechrecognition;
