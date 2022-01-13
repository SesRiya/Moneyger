const express = require('express');
const { registerUser, fetchUSersCtrl, loginUserCtrl } = require('../../controllers/users/usersCtrl');


const userRoute = express.Router();

userRoute.post('/register', registerUser);
userRoute.post('/login', loginUserCtrl);
userRoute.get('/', fetchUSersCtrl);


module.exports = userRoute;