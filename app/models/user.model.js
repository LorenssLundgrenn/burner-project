const db = require("./index.js");

const userSchema = db.mongoose.Schema({
    name: { required: true,  type: String },
    age: { required: true,  type: String },
    alive: Boolean
},
{ 
    timestamps: true 
});
  
module.exports = db.mongoose.model("user", userSchema);