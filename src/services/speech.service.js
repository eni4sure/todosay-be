const CustomError = require("./../utils/custom-error");

class SpeechService {
  async extract(data) {
    if (!data.text) throw new CustomError("Text is required");
    // create
    return null;
  }
}

module.exports = new SpeechService();
