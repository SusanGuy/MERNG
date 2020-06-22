const jwt = require("jsonwebtoken");
const { AuthenticationError } = require("apollo-server");
const { JWT_SECRET } = require("../config");

module.exports = (request) => {
  const authHeader = request.headers.authorization;

  if (authHeader) {
    const token = authHeader.split("Bearer ")[1];
    if (token) {
      try {
        const user = jwt.verify(token, JWT_SECRET);
        return user;
      } catch (error) {
        throw new AuthenticationError("Invalid/Expired Token");
      }
    }

    throw new Error("Authentication token must be 'Bearer [token]'");
  }

  throw new Error("Authentication header must be provided");
};
