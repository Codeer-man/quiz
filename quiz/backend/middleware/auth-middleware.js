const User = require("../model/auth-model");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    res.status(404).json({ message: "token not found" });
  }

  const jwtToken = token.replace("Bearer ", "").trim();

  try {
    const verify = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    const Userdata = await User.findOne({ email: verify.email }).select(
      "-password"
    );
    if (!Userdata) {
      res.status(404).json({ message: "User not found" });
    }

    req.user = Userdata;
    req.id = Userdata._id;
    req.token = jwtToken;

    next();
  } catch (error) {
    console.error("Invalid token", error);
    return next(error);
  }
};
module.exports = authMiddleware;
