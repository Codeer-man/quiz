require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/db");
const authRoute = require("./routes/auth-routes");
const errorhandling = require("./middleware/error-middleware");

const app = express();

const corpsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
  Credentials:true,
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corpsOptions));

connectDB();

app.use(express.json());
app.use(express.urlencoded({ limit: "20mb", extended: true }));

app.use("/api/auth", authRoute);

app.use(errorhandling);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is listning to ${PORT}`);
});
