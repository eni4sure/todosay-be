const router = require("express").Router();
const AuthCtrl = require("./../controllers/auth.controller");

// POST /api/auth/signup
router.post("/signup", AuthCtrl.signup);

// POST /api/auth/signin
router.post("/signin", AuthCtrl.signin);

module.exports = router