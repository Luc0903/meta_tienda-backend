import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const DB_NAME = process.env.DATABASE_NAME;
const DB_USER = process.env.DATABASE_USER;
const DB_PASSWORD = process.env.DATABASE_PASSWORD;
const DB_URI = process.env.DATABASE_URI;

const DB_CONFIG = DB_URI?.replace("<NAME>", DB_NAME)
  .replace("<USER>", DB_USER)
  .replace("<PASSWORD>", DB_PASSWORD);

(async function () {
  try {
    await mongoose.connect(DB_CONFIG);
    console.log("✅ Database Connection Enabled");

    app.listen(PORT, () => {
      console.log("Server Connection Enabled");
      console.log("Listening Requests on PORT: " + PORT);
    });
  } catch (err) {
    console.log(err);
  }
})();
