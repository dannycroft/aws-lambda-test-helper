/* global describe, it */

const expect = require('chai').expect;
const resolve = require('../../lib/helpers/resolve');
const mockEvent = require('../../test/mock/event.json');

describe('helpers/resolve', () => {
  it('should return the resolved file', () => {
    const output = resolve('./test/mock/event.json');
    expect(output).to.be.an('object');
    expect(output).to.deep.equal(mockEvent);
    expect(output.path).to.equal('foo/bar');
  });
  it('should append .json file extension if not stated', () => {
    const output = resolve('./test/mock/event');
    expect(output).to.be.an('object');
    expect(output).to.deep.equal(mockEvent);
    expect(output.path).to.equal('foo/bar');
  });
  it('should return undefined if file cannot be resolved', () => {
    const output = resolve('./test/mock/missing');
    expect(output).to.be.an('undefined');
  });
});
