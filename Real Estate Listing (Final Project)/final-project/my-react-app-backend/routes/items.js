const router = require('express').Router();
const Item = require('../models/Item');

// Get all items
router.get('/', (req, res) => {
  Item.find()
    .then(items => res.json(items))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add a new item
router.post('/add', (req, res) => {
  const { name, description } = req.body;

  const newItem = new Item({ name, description });

  newItem.save()
    .then(() => res.json('Item added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
