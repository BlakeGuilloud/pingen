// DB connection stuff
const mongoose = require('mongoose');
const bluebird = require('bluebird');
mongoose.Promise = bluebird;

const mongoString = process.env.MONGODB_URI;
const db = mongoose.connect(mongoString).connection;

module.exports = db;