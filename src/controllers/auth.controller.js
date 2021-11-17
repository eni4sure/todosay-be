const response = require("../utils/response");
const AuthService = require("../services/auth.service");

class AuthContoller {
  async signin(req, res) {
    const result = await AuthService.signin(req.body);
    res.status(200).send(response("user login successful...", result));
  }
  
  async signup(req, res) {
    const result = await AuthService.signup(req.body);
    res.status(200).send(response("user signup successful...", result));
  }
}

module.exports = new AuthContoller();