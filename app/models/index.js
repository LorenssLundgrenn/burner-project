//database object
const db = {};

const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

exports.mongoose = mongoose;
exports.url = dbConfig.url;

exports.userModel = require("./user.model.js");