/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/custom-elements.js **/
import Modernizr from '../src/Modernizr.js';
Modernizr.addTest('customelements', 'customElements' in window);
export default Modernizr.customelements;
