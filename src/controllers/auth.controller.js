const response = require("../utils/response");
const AuthService = require("../services/auth.service");

class AuthContoller {
  async signup(req, res) {
    const result = await AuthService.signup(req.body);
    res.status(201).send(response("User created", result));
  }

  async signin(req, res) {
    const result = await AuthService.signin(req.body);
    res.status(200).send(response("User login successful", result));
  }
}

module.exports = new AuthContoller();