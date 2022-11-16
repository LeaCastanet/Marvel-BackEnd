const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/characters", async (req, res) => {
  try {
    const limit = "";
    const name = "";
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.APIKEY}&${limit}&${name}`
    );
    res.json(response.data);
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
