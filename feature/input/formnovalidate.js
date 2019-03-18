/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/input/formnovalidate.js **/
import Modernizr from '../src/Modernizr.js';
import createElement from '../src/createElement.js';
Modernizr.addTest('inputformnovalidate', !!('formNoValidate' in createElement('input')), {
  aliases: ['input-formnovalidate']
});
export default Modernizr.inputformnovalidate;
