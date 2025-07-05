const { default: mongoose } = require("mongoose");
require("dotenv").config()

const connectDb = async () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect("mongodb://your_url")
      // .connect(process.env.MONGO_DB_URL)
      .then(() => {
        console.log("Database connected");
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = { connectDb };