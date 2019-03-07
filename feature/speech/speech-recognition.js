/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/speech/speech-recognition.js **/
import Modernizr from '../../src/Modernizr.js';
import prefixed from '../../src/prefixed.js';

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('speechrecognition', _isBrowser && !!prefixed('SpeechRecognition', window));
export default Modernizr.speechrecognition;
