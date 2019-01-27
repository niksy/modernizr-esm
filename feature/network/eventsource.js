/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/network/eventsource.js **/
import Modernizr from '../../src/Modernizr.js';
Modernizr.addTest('eventsource', 'EventSource' in window);
export default Modernizr.eventsource;
