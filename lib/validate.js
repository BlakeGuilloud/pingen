const { handleSuccess, handleError } = require('serverless-helpers/responses');

// DB connection stuff
const mongoose = require('mongoose');
const bluebird = require('bluebird');
mongoose.Promise = bluebird;

const User = require('./models/User.model');

// Put this into a Resolver
const mongoString = process.env.MONGODB_URI;
const db = mongoose.connect(mongoString).connection;

module.exports.handler = (event, context, callback) => {
  User.findById(event.body.pingenId)
    .then(comparePins)
    .then(response => callback(null, handleSuccess(response)))
    .catch(err => callback(null, handleError(err)))
    .finally(() => db.close());

  function comparePins(user) {
    if (user.pin !== event.body.pin) {
      throw new Error('Wrong pin');
    }

    return {
      message: 'Success',
    };
  }
};
