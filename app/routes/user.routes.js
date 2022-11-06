module.exports = app => {
    const userController = require("../controllers/user.controller");
    var router = require("express").Router();

    router.post("/", userController.create);
    router.get("/", userController.findAll);
    router.get("/alive", userController.findAllAlive);// <- order matters
    router.get("/:id", userController.findOne);// <-------- ^^^^^^^^^^^^^
    router.put("/:id", userController.update);
    router.delete("/:id", userController.delete);
    router.delete("/", userController.deleteAll);

    app.use("/api/users", router); //link router to main express object
}