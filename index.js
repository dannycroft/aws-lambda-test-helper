"use strict";

const Context = require('./lib/context');
const Event = require('./lib/event');
const Fn = require('./lib/fn');
const getHandler = require('./lib/helpers/getHandler');

module.exports = (args) => {
  const event = Event(args.e);
  const context = Context(args.ctx, args.fn);
  const fn = Fn(args.fn);

  return new Promise((fulfill, reject) => {
    context.done = context.succeed = fulfill;
    context.fail = reject;
    return getHandler(fn, args.handler).call({}, event, context);
  });
};
