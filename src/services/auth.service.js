const firebase = require("../firebase");
const CustomError = require("./../utils/custom-error");
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");

class AuthService {
  constructor() {
    this.auth = getAuth(firebase.userSDK);
  }

  // User sign up
  async signup(data) {
    if (!data.username) throw new CustomError("Username is required");
    if (!data.email) throw new CustomError("Email is required");
    if (!data.password) throw new CustomError("Password is required");

    try {
      const createUser = firebase.adminSDK.auth().createUser({
        email: data.email,
        displayName: data.username,
        password: data.password
      });

      return createUser;
    } catch (error) {
      throw new CustomError(error.message);
    }
  }

  // User sign in
  async signin(data) {
    if (!data.email) throw new CustomError("Email is required");
    if (!data.password) throw new CustomError("Password is required");

    try {
      const loginUser = signInWithEmailAndPassword(this.auth, data.email, data.password);

      return loginUser;
    } catch (error) {
      throw new CustomError(error);
    }
  }
}

module.exports = new AuthService();
