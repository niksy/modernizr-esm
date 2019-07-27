/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/css/hyphens.js **/
import prefixes from "../../src/prefixes.js";
import createElement from "../../src/createElement.js";
import testAllProps from "../../src/testAllProps.js";
import Modernizr, { addTest, createAsyncTestListener } from "../../src/Modernizr.js";
Modernizr.addAsyncTest(function () {
  var waitTime = 300;
  setTimeout(runHyphenTest, waitTime);

  function runHyphenTest() {
    if (!document.body && !document.getElementsByTagName('body')[0]) {
      setTimeout(runHyphenTest, waitTime);
      return;
    }

    function test_hyphens_css() {
      try {
        var div = createElement('div');
        var span = createElement('span');
        var divStyle = div.style;
        var spanHeight = 0;
        var spanWidth = 0;
        var result = false;
        var firstChild = document.body.firstElementChild || document.body.firstChild;
        div.lang = 'en';
        div.appendChild(span);
        span.innerHTML = 'Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.';
        document.body.insertBefore(div, firstChild);
        divStyle.cssText = 'position:absolute;top:0;left:0;width:5em;text-align:justify;text-justify:newspaper;';
        spanHeight = span.offsetHeight;
        spanWidth = span.offsetWidth;
        divStyle.cssText = 'position:absolute;top:0;left:0;width:5em;text-align:justify;text-justify:newspaper;' + prefixes.join('hyphens:auto; ');
        result = span.offsetHeight !== spanHeight || span.offsetWidth !== spanWidth;
        document.body.removeChild(div);
        div.removeChild(span);
        return result;
      } catch (e) {
        return false;
      }
    }

    function test_hyphens(delimiter, testWidth) {
      try {
        var div = createElement('div');
        var span = createElement('span');
        var divStyle = div.style;
        var spanSize = 0;
        var result = false;
        var result1 = false;
        var result2 = false;
        var firstChild = document.body.firstElementChild || document.body.firstChild;
        divStyle.cssText = 'position:absolute;top:0;left:0;overflow:visible;width:1.25em;';
        div.appendChild(span);
        document.body.insertBefore(div, firstChild);
        span.innerHTML = 'mm';
        spanSize = span.offsetHeight;
        span.innerHTML = 'm' + delimiter + 'm';
        result1 = span.offsetHeight > spanSize;

        if (testWidth) {
          span.innerHTML = 'm<br />m';
          spanSize = span.offsetWidth;
          span.innerHTML = 'm' + delimiter + 'm';
          result2 = span.offsetWidth > spanSize;
        } else {
          result2 = true;
        }

        if (result1 === true && result2 === true) {
          result = true;
        }

        document.body.removeChild(div);
        div.removeChild(span);
        return result;
      } catch (e) {
        return false;
      }
    }

    function test_hyphens_find(delimiter) {
      try {
        var dummy = createElement('input');
        var div = createElement('div');
        var testword = 'lebowski';
        var result = false;
        var textrange;
        var firstChild = document.body.firstElementChild || document.body.firstChild;
        div.innerHTML = testword + delimiter + testword;
        document.body.insertBefore(div, firstChild);
        document.body.insertBefore(dummy, div);

        if (dummy.setSelectionRange) {
          dummy.focus();
          dummy.setSelectionRange(0, 0);
        } else if (dummy.createTextRange) {
          textrange = dummy.createTextRange();
          textrange.collapse(true);
          textrange.moveEnd('character', 0);
          textrange.moveStart('character', 0);
          textrange.select();
        }

        try {
          if (window.find) {
            result = window.find(testword + testword);
          } else {
            textrange = window.self.document.body.createTextRange();
            result = textrange.findText(testword + testword);
          }
        } catch (e) {
          result = false;
        }

        document.body.removeChild(div);
        document.body.removeChild(dummy);
        return result;
      } catch (e) {
        return false;
      }
    }

    addTest('csshyphens', function () {
      if (!testAllProps('hyphens', 'auto', true)) {
        return false;
      }

      try {
        return test_hyphens_css();
      } catch (e) {
        return false;
      }
    });
    addTest('softhyphens', function () {
      try {
        return test_hyphens('&#173;', true) && test_hyphens('&#8203;', false);
      } catch (e) {
        return false;
      }
    });
    addTest('softhyphensfind', function () {
      try {
        return test_hyphens_find('&#173;') && test_hyphens_find('&#8203;');
      } catch (e) {
        return false;
      }
    });
  }
});
export var csshyphens = createAsyncTestListener("csshyphens");
export var softhyphens = createAsyncTestListener("softhyphens");
export var softhyphensfind = createAsyncTestListener("softhyphensfind");
