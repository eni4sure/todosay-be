const router = require("express").Router();
const trimIncomingRequests = require("../middlewares/trim-incoming-requests.middleware");
const authGuard = require("../middlewares/auth.middleware");

// Trim all incoming requests
router.use(trimIncomingRequests);

router.use("/auth", require("./auth.route.js"));

router.use("/todo", authGuard(), require("./todo.route.js"));

router.use("/speech", authGuard(), require("./speech.route.js"));

module.exports = router;
