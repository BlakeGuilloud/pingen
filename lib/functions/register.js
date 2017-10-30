const { handleSuccess, handleError, tryParse } = require('serverless-helpers/responses');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
mongoose.Promise = bluebird;

const User = require('../models/User.model');

module.exports.handler = (event, context, callback) => {
  const mongoString = process.env.MONGODB_URI;
  const db = mongoose.connect(mongoString).connection;

  const body = tryParse(event.body);

  User.create(body)
    .then(response => callback(null, handleSuccess(response)))
    .catch(err => callback(null, handleError(err)))
    .finally(() => db.close());
};
