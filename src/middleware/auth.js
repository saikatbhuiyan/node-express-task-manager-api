const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "thisismynewcourse");
    const user = await User.findOne({
      _id: decoded._id, // find with the id
      "tokens.token": token, // check token exist or not
    });

    if (!user) {
      throw new Error(); // call the catch error [res.status(401).send({ error: "Please authenticate." });]
    }

    req.user = user; // give user to req
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

module.exports = auth;
