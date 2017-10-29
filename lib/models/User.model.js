const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  externalId: {
    type: String,
    required: true,
  },
  pin: {
    type: String,
  },
});

module.exports = mongoose.model('User', UserSchema);