const { handleSuccess, handleError } = require('serverless-helpers/responses');

// DB connection stuff
const mongoose = require('mongoose');
const bluebird = require('bluebird');
mongoose.Promise = bluebird;

const User = require('./models/User.model');

module.exports.handler = (event, context, callback) => {
  // Put this into a Resolver
  const mongoString = process.env.MONGODB_URI;
  const db = mongoose.connect(mongoString).connection;

  User.create(JSON.parse(event.body))
    .then(response => callback(null, handleSuccess(response)))
    .catch(err => callback(null, handleError(err)))
    .finally(() => db.close());
};
