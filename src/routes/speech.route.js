const router = require("express").Router();
const SpeechCtrl = require("./../controllers/speech.controller");

router.post("/extract", SpeechCtrl.extract);

module.exports = router;
