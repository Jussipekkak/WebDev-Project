const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

// Hae kaikki itemit
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Lisää uusi item
router.post("/", async (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });

  try {
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
