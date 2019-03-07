/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/webanimations.js **/
import Modernizr from '../src/Modernizr.js';
import createElement from '../src/createElement.js';
Modernizr.addTest('webanimations', 'animate' in createElement('div'));
export default Modernizr.webanimations;
