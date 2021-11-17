const response = require("./../utils/response");
const SpeechServ = require("./../services/speech.service");

class SpeechContoller {

  async extract(req, res) {
    const result = await SpeechServ.extract(req.body);
    res.status(201).send(response("todo's extracted from speech text", result));
  }

}

module.exports = new SpeechContoller();
