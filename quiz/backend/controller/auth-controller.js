const User = require("../model/auth-model");

// for creating user 
const CreateUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ $or: [{ email, username }] });
    if (existingUser)
      return res
        .status(409)
        .json({ sucess: false, message: "Username or email already exists" });

    const Create = new User({
      username,
      email,
      password,
    });

    await Create.save();

    return res.status(200).json({
      sucess: true,
      message: "New User has been created",
      data: Create,
    });
  } catch (error) {
    console.error("Invalid server error");
    throw new Error(error);
  }
};

module.exports = CreateUser;
