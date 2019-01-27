/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/speech/speech-recognition.js **/
import Modernizr from '../../src/Modernizr.js';
import prefixed from '../../src/prefixed.js';
Modernizr.addTest('speechrecognition', !!prefixed('SpeechRecognition', window));
export default Modernizr.speechrecognition;
