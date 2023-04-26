const express = require("express");
const router = express.Router();
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const options = {
  method: "GET",
  url: process.env.url,
  headers: {
    "content-type": process.env.content_type,
    "X-RapidAPI-Key": process.env.X_RapidAPI_Key,
    "X-RapidAPI-Host": process.env.X_RapidAPI_Host,
  },
};

router.get("/data", async (req, res) => {
  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
