const Item = require("../models/Item");

const getAllItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

const createItem = async (req, res) => {
  const newItem = new Item(req.body);
  await newItem.save();
  res.status(201).json(newItem);
};

module.exports = { getAllItems, createItem };
