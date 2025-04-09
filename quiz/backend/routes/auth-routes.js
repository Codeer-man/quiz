const express = require("express");
const {
  CreateUser,
  loginUser,
  UserData,
} = require("../controller/auth-controller");
const authMiddleware = require("../middleware/auth-middleware");
const validation = require("../middleware/validation-middleware");
const {
  RegisterValidation,
  LoginValidation,
} = require("../validation/auth-validation");

const route = express.Router();

route.post("/createUser", validation(RegisterValidation), CreateUser);
route.post("/login", validation(LoginValidation), loginUser);
route.get("/userdata", authMiddleware, UserData);

module.exports = route;
