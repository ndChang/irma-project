const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send("This is root file irma-birthday"));
router.get("/posts", controllers.getPost);
router.post("/posts", controllers.createPost);

module.exports = router;
