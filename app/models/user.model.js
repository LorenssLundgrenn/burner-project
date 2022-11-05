const db = require("./index.js");

const userSchema = db.mongoose.Schema({
    name: String,
    age: Number
},
{ 
    timestamps: true 
});
  
module.exports = db.mongoose.model("user", userSchema);