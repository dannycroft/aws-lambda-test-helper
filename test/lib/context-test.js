/* global describe, it */
"use strict";

const path = require('path');
const expect = require('chai').expect;
const context = require('../../lib/context');
const mockContext = require('../mock/context.json');

describe('lib/context', () => {
  it('should return requested context', () => {
    const output = context('./test/mock/context.json', 'foo');
    expect(output).to.deep.equal(mockContext);
  });
  it('should return a default context if none is stated', () => {
    const output = context(false, 'foo');
    expect(Object.keys(output).length).to.equal(8);
    expect(output.awsRequestId.length).to.equal(36);
    expect(output.awsRequestId.split('-').length).to.equal(5);
    expect(output.logGroupName).to.equal('/aws/lambda/foo');
    expect(output.logStreamName).to.be.a('string');
    expect(output.functionName).to.equal('foo');
    expect(output.memoryLimitInMB).to.equal('128');
    expect(output.functionVersion).to.equal('$LATEST');
    expect(output.invokedFunctionArn).to.equal('arn:aws:lambda:aws-region:1234567890123:function:foo');
    expect(output.invokeId).to.equal(output.awsRequestId);
  });
});
