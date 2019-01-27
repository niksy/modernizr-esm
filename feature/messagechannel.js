/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/messagechannel.js **/
import Modernizr from '../src/Modernizr.js';
Modernizr.addTest('messagechannel', 'MessageChannel' in window);
export default Modernizr.messagechannel;
