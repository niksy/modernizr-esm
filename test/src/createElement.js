import createElement from '../../src/createElement';
import expect from 'expect.js';

describe('createElement', function() {

  it('is a function', function() {
    expect(createElement).to.be.a('function');
  });

  it('creates an element', function() {
    var element = createElement('modernizr');
    expect(element.nodeName.toUpperCase()).to.be('MODERNIZR');
  });

});
