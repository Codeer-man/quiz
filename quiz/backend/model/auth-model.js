const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/,
        "Please enter a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "password  is required"],
      minlength: [8, "8 letter is required"],
    },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

// encrypt / hash password to secure the pwd
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  } catch (error) {
    return next(error);
  }
});

// compare the hash password with the user password
UserSchema.methods.ComparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

// generating token for security
UserSchema.methods.generateToken = function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        username: this.username,
        email: this.email,
        role: this.role,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );
  } catch (error) {
    return console.error("Token not generated", error);
  }
};

module.exports = mongoose.model("User", UserSchema);
