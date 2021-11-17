const router = require("express").Router();
const AuthCtrl = require("../controllers/auth.controller.js");

router.post("/signin", AuthCtrl.signin);

router.post("/signup", AuthCtrl.signup);

module.exports = router;
