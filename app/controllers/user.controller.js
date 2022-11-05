const db = require("../models");
const UserModel = db.userModel;

exports.create = (req, res) => {
    //create new user and save to db
    user = UserModel({ name:"Kyle", age:26 });
    user.save()
    .then(() => {
        //find added user by id
        UserModel.findById(user._id, (err, res) => {
            if (err) { console.log(`error: ${err}`) }
            else { console.log(`new user:\n${res}`) }
        });

        //find all users
        filter = {};
        UserModel.find(filter, (err, res) => {
            if (err) { console.log(`error: ${err}`) }
            else { console.log(`database:\n${res}`) }
        });
    })
    .catch(err => {
        console.log("failed to connect to database", err);
        process.exit();
    });
};