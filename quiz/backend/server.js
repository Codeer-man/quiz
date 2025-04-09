require("dotenv").config();
const express = require("express");
const connectDB = require("./utils/db");
const authRoute = require("./routes/auth-routes");
const errorhandling = require("./middleware/error-middleware");

const app = express();

app.use(express.json());
connectDB();

app.use("/api/auth", authRoute);

app.use(errorhandling);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is listning to ${PORT}`);
});
