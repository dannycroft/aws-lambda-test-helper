/* global describe, it */
"use strict";

const chai = require('chai');
const runLambda = require('../index');
const sinon = require('sinon');

const expect = chai.expect;
const config = {
  e: './test/mock/event',
  ctx: './test/mock/context',
  fn: './test/mock/fn',
  handler: 'handler',
};

describe('lambda', () => {
  it('should return a valid promise', () => {
    const lambda = runLambda(config);
    expect(lambda.then).to.be.a('function');
  });

  it('should run successfully', (done) => {
    runLambda(config).then(done()).catch((err) => {
      done(err);
    });
  });

  it('should return final response from lambda', (done) => {
    runLambda(config).then((response) => {
      expect(response).to.be.an('object');
      expect(response.alt).to.be.a('string');
    }).then(done).catch((err) => {
      done(err);
    });
  });

  it('should catch thrown errors', (done) => {
    const passSpy = sinon.spy();
    const catchSpy = sinon.spy();

    Object.assign(config, {
      handler: 'fail',
      fn: './test/mock/fn-fail',
    });
    runLambda(config).then(passSpy).catch(catchSpy).then(() => {
      expect(passSpy.callCount).to.equal(0);
      expect(catchSpy.callCount).to.equal(1);
      expect(catchSpy.getCall(0).args[0].message).to.equal('Fail');
      done();
    });
  });
});
