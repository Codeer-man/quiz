const mongoose = require("mongoose");

const URI = process.env.URI;

if (!URI) {
  console.error("URI not found or working");
}

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("database connected");
  } catch (error) {
    console.log("invalise server error", error);
    process.exit(1);
  }
};

module.exports = connectDB;
