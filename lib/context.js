const resolve = require('./helpers/resolve');

module.exports = (context, fn) => {
  if (typeof(context) !== 'undefined') {
    context = resolve(context);
  }

  if (!context) {
    const hash = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
    const date = (new Date()).toISOString().substr(0, 10).replace(/-/g, '/');
    context = {
      awsRequestId: [
        hash.substr(0, 8),
        hash.substr(9, 4),
        hash.substr(12, 4),
        hash.substr(16, 4),
        hash.substr(20, 12),
      ].join('-'),
      logGroupName: `/aws/lambda/${fn}`,
      logStreamName: `${date}/[$LATEST]'${hash}`,
      functionName: fn,
      memoryLimitInMB: '128',
      functionVersion: '$LATEST',
      invokedFunctionArn: `arn:aws:lambda:aws-region:1234567890123:function:${fn}`,
    };
    context.invokeId = context.awsRequestId;
  }

  return context;
};
