const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

//database object
exports.mongoose = mongoose;
exports.url = require("../config/db.config.js").url;
exports.userModel = require("./user.model.js");