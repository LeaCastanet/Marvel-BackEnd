const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/comics", async (req, res) => {
  try {
    const limit = "";
    const title = "";
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.APIKEY}&limit=${limit}&title${title}`
    );
    res.json(response.data);

    // console.log(response.data);
    // console.log(response.data.limit);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/comics/:characterId", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.characterId}?apiKey=${process.env.APIKEY}`
    );

    res.json(response.data);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
