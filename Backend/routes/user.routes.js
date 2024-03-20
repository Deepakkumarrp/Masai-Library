const express = require("express");
const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { name, email, password, isAdmin } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ mssg: "User with this email is already exists." });
    }
    bcrypt.hash(password, 5, async function (err, hash) {
      if (err) {
        res.status(400).json(err);
      } else {
        const newUser = new User({ name, email,password: hash, isAdmin });
        await newUser.save();
        res.status(201).json({ mssg: "Registered Successfully." });
      }
    });
  } catch (err) {
    res.status(400).json({ mssg: err });
  }
});

userRouter.post("/login",async(req,res) => {
    const {email,password} = req.body;
    try{
        const user = await User.findOne({email});
        if(user){
            bcrypt.compare(password, user.password, function(err, result) {
                if(result){
                    const token = jwt.sign({userID : user._id}, JWT_SECRET);
                    return res.status(201).send({"mssg":"Logged in",token})
                }else{
                    res.status(400).send({"mssg":"wrong credentials"});
                }
            })
        }else{
            res.status(400).json({"mssg":"User not found"})
        }
    }catch(err){
        res.status(400).json({err});
    }
})

module.exports = {
  userRouter,
};
