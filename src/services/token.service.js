const JWT = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

class TokenService {
    // Create a new Token for a user
    async generateToken(user) {
        const token = JWT.sign(
            { uid: user._id, username: user.username, email: user.email },
            JWT_SECRET,
            { expiresIn: 60 * 10000 }
        );
        return token;
    }

    // Decode a token
    async decodeToken(token) {
        try {
            const decodedToken = JWT.verify(token, JWT_SECRET);
            return decodedToken;
        } catch (error) {
            return null;
        }
    }
}

module.exports = new TokenService();
