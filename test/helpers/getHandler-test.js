/* global describe, it */
"use strict";

const expect = require('chai').expect;
const getHandler = require('../../lib/helpers/getHandler');

describe('helpers/getHandler', () => {
  it('should return a function', () => {
    const handler = getHandler('./test/mock/fn-multiple', 'baz');
    expect(handler).to.be.a('function');
  });

  it('should return specific handler', () => {
    let handler = getHandler('./test/mock/fn-multiple', 'baz');
    expect(handler.name).to.equal('baz');

    handler = getHandler('./test/mock/fn-multiple', 'handler');
    expect(handler.name).to.equal('handler');
  });

  it('should return first function available if handler not found', () => {
    const handler = getHandler('./test/mock/fn-multiple', 'missing');
    expect(handler.name).to.equal('foo');
  });
});
