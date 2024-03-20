const jwt = require('jsonwebtoken');
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;
const { User } = require("../models/user.model");

const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  try {
    if (token) {
      jwt.verify(token, JWT_SECRET, async (err, decoded) => {
        if (decoded) {
          const { userID } = decoded;
          const user = await User.findOne({ _id: userID });
          const require_role = user.isAdmin ? "Admin":"User";
          req.userID = userID;
          req.role = require_role;
          next();
        } else {
          res.status(400).json({ mssg: "You're not logged in.", err });
        }
      })
    } else {
      res.status(404).json({ mssg: "You're not logged in. Token Missing.", err });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  auth,
};
