const express = require("express");
const CreateUser = require("../controller/auth-controller");

const route = express.Router();

route.post("/createUser", CreateUser);

module.exports = route;
