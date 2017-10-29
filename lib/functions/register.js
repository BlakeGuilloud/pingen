const { handleSuccess, handleError, tryParse } = require('serverless-helpers/responses');

const db = require('../db');
const User = require('../models/User.model');

module.exports.handler = (event, context, callback) => {
  const body = tryParse(event.body);

  User.create(body)
    .then(response => callback(null, handleSuccess(response)))
    .catch(err => callback(null, handleError(err)))
    .finally(() => db.close());
};
