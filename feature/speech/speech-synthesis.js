/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/speech/speech-synthesis.js **/
import Modernizr from '../../src/Modernizr.js';
Modernizr.addTest('speechsynthesis', 'SpeechSynthesisUtterance' in window);
export default Modernizr.speechsynthesis;
