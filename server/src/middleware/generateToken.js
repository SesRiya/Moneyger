const jWToken = require('jsonwebtoken');

const generateToken = id => {
    return jWToken.sign({id}, process.env.JWT_Key, {expiresIn: "10d"});
};

module.exports = generateToken;