/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/json.js **/
import Modernizr from '../src/Modernizr.js';
Modernizr.addTest('json', 'JSON' in window && 'parse' in JSON && 'stringify' in JSON);
export default Modernizr.json;
