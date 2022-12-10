import mongoose from "mongoose";

export const connectDB = () => {
  try {
    const mongoUrl = "mongodb://localhost:27017/user_crud";
    const conn = mongoose.connect(mongoUrl);
    conn
      ? console.log("mongo connect!")
      : console.error("unable to connect mongo");
  } catch (error) {}
};
