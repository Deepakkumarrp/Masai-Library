const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;
const { User } = require("../models/user.model");

const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  console.log(JWT_SECRET);
  try {
    if (token) {
      jwt.verify(token, `${JWT_SECRET}`, async (err, decoded) => {
        // console.log(err);
        console.log(decoded);
        if (decoded) {
            const { userID } = decoded;
            console.log(userID)
          const user = await User.findOne({ _id: userID });
          const require_role = user.isAdmin ? "Admin":"User"
          req.userID = userID;
          req.role = require_role;
          next();
        } else {
          res.status(400).json({ mssg: "You're not logged in.", err });
        }
      });
    } else {
      res.status(404).json({ mssg: "You're not logged in.", err });
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  auth,
};
