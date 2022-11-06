const db = require("../models");
const UserModel = db.userModel;

exports.create = (req, res) => {
    //create new user and save to db
    let newUser = UserModel({
        name: req.body.name,
        age: req.body.age,
        alive: req.body.alive ? req.body.alive : true
    });
    newUser.save(newUser)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({ message:`error: ${err.message}` })
    });
};

exports.findAll = (req, res) => {
    let reqName = req.body.name;
    UserModel.find(reqName ? { name: reqName } : {} )
        .then(data => {
        res.send(data);
        })
        .catch(err => {
            res.status(500).send({ message:`error: ${err.message}` })
        });
}

exports.findOne = (req, res) => {
    let reqId = req.params.id;
    UserModel.findById(reqId)
        .then(data => {
            if (data){
                res.send(data);
            } else {
                res.status(404).send({ message: `could not find ${reqId}`});
            }
        }).catch(err => {
            res.status(500).send({ message:`error: ${err.message}` })
        });
}

exports.update = (req, res) => {
    let reqId = req.params.id;
    UserModel.findByIdAndUpdate(reqId, req.body, {useFindAndModify: false})
    .then(data => {
        if (data) {
            res.send({ message: `user ${reqId} updated successfully`});
        } else {
            res.status(404).send({
                message: `Cannot update user ${reqId}. Perhaps not found`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Error updating user ${reqId}`
        });
    });
}

exports.delete = (req, res) => {
    let reqId = req.params.id;
    UserModel.findByIdAndDelete(reqId)
    .then(data => {
        if (data) {
            res.send({
                message: `successfully deleted user ${reqId}`
            });
        } else {
            res.status(404).send({
                message: `Cannot delete user ${reqId}. Perhaps not found`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `failed to delete user ${reqId}`
        });
    });
}

exports.deleteAll = (req, res) => {
    UserModel.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} users were successfully deleted.`
        });
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "some error occurred while removing all users"
        });
      });
  };

exports.findAllAlive = (req, res) => {
    UserModel.find({ alive: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "some error occurred while retrieving all living users."
      });
    });
}