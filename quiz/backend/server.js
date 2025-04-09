require("dotenv").config();
const express = require("express");
const connectDB = require("./utils/db");

const app = express();

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is listning to ${PORT}`);
});
