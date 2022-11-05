module.exports = app => {
    const userController = require("../controllers/user.controller");
    var router = require("express").Router();

    //create post and get routes
    router.post("/", userController.create);
    router.get("/", userController.findAll);

    app.use("/users", router); //link router to main express object
}