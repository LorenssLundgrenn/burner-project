const db = require("../models");
const UserModel = db.userModel;

exports.create = (req, res) => {
    //create new user and save to db
    const user = UserModel({ 
        name: req.body.name, 
        age: req.body.age,
        alive: req.body.alive ? req.body.alive : true
    });
    user.save(user)
    .then(data => {
        res.send(data);
        //find added user by id
        UserModel.findById(user._id, (err, res) => {
            if (err) { console.log(`error: ${err}`) }
            else { console.log(`new user:\n${res}`) }
        });
    })
    .catch(err => {
        res.status(500).send({ message:`error: ${err.message}` })
        process.exit();
    });
};

exports.findAll = (req, res) => {
    let reqName = req.body.name;
    UserModel.find({ name: reqName })
        .then(data => {
        res.send(data);
        console.log(`all users named ${reqName}:\n${data}`);
        })
        .catch(err => {
            res.status(500).send({ message:`error: ${err.message}` })
            process.exit();
    });
};