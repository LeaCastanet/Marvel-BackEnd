const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/characters", async (req, res) => {
  try {
    // let limit = 100;
    // if (req.query.limit) {
    //   limit = req.query.limit;
    // }

    const limit = req.query.limit || 100;
    // const skip = req.query.skip || 0;
    const name = req.query.name || "";
    const page = req.query.page || 1;

    let pageRequired = 1;
    if (page) {
      pageRequired = Number(page);
    }
    const skip = (pageRequired - 1) * limit;

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.APIKEY}&limit=${limit}&skip=${skip}&name=${name}`
    );
    res.json(response.data);
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/character/:characterId", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${req.params.characterId}?apiKey=${process.env.APIKEY}`
    );

    res.json(response.data);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
