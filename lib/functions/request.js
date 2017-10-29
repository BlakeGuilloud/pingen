const { handleSuccess, handleError, tryParse } = require('serverless-helpers/responses');

const db = require('../db');
const User = require('../models/User.model');
const { generatePin } = require('./utils');

module.exports.handler = (event, context, callback) => {
  const body = tryParse(event.body);

  User.findByIdAndUpdate(body.pingenId, { pin: generatePin() })
    .then(() => User.findById(body.pingenId))
    .then(response => callback(null, handleSuccess(response)))
    .catch(err => callback(null, handleError(err)))
    .finally(() => db.close());
};
