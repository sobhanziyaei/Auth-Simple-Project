const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = "6f9b8c3f-4dcb-4f3a-9e6b-1c2d3e4f5g6h";

hashPassword = (password) => {
    const salt = genSaltSync(10);
    return hashSync(password, salt);
};

comparePassword = (password, hashedPassword) => {
    return compareSync(password, hashedPassword);
}

signToken = (payload) => {
    return jwt.sign(payload, secret);
}

verifyToken = (token) => {
    return jwt.verify(token, secret);
}

module.exports = {
    hashPassword,
    comparePassword,
    signToken,
    verifyToken
}