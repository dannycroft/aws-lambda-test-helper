/* global describe, it */

const path = require('path');
const expect = require('chai').expect;
const event = require('../../lib/event');
const mockEvent = require('../mock/event.json');

describe('lib/event', () => {
  it('should return requested event', () => {
    const output = event('./test/mock/event.json');
    expect(output).to.deep.equal(mockEvent);
  });
  it('should return empty event if file not stated', () => {
    const output = event();
    expect(output).to.deep.equal({});
  });
});
