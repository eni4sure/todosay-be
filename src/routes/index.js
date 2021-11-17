const router = require("express").Router();
const trimIncomingRequests = require("../middlewares/trim-incoming-requests.middleware");

// Trim all incoming requests
router.use(trimIncomingRequests);

router.use("/auth", require("./auth.route.js"));

module.exports = router;
