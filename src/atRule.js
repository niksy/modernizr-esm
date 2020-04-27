/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/src/atRule.js **/
import ModernizrProto from './Modernizr.js';
import prefixes from './cssomPrefixes.js';

var atRule = function (prop) {
  var length = prefixes.length;
  var cssrule = window.CSSRule;
  var rule;

  if (typeof cssrule === 'undefined') {
    return undefined;
  }

  if (!prop) {
    return false;
  }

  prop = prop.replace(/^@/, '');
  rule = prop.replace(/-/g, '_').toUpperCase() + '_RULE';

  if (rule in cssrule) {
    return '@' + prop;
  }

  for (var i = 0; i < length; i++) {
    var prefix = prefixes[i];
    var thisRule = prefix.toUpperCase() + '_' + rule;

    if (thisRule in cssrule) {
      return '@-' + prefix.toLowerCase() + '-' + prop;
    }
  }

  return false;
};

ModernizrProto.atRule = atRule;
export default atRule;
