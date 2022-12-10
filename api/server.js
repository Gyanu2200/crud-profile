import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

const PORT = 8000;

// middlewares
app.use(cors()); // allow cross orign access from different server frontend app
app.use(morgan("dev")); // log all the server requestes

// DB conncetion
import { connectDB } from "./src/config/dbConfig.js";
connectDB();

// router
import userRouter from "./src/routers/userRouter.js";
app.use("/users", userRouter);

// request handeler
app.use("/", (req, res) => {
  res.json({
    message: "hello world",
  });
});

//run node app in the web server by using app.listen
app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`server is running at local host http://localhost:${PORT}`);
});
