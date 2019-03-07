/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/input/formaction.js **/
import Modernizr from '../src/Modernizr.js';
import createElement from '../src/createElement.js';
Modernizr.addTest('inputformaction', !!('formAction' in createElement('input')), {
  aliases: ['input-formaction']
});
export default Modernizr.inputformaction;
