/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/speech/speech-synthesis.js **/
import Modernizr from '../../src/Modernizr.js';

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('speechsynthesis', _isBrowser && 'SpeechSynthesisUtterance' in window);
export default Modernizr.speechsynthesis;
