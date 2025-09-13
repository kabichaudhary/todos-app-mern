import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./config/express-config.js";
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo db connections failed!!!", err);
  });
