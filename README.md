[![Build Status](https://travis-ci.org/dannycroft/aws-lambda-test-helper.svg?branch=master)](https://travis-ci.org/dannycroft/aws-lambda-test-helper)

[![NPM](https://nodei.co/npm/aws-lambda-test-helper.png)](https://nodei.co/npm/aws-lambda-test-helper/)

## A promise based test helper for running node aws lambda functions

Simple, lightweight tool to help with testing AWS Lambda functions. No dependencies to run.

### Example

```javascript
const expect = require('chai').expect; // chai used for example purposes
const runLambda = require('aws-lambda-test-helper');

const config = {
  e: './test/mock/event', // mock event location
  ctx: './test/mock/context', // mock context location
  fn: './test/mock/fn', // mock function location
  handler: 'myHandler', // lambda handler to be called
};

describe('Lambda Test', () => {
  describe('#handler()', () => {
    it('should run successfully', (done) => {
      runLambda(config).then(done()).catch((err) => {
        done(err);
      });
    });
    it('should return a valid response object', (done) => {
      runLambda(config).then((response) => {
        expect(response).to.be.an('object');
        expect(response.alt).to.be.a('string');
      }).then(done).catch((err) => {
        done(err);
      });
    });
  });
});
```

### Config

All config resource paths should be based from your project root. See `./test/mock` for examples.

```javascript
{
  e: './test/mock/event', // mock event location
  ctx: './test/mock/context', // mock context location
  fn: './test/mock/fn', // mock function location
  handler: 'myHandler', // lambda handler to be called
};
```

### Install

#### With NPM
`npm i -D aws-lambda-test-helper`

#### Without NPM
Inside your project clone this repo: `git clone https://github.com/dannycroft/aws-lambda-test-helper.git` then require it from inside your tests `const runLambda = require('../aws-lambda-test-helper');`


### Test

`npm run test`
