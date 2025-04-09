const User = require("../model/auth-model");

// for creating user
const CreateUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser)
      return res
        .status(409)
        .json({ sucess: false, message: "Username or email already exists" });

    const Create = new User({
      username,
      email,
      password,
      role: role || "user",
    });

    await Create.save();

    return res.status(200).json({
      sucess: true,
      message: "New User has been created",
      data: Create,
    });
  } catch (error) {
    console.error("Invalid server error");
    throw new Error("error", error);
  }
};

// for log in to the user account
const loginUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const findUser = await User.findOne({ $or: [{ email }, { username }] });

    if (!findUser) {
      return res
        .stauts(404)
        .json({ message: "Username or email not found or doesn't exist" });
    }

    const matchPassword = await findUser.ComparePassword(password);
    if (!matchPassword) {
      console.log("password doesnot match");
      return res.status(500).json({
        sucess: false,
        message: "Password doesnot match",
      });
    }

    const accessToken = await findUser.generateToken();

    return res.status(200).json({
      sucess: true,
      message: "Login sucessfull",
      token: accessToken,
      data: findUser,
    });
  } catch (error) {
    console.error("Invalid server error");
    throw new Error(error);
  }
};

const UserData = async (req, res) => {
  try {
    const userdata = req.user;
    console.log(userdata);
    return res.status(200).json({
      userdata,
    });
  } catch (error) {
    console.error("Something went wrong", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = { CreateUser, loginUser, UserData };
