import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  try {
    // get all the data from db and return to the client
    res.json({
      status: "success",
      message: "here are the users",
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "success",
      message: error.message,
    });
  }
});

export default router;
