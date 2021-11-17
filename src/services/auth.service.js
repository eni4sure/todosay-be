const bcrypt = require('bcrypt');
const User = require("./../models/user.model");
const TokenService = require("./token.service");
const CustomError = require("./../utils/custom-error");

class AuthService {
    // User sign up
    async signup(data) {
        if (!data.username) throw new CustomError("Username is required");
        if (!data.email) throw new CustomError("Email is required");
        if (!data.password) throw new CustomError("Password is required");

        let user = await User.findOne({ email: data.email })
        if (user) throw new CustomError("Email already exists");

        user = new User(data);
        const token = await TokenService.generateToken(user);
        await user.save();

        return data = {
            uid: user._id,
            username: user.username,
            email: user.email,
            token: token
        };
    }

    // User sign in
    async signin(data) {
        if (!data.email) throw new CustomError("Email is required");
        if (!data.password) throw new CustomError("Password is required");

        // Check if user exist
        const user = await User.findOne({ email: data.email });
        if (!user) throw new CustomError("Incorrect email or password");

        //Check if user password is correct
        const isCorrect = await bcrypt.compare(data.password, user.password)
        if (!isCorrect) throw new CustomError("Incorrect email or password");

        const token = await TokenService.generateToken(user);

        return data = {
            uid: user._id,
            username: user.username,
            email: user.email,
            token: token
        };
    }
}

module.exports = new AuthService();
