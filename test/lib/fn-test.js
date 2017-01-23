/* global describe, it */
"use strict";

const path = require('path');
const expect = require('chai').expect;
const fn = require('../../lib/fn');

describe('lib/fn', () => {
  it('should return requested function path', () => {
    const output = fn('./test/mock/fn.js');
    const expected = path.resolve(__filename).replace('lib/fn-test.js', 'mock/fn.js');
    expect(output).to.equal(expected);
  });

  it('should append .js file ext if not stated', () => {
    const output = fn('./test/mock/fn');
    const expected = path.resolve(__filename).replace('lib/fn-test.js', 'mock/fn.js');
    expect(output).to.equal(expected);
  });

  it('should throw if no file name is stated', () => {
    expect(fn).to.throw('Invalid function name');
  });

  it('should throw if file name cannot be resolved', () => {
    expect(() => fn(false)).to.throw();
  });
});
