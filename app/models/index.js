//database object
const db = {};

const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

db.mongoose = mongoose;
db.url = dbConfig.url;

module.exports = db;
