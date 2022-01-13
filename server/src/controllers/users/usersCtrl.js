const expressAsyncHandler = require('express-async-handler');
const generateToken = require('../../middleware/generateToken');
const User = require("../../model/User");

//Register
const registerUser = expressAsyncHandler(async (req, res) => {
    const { email, firstName, lastName, password } = req?.body; 
  
    //check if user exists
    //User.findOne method from Mongoose
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) throw new Error("User already exists");

    try {
      const user = await User.create({ email, firstName, lastName, password });
      res.status(200).json(user);
    } catch (error) {
      res.json(error);
    }
  });


  const fetchUSersCtrl = expressAsyncHandler(async (req, res) => {
        try {
            const users = await User.find({});
            res.json(users);
        }catch (error) {
            res.json(error);
        }
  });
  
//login users
const loginUserCtrl = expressAsyncHandler(async (req, res) => {
  const { email, password } = req?.body;
 //find user in the databaseName
 const userFound = await User.findOne({ email });

 //check if user password matches
 if(userFound && (await userFound?.isPasswordMatch(password))){
   res.json({
     _id: userFound?._id,
     firstName: userFound?.firstName,
     lastName: userFound?.lastName,
     email: userFound?.email,
     isAdmin: userFound?.isAdmin,
     token: generateToken(userFound?._id),
   });
 }else{
  res.status(401);
  throw new Error('Invalid login details');
 }
  
});


module.exports = { registerUser, fetchUSersCtrl, loginUserCtrl };
