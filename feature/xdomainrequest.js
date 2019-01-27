/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/xdomainrequest.js **/
import Modernizr from '../src/Modernizr.js';
Modernizr.addTest('xdomainrequest', 'XDomainRequest' in window);
export default Modernizr.xdomainrequest;
